import { CgAlarm } from 'react-icons/cg'
import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

function Notices() {
    const [notices, setNotices] = useState()

    const getNotices = async () => {
        try {
            let result = await axios.get('/notice')
            if (result.data.success) {
                setNotices(result.data.data.data)
                console.log(result.data.data.data)

            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getNotices()
    }, [])


    return (
        <div className='bg-white p-5 my-5 rounded-lg shadow-lg max-w-7xl mx-auto'>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">My Notices</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    {
                        notices?.map((value, index) => (
                            <div key={index} className="px-4 py-6 grid sm:px-0">
                                <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-3"><CgAlarm /> <span className='semibold'>{dayjs(value?.updatedAt).format('D MMM YYYY')}</span> </div>
                                <span className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-3">Event Recommendation</span>
                                {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 grid"> <label className='semibold'>{value?.lesson_name} - {value?.lesson_type}</label> <label> AUD {value?.price}</label> </dd> */}
                                <Link to={'/events'} className=' capitalize font-medium leading-6 text-gray-900 '>{value?.message}</Link>
                            </div>
                        ))
                    }

                </dl>
            </div>
        </div>
    )
}

export default Notices