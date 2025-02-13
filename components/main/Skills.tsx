import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import { SkillsDataProvider } from '../sub/SkillsDataProvider'
import { SkillsText } from '../sub/SkillsText'

export const Skills = () => {
  return (
    <section id="skills" className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-0 sm:pb-80 py-0 sm:py-20 z-[1]'
    style={{transform: "scale(0.9)"}}
    >

      <SkillsText />

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Skill_data.map ((image, index) => (
            <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Frontend_skill.map ((image, index) => (
            <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Backend_skill.map ((image, index) => (
            <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Full_stack.map ((image, index) => (
            <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Other_skill.map ((image, index) => (
            <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>

        <div className='w-full h-full absolute z-[-10]'>
          <div className='w-full h-full opacity-30 absolute flex items-center justify-center bg-cover'>
            <video 
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
            />
          </div>
        </div>

    </section>
  )
}
