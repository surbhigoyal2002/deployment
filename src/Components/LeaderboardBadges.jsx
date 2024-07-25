import React from 'react'
import leaderboard from '../assets/leaderboard.png'
import badges from '../assets/badges.png'
import profile from '../assets/profile_icon.png'

const mentors = [
    { name: 'Name', photo: profile },
    { name: 'Name', photo: profile },
    { name: 'Name', photo: profile },
    { name: 'Name', photo: profile },
    { name: 'Name', photo: profile },
];

const LeaderboardBadges = () => {
  return (
    <div className='flex flex-row py-20 px-auto items-start'>
      <div className='w-[50%] flex flex-col items-start space-y-6 pl-24'>
        <div className='flex items-center space-x-5'>
          <h1 className="text-5xl font-bold font-[Open_Sans]">Leaderboard</h1>
          <img src={leaderboard} alt="Leaderboard" className='h-12 w-12' />
        </div>
        <div className="w-full flex flex-col mt-8 py-5">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex items-center mb-4 py-1">
              <span className="text-2xl font-bold mr-4">{index + 1}</span>
              <img src={mentor.photo} alt={mentor.name} className="w-12 h-12 rounded-full mr-4" />
              <span className="text-lg">{mentor.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[50%] flex flex-col items-start justify-start pl-24'>
        <div className='flex items-center space-x-5'>
          <h1 className="text-5xl font-bold font-[Open_Sans]">Badges</h1>
          <img src={badges} alt="Badges" className='h-12 w-12' />
        </div>
      </div>
    </div>
  )
}

export default LeaderboardBadges
