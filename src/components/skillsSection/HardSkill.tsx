
import Skills from '@/data/skills'
import Image from 'next/image'
import React from 'react'

export const HardSkill = () => {
  return (
    <div className='overflow-hidden w-full h-auto flex'>
      <div className="w-2/3">
        {Skills.map((item, index)=>(
          <Image 
            src={item.skillImage} 
            alt={item.skillName}
            width={500}
            height={300}
            className='w-full h-auto'
            />
        ))}
      </div>
      <div className="w-1/3"></div>    
    </div>
  )
}

