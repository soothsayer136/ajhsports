import React from 'react'
import { Link } from 'react-router-dom'

function CoachingVideoSection() {
    return (
        <div className='p-20 text-center max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Get Professional Coaching.</h1>
            <Link to={'https://www.youtube.com/watch?v=GftONzxnEpI'} target='blank' className='p-5 mt-10'>
                <img src='/thumbnail1.png' className='mx-auto' />
            </Link>
            <div className='mt-4'>
                <p className='lg:px-20 py-5 font-semibold'>AJH Sports provides professional group, semi-private and private lessons to players of all ages. If you are just starting out you can join in a group session, or If you are more serious to develop you match play we run private sessions to analyse gameplay, decision making and footwork.</p>
            </div>
        </div>
    )
}

export default CoachingVideoSection