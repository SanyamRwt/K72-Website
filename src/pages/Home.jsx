import React from 'react'
import Video from '../components/home/video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
           <Video />
        </div>
            { <div className='h-screen w-screen relative flex flex-col'> 
            <HomeBottomText />
            <HomeHeroText />
            </div> }
    </div>
  )
}

export default Home

