import React from 'react'

const PopularArticles = () => {
    const boxes = [
        '', '', '', '', '', '', '', ''
      ]; 

  return (
    <div className='mt-10'>
      {/* heading */}
      <div className="flex items-center space-x-4 mb-6 pl-24  flex items-center text-center ">
        <h2 className="text-5xl font-bold text-left font-[Open_Sans]">Popular Articles</h2>
       </div>
       {/* articles */}
       <div className="flex flex-col items-center space-y-4 p-6 ">
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4">
          {boxes.map((box, index) => (
            <div key={index} className="flex-none w-[24%] h-[60vh] bg-[#9FA3A7] text-white flex items-center justify-center rounded-[45px] shadow-md">
              {box}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default PopularArticles
