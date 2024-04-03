import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function OurEvents() {

    const data = [
        {
            day: "Daily",
            name: 'Kids Sports Parties',
            location: 'Kings Park',
        },
        {
            day: "Mon-Thu",
            name: 'Social Matches Meetup',
            location: 'Kings Park',
        },
        {
            day: "Daily",
            name: 'Kids Sports Parties',
            location: 'Kings Park',
        },
        {
            day: "Daily",
            name: 'Kids Sports Parties',
            location: 'Kings Park',
        },
    ]

    return (
        <div className='lg:p-20 p-10 bg-left-bottom' style={{
            background: `url(/wave.png)`
        }}>
            <div className='text-center max-w-7xl mx-auto py-20'>
                <h1 className='text-4xl font-bold'>Our Events.</h1>
                <div className='mt-4 max-w-2xl mx-auto'>
                    <p className='lg:px-20 py-5 '>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                </div>

                <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-6 text-left mt-10'>
                    {
                        data.map((value, index) => (
                            <div key={index} className='border flex flex-col gap-10 h-72 bg-white p-5 justify-between rounded-lg shadow border-gray-50'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-current uppercase font-bold text-sm'>{value?.day}</label>
                                    <label className='font-semibold text-xl'>{value?.name}</label>
                                    <label className='text-gray-400'>{value?.location}</label>
                                </div>
                                <div className='flex gap-4 items-center font-semibold'>
                                    <button className='bg-orange-500 p-2  rounded-full'><FaArrowRight /></button> Register Now</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default OurEvents