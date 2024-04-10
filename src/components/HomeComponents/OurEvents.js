
import React, { useEffect, useState } from 'react'

import { FaArrowRight } from 'react-icons/fa'
import axios from '../../axios'
import toast from 'react-hot-toast'

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

    const [eventData, setEventData] = useState([])


    const getAllEvent = async () => {
        try {
            let result = await axios.get('/event', {
                params: {
                    search: "",
                    page: 1,
                    size: 4
                }
            })

            if (result.data.success) {
                setEventData(result.data.data.data)
            } else toast.error('Failed')
        } catch (ERR) {
            console.log(ERR)
            toast.error(ERR.response.data.msg)
        }
    }

    useEffect(() => {
        getAllEvent()
    }, [])

    console.log(eventData)

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
                        eventData.map((value, index) => (
                            <div key={index} className='border flex flex-col gap-10 h-72 bg-white p-5 justify-between rounded-lg shadow border-gray-50'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        {
                                            value.occurrence.map((occ, index) => (
                                                <label className='text-current uppercase font-bold text-sm'>{occ}</label>
                                            ))
                                        }
                                    </div>
                                    <label className='font-semibold text-xl'>{value?.name}</label>
                                    <label className='text-gray-400'>{value?.location}</label>
                                </div>
                                <div className='flex gap-4 items-center font-semibold'>
                                    <button className='bg-orange-500 p-2  rounded-full'><FaArrowRight /></button> Register Now</div>
                            </div>
                        ))
                    }
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