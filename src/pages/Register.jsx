import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { firestore } from '../server/Firebase';
import { auth } from '../server/Firebase';
import { setDoc,doc } from 'firebase/firestore';
const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError('');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (form.username.length < 5) {
      setError('Username must be at least 5 characters long.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    try{
       const userCredentials= await createUserWithEmailAndPassword(auth,form.email,form.password);
        const user=auth.currentUser;
        // console.log(user.uid);
        // console.log(user.email);
        // console.log(user.photoURL);
        // console.log(user.emailVerified);
        // console.log(user.displayName);
        if(user){
            await setDoc(doc(firestore,"users",user.uid),{
                email:user.email,
                userName:form.username,
            });
        }
    }
    catch(error){
        console.log(error.message);
    }

    toast.success('User registered successfully',{
        position:'top-right'
    });
    setForm({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold   text-black">Register</h2>
        <p className='mb-6'><span className='text-gray-600'>or</span> <Link to="/login"><span className=' cursor-pointer text-sm text-blue-900 font-semibold hover:underline'>already have account?</span></Link> </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Username"
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Confirm Password"
            required
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;