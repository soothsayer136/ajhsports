import axios from '../../axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import EditProfile from './EditProfile'
import toast from 'react-hot-toast'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'

function Profile() {
    const { userDetails, setUserDetails } = useContext(AuthContext)

    const [profileDetails, setProfileDetails] = useState([])
    const [editProfile, setEditProfile] = useState()
    const [bookingData, setBookingData] = useState()

    const openEditProfile = () => {
        setEditProfile(true)
    }

    const closeEditProfile = () => {
        setEditProfile(false)
    }

    const uploadRef = useRef()

    const getProfileDetails = async () => {
        try {
            let result = await axios.get('/user/get-profile/')
            if (result.data.success) {
                setProfileDetails(result.data.data)

            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    const getBookings = async () => {
        try {
            let result = await axios.get('/booking/my-booking/')
            if (result.data.success) {
                console.log(result.data.data.data)
                setBookingData(result.data.data.data)

            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getBookings()
    }, [])

    const uploadProfilePicture = async (img) => {
        try {
            if (img) {
                const formData = new FormData()

                formData.append('image', img)
                let result = await axios.put('/user/update-profile', formData)
                if (result.data.success) {
                    toast.success('Image Uploaded')
                    const localData = JSON.parse(localStorage.getItem('_hw_userDetails'))
                    localData.image = result.data?.data?.image
                    localStorage.setItem('_hw_userDetails', JSON.stringify(localData))
                    getProfileDetails()
                    userDetails.image = result.data?.data?.image
                    // setUserDetails(newdata)
                    setUserDetails(userDetails)
                }
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getProfileDetails()
    }, [])

    return (
        <div className="h-full bg-gray-50 p-8 max-w-7xl mx-auto">

            {
                editProfile &&
                <EditProfile modalIsOpen={editProfile} closeModal={closeEditProfile} getRoute={getProfileDetails} profileDetails={profileDetails} />
            }
            <div className="bg-white rounded-lg shadow-xl pb-8">

                <div className="flex flex-col items-center ">
                    {
                        profileDetails?.image ?

                            <img alt='user' src={`${process.env.REACT_APP_BASE_URI}${profileDetails?.image}`} className="w-40 border-4 mt-5 border-white rounded-full" />
                            :
                            <img alt='user' src="/defaultUserImage.png" className="w-40 border-4 mt-5 border-white rounded-full" />

                    }
                    <div className="flex flex-col items-center space-x-2 mt-2">
                        <p className="text-2xl">{profileDetails?.firstname} {profileDetails?.lastname}</p>
                        <p className="font-semibold opacity-60 uppercase"> {profileDetails?.role}</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                    <div className="flex items-center space-x-4 mt-2">

                        {
                            (profileDetails?.role === 'superadmin' || profileDetails?.role === 'admin') &&

                            <Link to={'/dashboard'} className='flex items-center bg-green-800 hover:bg-green-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100'>
                                Dashboard
                            </Link>
                        }
                        <input ref={uploadRef} type='file' className='hidden' onChange={(e) => {
                            uploadProfilePicture(e.target.files[0])
                        }} />

                        <button onClick={() => {
                            uploadRef.current.click()
                        }} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                            </svg>
                            <span>Image</span>
                        </button>
                        <button onClick={() => {
                            openEditProfile()
                        }} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                            </svg>
                            <span>Edit Profile</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 my-5 rounded-lg shadow-xl'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileDetails?.firstname} {profileDetails?.lastname}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Contact</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileDetails?.contact}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileDetails?.email}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {profileDetails?.address}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className='bg-white p-5 my-5 rounded-lg shadow-xl'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">My Bookings</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Coaching Bookings Details</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {
                            bookingData?.map((value, index) => (
                                <div key={index} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 grid"><label className='semibold'>{value?.lesson?.title}</label> <label>Payment: {value?.is_payed === true ? "Successfull" : "Failed"}</label> </dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 grid"> <label className='semibold'>{value?.lesson_name} - {value?.lesson_type}</label> <label> AUD {value?.price}</label> </dd>
                                </div>
                            ))

                        }

                    </dl>
                </div>
            </div>


        </div >
    )
}

export default Profile