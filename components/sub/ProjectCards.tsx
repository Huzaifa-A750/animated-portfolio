import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
}

export const ProjectCards = ({ src, title, description }: Props) => {
  return (
    <div className='cursor-pointer relative overflow-hidden rounded-lg border border-[#2A0E61] shadow-2xl hover:shadow-purple-700 transition-all duration-500'>
      <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-cover'
      />
      <div className='relative p-4 bg-[#030014]'>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  )
}
