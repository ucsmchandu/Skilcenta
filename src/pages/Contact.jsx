import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
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
        {submitted ? (
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
          Or email us at <a href="mailto:support@studentportal.com" className="text-blue-600 underline">support@studentportal.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact