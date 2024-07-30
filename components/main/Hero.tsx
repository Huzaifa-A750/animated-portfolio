import React from 'react'
import { HeroContent } from '../sub/HeroContent'

export const Hero = () => {
  return (
    <div id="about-me" className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop 
        className='rotate-180 absolute top-[-500px] md:top-[-550px] transition-all duration-500 lg:top-[-320px] xl:top-[-380px] left-0 z-[1] w-full h-full object-contain'
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent />
    </div>
  )
}

