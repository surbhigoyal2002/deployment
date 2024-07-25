import React, { useState } from 'react'
import { HiSpeakerphone } from "react-icons/hi";


const contentBoxes = [
    {
      title: 'Subject Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time: '1 day ago'
    },
    {
      title: 'Subject Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time: '2 days ago'
    },
    {
      title: 'Subject Title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..',
      time: '3 days ago'
    },
    {
      title: 'Subject Title 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time: '4 days ago'
    }
  ];
  
const CommunityShoutouts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      {/* heading */}
      <div className="flex items-center space-x-4 mb-6 pl-24 flex items-center text-center ">
        <h2 className="text-5xl font-bold text-left font-[Open_Sans]">Community Shoutouts</h2>
        <HiSpeakerphone size={44} />
      </div>
      {/* content boxes */}
      <div className="flex flex-col items-center space-y-4 py-12">
      <div className="bg-[#2D488F] rounded-[35px] p-6  w-[80%] h-[25vh] flex flex-col items-center relative">
        <h2 className="text-2xl align-center text-white font-bold mb-2">{contentBoxes[currentIndex].title}</h2>
        <p className="mb-6  text-gray-300">{contentBoxes[currentIndex].content}</p>
        <span className="absolute right-6 bottom-4 text-gray-400 text-sm">{contentBoxes[currentIndex].time}</span>
      </div>
      <div className="flex space-x-2">
        {contentBoxes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default CommunityShoutouts
