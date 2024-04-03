import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BlogSection() {
    const data = [
        {
            name: 'Kids Sports Parties',
            short_desc: 'Lorem ipsum dolor sit amet consectetur. Urna sed quis consequat in sed.',
            image: '/blog1.png'
        },
        {
            name: 'Kids Sports Parties',
            short_desc: 'Lorem ipsum dolor sit amet consectetur. Urna sed quis consequat in sed.',
            image: '/blog1.png'
        },
        {
            name: 'Kids Sports Parties',
            short_desc: 'Lorem ipsum dolor sit amet consectetur. Urna sed quis consequat in sed.',
            image: '/blog1.png'
        },
    ]

    return (
        <div className='lg:p-20 p-10 bg-left-bottom bg-secondary' >
            <div className='text-center max-w-7xl mx-auto py-20'>
                <h1 className='text-4xl font-bold'>Blog.</h1>
                <div className='mt-4 max-w-2xl mx-auto'>
                    <p className='lg:px-20 py-5 '>Lorem ipsum dolor sit amet consectetur. Id mi commodo aliquam rhoncus est varius integer.</p>
                </div>

                <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-6 text-left mt-10'>
                    {
                        data.map((value, index) => (
                            <div className=' flex flex-col gap-10   p-5 justify-between rounded-lg ' key={index}>
                                <div className='flex flex-col gap-6'>
                                    <label className='font-semibold text-xl'>{value?.name}</label>
                                    <img src={value?.image} className='h-44 object-cover rounded-xl' alt='blog' />
                                    <label className='text-gray-600'>{value?.short_desc}</label>
                                    <Link className='flex gap-3 items-center text-current font-bold'>Learn More <FaArrowRight /></Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default BlogSection