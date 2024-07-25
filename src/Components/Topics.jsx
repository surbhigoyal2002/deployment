import React from 'react'


const topics = [
    { title: 'Subject Title', stats: '1 day ago / 27 replies' },
    { title: 'Subject Title', stats: '1 day ago' },
    { title: 'Subject Title', stats: '1 day ago' },
    { title: 'Subject Title', stats: '1 day ago' },
  ];

const Topics = () => {
  return (
    <div>
        {/* heading */}
      <div className="flex items-center space-x-5 mb-6 pl-24 flex items-center text-center ">
        <h2 className="text-5xl font-bold text-left font-[Open_Sans]">Topics 🔥</h2>
      </div>
      {/* Box-section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mb-6  mx-auto max-w-6xl py-10">
        {topics.map((box, index) => (
          <div key={index} className={`bg-[#9FA3A7] p-5 font-[Open_Sans] h-[20vh] flex items-center flex-col justify-center content-center rounded-[28px] text-center  hover:bg-gray-400 transition-colors ${index === 0 ? 'md:col-span-3' : ''}`}>
            <h1 className="text-2xl text-white font-bold mb-2">{box.title}</h1>
            <p className="text-white font-semibold">{box.stats}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topics
