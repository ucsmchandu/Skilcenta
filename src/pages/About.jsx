import React from 'react';

const About = () => {
  return (
    <section className="mt-30 max-w-4xl mx-auto p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">📘 Welcome to the Skilcenta!</h1>
      <p className="text-lg text-gray-500 mb-6">
        Hey there! 👋<br />
        This platform is specially built <strong>for students, by a student</strong> — to make your academic journey easier and smarter.
      </p>

      <div className="space-y-4 text-gray-500">
        <div>
          <h2 className="text-xl font-semibold text-blue-500">🔁 Buy & Sell Academic Stuff</h2>
          <p>Got old textbooks or tools lying around? Sell them here! Need a used calculator or a semester book? Buy it directly from other students.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-500">📂 Share & Access Resources</h2>
          <p>Find and upload useful PDFs, notes, and video materials — organized by semester, branch, and subject. No more last-minute chaos!</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-500">🤖 Use Powerful AI Tools</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Doubt Solver:</strong> Ask any question and get instant answers.</li>
            <li><strong>Dev Assistant:</strong> Get code help and documentation support.</li>
            <li><strong>Debugging Tool:</strong> Fix code issues quickly with AI help.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-500">🧭 Explore Career Roadmaps</h2>
          <p>Whether it's web dev, app dev, or data science — follow guided paths to grow your career confidently.</p>
        </div>

        <div className="mt-6  bg-[#a4e2a1] p-4 rounded-xl shadow-2xl text-center">
          <p className=" text-gray-700 font-medium">
            💡 <strong>Why this portal?</strong><br />
            Because students deserve a smarter way to learn, share, and grow — all in one place.
            This is more than a website; it’s a community-driven platform to support each other.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
