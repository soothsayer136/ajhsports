import toast from 'react-hot-toast'
import axios from '../../axios'
import React, { useEffect, useState } from 'react'

function Coaching() {

    const [sessionData, setSessionData] = useState([])

    const getAllSession = async () => {
        try {
            let result = await axios.get('/coaching', {
                params: {
                    page: 1,
                    size: 20
                }
            })

            if (result.data.success) {
                console.log(result.data)
                setSessionData(result.data.data.data)
            } else toast.error('Failed')
        } catch (ERR) {
            console.log(ERR)
            toast.error(ERR.response.data.message)
        }
    }

    useEffect(() => {
        getAllSession()
    }, [])

    console.log('sessionData', sessionData)

    return (
        <div>
            <div className='max-w-7xl mx-auto py-10 px-5 mb-10'>
                <h1 className='lg:text-6xl text-4xl font-bold text-center mt-10'>Coaching</h1>

                <p className='my-10 text-center text-xl opacity-75 leading-8'>AJH Sports has been in business for 40+ years managed by level 3 Tennis Professional Andrew Hill. Andrew has provided guidance, equiptment and facilities Australia wide for tennis, table tennis and modified sports.</p>

                <div className='mt-5'>
                    <img src='/coaching.png' className='mx-auto w-full' />
                </div>
            </div>

            {
                sessionData &&
                (sessionData.length === 0 ?
                    <p className='p-5 font-semibold text-red-800'></p> :
                    sessionData.map((value, index) => (
                        <div className={`${(index % 2 === 0) && 'bg-[#F4F7FA]'} p-10 `}>
                            <div className='max-w-7xl mx-auto py-10'>
                                <h2 className='lg:text-5xl text-3xl font-bold'>{value?.title}</h2>

                                <div>
                                    <img className='w-full  h-96 my-10 object-cover shadow rounded' src={`${process.env.REACT_APP_IMG_URI}${value?.image}`} />
                                </div>

                                <p className='p-3 my-5'>{value?.description}</p>

                                <table class="table-auto mx-auto text-left shadow rounded overflow-hidden border">
                                    <thead>
                                        <tr className='bg-[#F8F8F8]'>
                                            <th className='border py-2 px-5'> </th>
                                            {
                                                value.price.map((value, index) => (
                                                    <th className='border py-2 px-5' key={index}>{value?.name}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-white'>
                                            <td className='border py-2 px-5'>Private</td>
                                            {
                                                value.price.map((value, index) => (
                                                    <td className='border py-2 px-5' key={index}>$ {value?.private}</td>
                                                ))
                                            }
                                        </tr>
                                        <tr className='bg-[#F8F8F8]'>
                                            <td className='border py-2 px-5'>Group</td>
                                            {
                                                value.price.map((value, index) => (
                                                    <td className='border py-2 px-5' key={index}>$ {value?.group}</td>
                                                ))
                                            }
                                        </tr>
                                    </tbody>
                                </table>

                                <button className='mx-auto btn-primary' >Register Now</button>

                            </div>
                        </div>
                    )))
            }

        </div >
    )
}

export default Coaching