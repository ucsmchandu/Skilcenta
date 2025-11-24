import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useAuth } from '../contextApi/AuthContext';
import { useNavigate } from 'react-router-dom';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const GeminiChat = () => {
  const { currentUser } = useAuth();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); // [{role: 'user'|'ai', text: string}]
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();
      setMessages((prev) => [...prev, { role: 'ai', text }]);
      setInput('');
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'ai', text: 'Error getting response.' }]);
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10">
      <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl border border-indigo-100 flex flex-col h-[80vh]">
        <header className="flex items-center gap-3 px-8 py-6 border-b border-indigo-100 bg-gradient-to-r from-indigo-500/80 to-blue-500/80 rounded-t-3xl">
          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="AI" className="h-10 w-10 rounded-full shadow" />
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight"> AI Chatbot</h2>
            <p className="text-xs text-indigo-100 font-mono">Your smart study assistant</p>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gradient-to-b from-white/90 to-indigo-50">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 select-none">
              {/* <img src="https://cdn.dribbble.com/users/1129231/screenshots/3602412/ai-bot.gif" alt="AI" className="h-32 mb-4" /> */}
              <span className="text-lg font-medium">Start a conversation with Gemini AI...</span>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl shadow
                  ${msg.role === 'user'
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-br-none'
                    : 'bg-white border border-indigo-100 text-gray-800 rounded-bl-none'
                  } text-base whitespace-pre-line`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[75%] px-4 py-3 rounded-2xl bg-white border border-indigo-100 text-gray-800 rounded-bl-none shadow text-base flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Thinking...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <form
          className="flex items-center gap-3 px-6 py-5 border-t border-indigo-100 bg-white/80 rounded-b-3xl"
          onSubmit={e => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            type="text"
            className="flex-1 p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800 text-lg shadow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Gemini anything..."
            disabled={loading}
            autoFocus
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-indigo-600 hover:to-blue-600 transition-all disabled:opacity-60"
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Send
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeminiChat;