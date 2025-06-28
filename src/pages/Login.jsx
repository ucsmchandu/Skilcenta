import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../server/Firebase';
import { toast } from 'react-toastify';
import SigninWithGoogle from '../components/SigninWithGoogle';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError('');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your login logic here
    if (!form.email || !form.password) {
      setError('Please enter email and password');
      return;
    }
    
    try{
        await signInWithEmailAndPassword(auth,form.email,form.password);
        toast.success('logged in successfully',{
            position:'top-right',
        });
    }
    catch(error){
        console.log(error.message);
        toast.error('Invalid login info',{
            position:'top-right'
        });
    }

    setForm({ email: '', password: '' });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-black">Login</h2>
        <p className='mb-6'><span className='text-gray-600'>or</span> <Link to="/register"><span className=' cursor-pointer text-sm text-blue-900 font-semibold hover:underline'>create account</span></Link> </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Password"
            required
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <SigninWithGoogle/>
      </div>
    </div>
  );
};

export default Login;