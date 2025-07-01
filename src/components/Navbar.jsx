import React, { useState, useEffect } from "react";
import {  motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contextApi/AuthContext";
const Navbar = () => {
  const [hidden, setHidden] = useState(false); //scrolling effect
  const [isOpen, setIsOpen] = useState(false); //side bar
  const elements = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "AI-Chatbot",
      link: "/aibot",
    },
    {
      id: 3,
      name: "Road Maps",
      link: "/roadmap",
    },
    {
      id: 4,
      name: "Resources",
      link: "/resources",
    },
    {
      id: 5,
      name: "Market",
      link: "/market",
    },
    {
      id: 6,
      name: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402601/user_npao9t.png",
      link: "/profile",
    },
    {
      id: 7,
      name: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1750869462/telephone_hqrdb1.png",
      link: "/contact",
    },
    {
      id: 8,
      name: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1750869550/about_e3w2aq.png",
      link: "/about",
    },
  ];
  const {currentUser}=useAuth();
  const [presentLoc,setPresentLoc]=useState("Home");

  useEffect(() => {
    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > previousScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      previousScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //for desktoop
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="font-[#Roboto] fixed top-0 left-0 w-full bg-[#FBFBFB] z-50 "
    >
      <div className="flex  justify-between p-5 shadow-lg ">
        <div className="ml-4 flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750874502/school_ruxnla.png"
            className="h-10 w-10 rounded bg-white border border-gray-200"
            alt="Student Portal Logo"
          />
          <span className="text-xl font-bold text-gray-700">
            Student Portal
          </span>
        </Link>
      </div>

        <div className="md:flex hidden mt-3 mr-10">
          <ul className="flex space-x-6 ">
            {elements.map((data) => (
              <li key={data.id} onClick={()=>setPresentLoc(data.name)}>
                <button>
                  <Link to={data.link}>
                    <li className={`hover:text-blue-700 font-semibold text-gray-600
                      ${presentLoc === data.name ? "border-b-2 rounded-sm border-b-blue-600":"border-0" }
                      `}>
                      {data.id <= 5 && <span   className=" rounded lg:p-2">{data.name}</span>}
                      {data.id >= 6 && <img  src={data.name} className="h-6" />}
                    </li>
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex">
          <button
            className="hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img
                src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402549/close_c9mlvz.png"
                className="h-4"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750870335/menu_l0gk6o.png"
                className="h-6 "
              />
            )}
          </button>
        </div>
      </div>
      {/* this is for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar for mobile */}
      <div
        className={`
    fixed top-0 w-52 h-full  bg-white shadow-lg z-50
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:hidden
  `}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <img
            src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750874502/school_ruxnla.png"
            className="h-full w-20"
          />
          {elements.map((data) => (
            <li key={data.id} onClick={()=>setPresentLoc(data.name)} className="bg-gray-100 rounded-lg">
              <Link
                to={data.link}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2  p-2 text-gray-600 hover:text-blue-800 font-semibold
                  ${presentLoc == data.name ? "border-b-2 rounded":"border-0"}
                  `}
              >
                {data.id <= 5 && <span >{data.name}</span>}
                 {data.id >= 6 && 
                 <span className="flex space-x-4">
                  <img src={data.name} className="h-6" alt="" />{
                  (data.id==6 && <p className="text-black font-mono"> {currentUser && currentUser.displayName ? currentUser.displayName : "Login"}</p>)|| 
                  (data.id==7 && <p>contact</p>) || 
                  (data.id==8 && <p >About</p>)}</span>
                  }
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-400 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.nav>

    //for mobile
  );
};

export default Navbar;
