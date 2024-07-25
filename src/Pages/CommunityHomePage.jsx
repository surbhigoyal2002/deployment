import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Explore from '../Components/Explore'
import Topics from '../Components/Topics'
import LeaderboardBadges from '../Components/LeaderboardBadges'
import CommunityShoutouts from '../Components/CommunityShoutouts'
import PopularArticles from '../Components/PopularArticles'

const CommunityHomePage = () => {
  return (
    <div className='font-[Open_Sans]'>
      <Navbar/>
      <Hero/>
      <Explore/>
      <Topics/>
      <LeaderboardBadges/>
      <CommunityShoutouts/>
      <PopularArticles/>
    </div>
  )
}

export default CommunityHomePage
