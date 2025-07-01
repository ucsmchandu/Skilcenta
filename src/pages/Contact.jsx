import React, { useState } from 'react'
import { toast } from 'react-toastify';
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,setLoading]=useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const formData=new FormData(e.target);
    formData.append("access_key","379f8770-c691-43da-ab5c-143d2c7089b8");
    const res=await fetch("https://api.web3forms.com/submit",{
      method:"POST",
      body:formData
    }).then((res)=>res.json());
    if(res.success){
      // console.log("success",res);
      toast.success("Message sent successfully",{
        position:'top-left'
      });
    }
    else{
      // console.log("error");
       toast.error("Error Message not Sent!",{
        position:'top-left'
      });
    }
    }
    catch(err){
      console.log(err.message);
    }
    finally{
      setLoading(false);
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10 mt-20">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          Have a question or need help? Fill out the form and our team will get back to you soon.
        </p>
        {loading ? (
          <div className="flex flex-col items-center py-12">
          <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <span className="text-blue-700 font-semibold text-lg">Sending your message...</span>
        </div>
        ): submitted ? (
          <div className="text-green-600 text-center font-semibold py-8">
            Thank you for contacting us! We will respond soon.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Or email us at <a href="mailto:skilcenta.contact@gmail.com" className="text-blue-600 underline">skilcenta.contact@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact