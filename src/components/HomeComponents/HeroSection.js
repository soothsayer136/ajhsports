import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

function HeroSection() {
    return (
        <div>
            <div className='flex flex-col justify-center justify-items-center items-center  gap-4 h-72'>
                <h1 className='lg:text-6xl text-4xl font-bold'>Tennis Lessons</h1>
                <h2 className=''>Professional private, semi-private and group tennis lessons</h2>
                <button className='bg-current p-3 px-6 rounded text-white mt-4 flex gap-6 items-center'>Ask Andrew <FaArrowRight /> </button>
            </div>

            <div>
                <img className='w-full' src='/heroimg1.png'/>
            </div>
        </div>
    )
}

export default HeroSection