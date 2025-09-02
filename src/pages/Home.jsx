import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mt-30  ">
      <div className=" flex flex-col shadow-2xl p-6 justify-center rounded-2xl text-white h-auto items-center m-6 bg-gradient-to-r from-[#604652] to-[#97866A]">
        <h1 className="text-4xl md:text-6xl  font-serif mb-4">Skilcenta</h1>
        <p className="text-xl text-center md:text-2xl opacity-90 max-w-3xl mx-auto">
          Unleash your potential with a platform that understands your goals,
          your skills, and your path
        </p>
        <p className="mt-6 text-lg font-extralight text-amber-300">
          Dream. Build. Achieve.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        <div className="bg-linear-to-br from-[#f0f9ff] to-[#bae6fd] rounded-xl p-6 text-center shadow-sm ">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750915662/graduated_niiqpf.png"
              className="h-24 ml-3"
            />
          </div>
          <div className="text-2xl font-bold text-gray-900">50+</div>
          <p className="text-sm text-gray-600 mt-1 ">Students Trusted</p>
        </div>
        <div className="bg-linear-to-br from-[#faf5ff] to-[#e9d5ff] rounded-xl p-6 text-center shadow-sm">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750915662/up_hrwfwn.png"
              className="h-24 ml-3"
            />
          </div>
          <div className="text-2xl font-bold text-gray-900">85%</div>
          <p className="text-sm text-gray-600 mt-1 ">Success Rate</p>
        </div>
        <div className="bg-linear-to-br from-[#f2fcf4] to-[#c4ecd3] rounded-xl p-6 text-center shadow-sm">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750915663/ranking-badge_yahcky.png"
              className="h-24 ml-3"
            />
          </div>
          <div className="text-2xl font-bold text-gray-900">10+</div>
          <p className="text-sm text-gray-600 mt-1 ">Roadmaps</p>
        </div>
        <div className="bg-linear-to-br from-[#fffbeb] to-[#fde68a] rounded-xl p-6 text-center shadow-sm">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750915663/chat-bot_w29nsq.png"
              className="h-24 ml-3"
            />
          </div>
          <div className="text-2xl font-bold text-gray-900">24/7</div>
          <p className="text-sm text-gray-600 mt-1 ">AI Response</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-10">
        <Link to="/aibot">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="bg-cyan-100 rounded-xl cursor-pointer p-6 text-center shadow-sm"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750918175/ai-technology_xium3j.png"
              className="h-12"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-start mt-2">
            AI Chatbot
          </h3>
          <p className="text-amber-700 mb-4 leading-relaxed text-start">
            Get instant help with your studies, assignments, and academic
            questions
          </p>
          <div className="flex justify-between">
            <p className="text-sm text-start text-black font-semibold">
              24/7 Avalible
            </p>
            <p className="text-black">→</p>
          </div>
        </motion.div>
        </Link>

       <Link to="/market">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className=" rounded-xl p-6 bg-[#578FCA] cursor-pointer text-center shadow-sm"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750918846/shopping-cart_thhcim.png"
              className="h-12"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 text-start mt-2">
            Marketplace
          </h3>
          <p className="text-amber-300 mb-4 leading-relaxed text-start">
            Buy and sell second-hand books, notes, and study materials
          </p>
          <div className="flex justify-between">
            <p className="text-sm text-start text-black font-semibold">Items</p>
            <p className="text-white">→</p>
          </div>
        </motion.div>
       </Link>

       <Link to="/roadmap">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className=" rounded-xl bg-amber-200 cursor-pointer p-6 text-center shadow-sm"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750919017/pointer_k6umy7.png"
              className="h-12"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-start mt-2">
            Learning Roadmaps
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-start">
            Structured paths for web dev, app dev, data analysis, and more
          </p>
          <div className="flex justify-between">
            <p className="text-sm text-start text-black font-semibold">
              10+ Roadmaps
            </p>
            <p className="text-black">→</p>
          </div>
        </motion.div>
       </Link>

        <Link to="/resources">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className=" rounded-xl bg-blue-200 cursor-pointer p-6 text-center shadow-sm"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750919186/paper_tlhpvy.png"
              className="h-12"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-start mt-2">
            Resource Sharing
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-start">
            Share and access study materials for UPSC, GATE, and other exams
          </p>
          <div className="flex justify-between">
            <p className="text-sm text-start text-blue-600 font-semibold">
              Resources
            </p>
            <p>→</p>
          </div>
        </motion.div>
        </Link>
      </div>

      <div className="bg-blue-600 h-60 text-white flex flex-col justify-center items-center">
        <p className="text-3xl font-bold mb-4 text-center">
          Ready to Start Your Career Journey?
        </p>
        <p className="text-xl text-center mb-8 text-blue-100">
          Trusted by students. Powered by purpose.
        </p>
        <Link to="/roadmap">
        <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Get started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
