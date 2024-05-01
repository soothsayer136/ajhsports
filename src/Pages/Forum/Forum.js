import React from 'react'

function Forum() {
    return (
        <div className='max-w-7xl mx-auto py-10 px-5 mb-10'>
            <h1 className='lg:text-6xl text-4xl font-bold text-center mt-10'>Forum</h1>

            <p className='my-10 text-center text-xl opacity-75 leading-8'>AJH Sports has been in business for 40+ years managed by level 3 Tennis Professional Andrew Hill. Andrew has provided guidance, equiptment and facilities Australia wide for tennis, table tennis and modified sports.</p>


            <div className='w-full'>
                <button className='p-3 mr-auto bg-blue-600 rounded-md font-semibold px-5 text-white'>Add a Post</button>
            </div>
            
            <div className='my-4 mb-10 grid gap-2'>
                <label className='font-semibold'>Search</label>
                <input className='inputfield'></input>
            </div>
            <div className='grid mt-4'>
                <div className=' p-2 border shadow rounded-md'>
                    <p>Title</p>
                    <p>Posted By</p>
                    <p>Posted On</p>
                    <p>Total Comments: </p>
                </div>
            </div>
        </div>
    )
}

export default Forum