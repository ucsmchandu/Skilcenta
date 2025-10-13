import { GithubAuthProvider, signInWithPopup, fetchSignInMethodsForEmail } from 'firebase/auth'
import React from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { firestore, auth } from '../server/Firebase'
import { useNavigate, useLocation } from 'react-router-dom'

const GithubAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(firestore, 'users', user.uid), {
          email: user.email,
          userName: user.displayName
        });
        toast.success("User login successful", {
          position: 'top-left'
        });
        navigate(from, { replace: true });
      }
    } catch (err) {
      //handling the firebase error
      if(err.code==="auth/account-exists-with-different-credential"){
        const email=err.customData?.email; //getting email form the error
        const pendingCred=err.credential; //store cred

        //fetch existing sign-in methods for that email (checking with google)
        const methods=await fetchSignInMethodsForEmail(auth,email);
        if(methods[0]==="google.com"){
          toast.error(
          `You already signed up using Google for ${email}. Please use Google login instead.`,
          { position: "top-left" }
        );
        } else{
           toast.error(
          `This email is already linked with another provider: ${methods.join(", ")}`,
          { position: "top-left" }
        );
        }
        console.log("Existing methods :",methods);
      }else{
        console.log("Error :", err.message);
        toast.error("GitHub login failed", { position: 'top-left' });
      }
    }
  }

  return (
    <button
      onClick={handleGithubLogin}
      className="flex cursor-pointer items-center justify-center gap-3 px-6 py-2 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition"
      aria-label="Sign in with GitHub"
    >
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="GitHub Logo"
        className="h-6 w-6 rounded-3xl"
      />
      <span>Sign in with GitHub</span>
    </button>
  )
}

export default GithubAuth;