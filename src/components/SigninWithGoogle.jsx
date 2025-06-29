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
          className="w-full shadow-md hover:shadow-lg bg-gray-100 border border-gray-200 flex items-center justify-center gap-2 bg-ed-500 text-gray-600 rounded-lg px-6 py-2 font-semibold cursor-pointer transition"
        >
            <img src='https://res.cloudinary.com/dllvcgpsk/image/upload/v1743403171/google_zgmnav.png' className='h-6' />
          <span>Sign in with Google</span>
        </button>
    </div>
  )
}

export default SigninWithGoogle