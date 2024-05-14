import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BookSessionCTA() {
    return (
        <div className='lg:p-20 p-10 lg:py-40 lg:flex items-center justify-between container mx-auto gap-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-4xl'>Book Your Session Now</h1>
                <p className='lg:w-2/3'>Lorem ipsum dolor sit amet consectetur. Arcu eu volutpat arcu faucibus metus egestas velit nisl sagittis.</p>
            </div>
            <Link to={'/coaching'} className='btn-primary bg-opacity-20 !text-current font-semibold min-w-max hover:!text-white'>Learn more <FaArrowRight /></Link>
        </div>
    )
}

export default BookSessionCTA