import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const GeminiChat = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();
      setOutput(text);
      setInput('');
    } catch (err) {
      setOutput('Error getting response.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-40 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-extrabold text-indigo-700 tracking-tight mb-2">AI Chatbot</h2>
      <div className="w-full flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          className="flex-1 p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800 text-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-indigo-600 hover:to-blue-600 transition-all disabled:opacity-60"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              Thinking...
            </span>
          ) : (
            'Send'
          )}
        </button>
      </div>
      {output && (
        <div className="w-full p-4 bg-white rounded-xl border border-indigo-100 shadow text-gray-800">
          <div className="font-semibold text-indigo-600 mb-1">AI:</div>
          <div className="whitespace-pre-line">{output}</div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;