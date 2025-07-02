import React from 'react';
import SigninWithGoogle from '../components/SigninWithGoogle';
// import { useLocation, useNavigate } from 'react-router-dom';
import GithubAuth from '../components/GithubAuth';

const Login = () => {
  // const [form, setForm] = useState({ email: '', password: '' });
  // const [error, setError] = useState('');
  // const location=useLocation();
  // const navigate=useNavigate();
  // const from = location.state?.from?.pathname || '/';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl text-center font-bold text-black">Login</h2>
        <div className="flex items-center flex-col my-4">
           <SigninWithGoogle/>
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
           <GithubAuth/>
        </div>
       
       
      </div>
    </div>
  );
};

export default Login;