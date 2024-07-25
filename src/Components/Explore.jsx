import React, {useState} from 'react'
import { IoSearchSharp } from "react-icons/io5";


const topics = [
    { title: 'Welcome', stats: '178 topics / 1912 replies' },
    { title: 'Koach platform', stats: '178 topics / 1912 replies' },
    { title: 'Koach & learn', stats: '178 topics / 1912 replies' },
    { title: 'Join a circle', stats: '1178 topics / 1912 replies' },
    { title: 'Knowledge base', stats: '178 topics / 1912 replies' },
    { title: 'Integrations', stats: '178 topics / 1912 repliess' }
  ];

const Explore = () => {

        const [showSearch, setShowSearch] = useState(false);
      
        const toggleSearch = () => {
          setShowSearch(!showSearch);
        };

  return (
    <div className="bg-white p-6 py-16 px-10 rounded-lg w-full mx-auto">
      {/* Top Section */}
      <div className="flex items-center space-x-5 mb-6 pl-12 flex items-center text-center">
        <h2 className="text-5xl font-bold text-left font-[Open_Sans]">Explore your community</h2>
        <button onClick={toggleSearch} className="text-gray-600 hover:text-gray-800 font-[Open_Sans]">
          <IoSearchSharp size={38} className="stroke-current text-black" style={{ strokeWidth: '8' }}/>
        </button>
      </div>
      
      {/* Search Section */}
      {showSearch && (
        <div className="mb-6 px-10 mx-auto">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:[#2D488E] font-[Open_Sans]"
          />
        </div>
      )}
      
      {/* Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6  mx-auto max-w-6xl py-10">
        {topics.map((box, index) => (
          <div key={index} className="bg-[#F5E649] p-5 rounded-[28px] text-center  hover:bg-yellow-300 transition-colors font-[Open_Sans] h-[20vh] flex items-center flex-col justify-center content-center">
            <h1 className="text-2xl font-bold mb-2">{box.title}</h1>
            <p className="text-[#2D488F] font-semibold">{box.stats}</p>
          </div>
        ))}
      </div>

      {/* Start a Convo Button */}
      <div className="text-center pb-12">
        <button className="bg-[#2D488F] text-xl text-white font-bold px-10 py-3  rounded-lg hover:bg-blue-700 font-[Open_Sans] transition-colors">
          Start a convo now
        </button>
      </div>
      <hr className="border-black border-t-1 mx-4 8" />
    </div>
  )
}

export default Explore
