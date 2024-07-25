import React from 'react'
import companyLogo from '../assets/koach_logopng.png';
import moon from '../assets/moon_icon.png'
import profile from '../assets/profile_icon.png'
import chat from '../assets/chat_icon.png'
import bell from '../assets/bell_icon.png'
import v from '../assets/v_icon.png'
import { IoMoonOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="bg-white  shadow-md px-10 py-4 flex items-center justify-between h-7vh">
      {/* Left Section */}
      <div className="flex items-center space-x-12">
        <div><img src={companyLogo} alt="Company Logo" className="w-8 h-8" /></div>
        <div className="flex items-center space-x-14 text-[#2D488E] font-[Open_Sans]">
          <a href="#knowledge-base" className="hover:text-blue-800 text-[19px] font-[Open_Sans]">Knowledge Base</a>
          <a href="#product" className="hover:text-blue-800 text-[19px] font-[Open_Sans]">Product</a>
          <a href="#explore-circles" className="hover:text-blue-800 text-[19px] font-[Open_Sans]">Explore Circles</a>
          <a href="#community" className="hover:text-blue-800 text-[19px] font-[Open_Sans]">Community</a>
          <a href="#ideas" className="hover:text-blue-800 text-[19px] font-[Open_Sans]">Ideas</a>
        </div>
      </div>
      <button className="bg-[#2D488E] text-white text-[15px] font-semibold px-2 py-1 rounded-[12px] hover:bg-blue-800 text-lg border-[5px] border-[#F5E649] font-[Open_Sans]">+ New Post</button>
      {/* Right Section */}
      <div className="flex items-center space-x-6">
        
        <div className="flex items-center space-x-5">
          <button className="w-7 h-7  flex items-center justify-center overflow-hidden">
            <IoMoonOutline style={{ color:' #2D488E'}} className="w-8 h-8 object-cover" />
          </button>
          <button className="w-9 h-9 bg-[#D7DDED] rounded-full flex items-center justify-center overflow-hidden">
            <IoChatboxEllipsesOutline style={{ color:' #2D488E'}} className="w-6 h-6 object-cover" />
          </button>
          <button className="w-9 h-9 bg-[#D7DDED] rounded-full  flex items-center justify-center overflow-hidden">
            <FaRegBell style={{ color:' #2D488E'}} className="w-5 h-5 object-cover" />
          </button>
          <button className="w-9 h-9  flex items-center justify-center overflow-hidden">
            <img src={profile} alt="User 4"  />
          </button>
          <button className="text-gray-600 hover:text-gray-800 text-lg"><img src={v} alt="" /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

