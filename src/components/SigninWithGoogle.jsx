import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth,firestore } from '../server/Firebase'
import { setDoc,doc } from 'firebase/firestore'
import { useLocation,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const SigninWithGoogle = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';
    const handleGoogleSignIn=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(
            async(result)=>{
                const userData=result.user;
                if(userData){
                    await setDoc(doc(firestore,"users",userData.uid),{
                        email:userData.email,
                        userName:userData.displayName
                    });
                    toast.success('User login Successful',{
                      position:'top-right'
                    });
                    navigate(from,{replace:true});
                }
            }
        ).catch((error)=>console.log("Error from signinwithgoogle.jsx :",error.message));
    }

  return (
    <div>
        <button
          onClick={handleGoogleSignIn}
          className="flex cursor-pointer items-center justify-center gap-3 w-full px-6 py-2 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition"
        >
            <img src='https://res.cloudinary.com/dllvcgpsk/image/upload/v1743403171/google_zgmnav.png' className='h-6' />
          <span>Sign in with Google</span>
        </button>
    </div>
  )
}

export default SigninWithGoogle