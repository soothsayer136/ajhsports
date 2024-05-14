import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function GetStarted() {
    return (
        <div className='bg-secondary p-5 py-28'>
            <div className='grid md:grid-cols-2 max-w-7xl mx-auto items-center justify-between gap-10'>
                <div className='flex flex-col gap-4 lg:px-20 px-5'>
                    <h3 className='text-4xl font-semibold'>Social Tennis and Table Tennis</h3>
                    <h3 className=''>AJH Sports provides social and competitive tennis sessions for players of all skill levels. We charge a $5 entry for two hours of hitting, great for fiend groups who need a couple of extra players to form a round robin.</h3>
                    <button className='btn-primary max-w-fit'>Get started for free <FaArrowRight /></button>
                </div>
                <div className='p-5'>
                    <img src='/getstarted1.png' className='mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default GetStarted