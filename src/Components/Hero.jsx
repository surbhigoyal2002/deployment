import React from 'react'

const Hero = () => {
  return (

      <div className="bg-[#050A30] flex flex-col items-center justify-center  h-[40vh]">
      {/* Main Heading */}
      <h1 className="text-white text-6xl font-bold mb-2 font-[Open_Sans]">
        Be part of the conversation
      </h1>
      
      {/* Sub Heading */}
      <p className="text-xl text-center mb-6">
        <span className="text-white font-[Open_Sans">The modern community for </span>
        <span className="text-[#F5E649] font-[Open_Sans">coaches, mentors and mentees</span>
      </p>
      
      {/* Search Bar */}
      <div className="flex items-center bg-white w-3/4 md:w-1/2 lg:w-1/3 p-3 h-[4vh] ">
        <input 
          type="text" 
          placeholder="Ask questions, get answers and engage with your peers." 
          className="w-full h-[4vh] text-gray-700 rounded-full py-2 focus:outline-none font-[Open_Sans] "
        />
      </div>
    </div>
  );
   
  
}

export default Hero
