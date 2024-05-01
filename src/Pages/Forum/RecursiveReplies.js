import axios from '../../axios'
import dayjs from 'dayjs'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

function RecursiveReplies({ commentData }) {

    const [selectedComment, setSelectedComment] = useState(false)
    const [showAddReply, setShowAddReply] = useState(false)
    const [comment, setComment] = useState()

    const viewMoreReplies = async (commentId, actions) => {
        try {
            let result = await axios.get('/online-forum/replies/' + commentId, {
                comment: comment
            })

            if (result.data.success) {
                console.log(result.data)
            } else toast.error('Failed')
        } catch (ERR) {
            console.log(ERR)
            toast.error(ERR.response.data.message)
        }
    }
    return (
        <>
            {
                commentData?.comments.map((value, index) => (

                    <div key={index} className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">

                        <div className={"md:block "}>

                            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                <div>
                                    <img src={`${process.env.REACT_APP_IMG_URI}${value?.postedBy[0]?.image}`} alt="girl-avatar" className='h-10 rounded-full' />
                                </div>
                                <div className="flex flex-col justify-start items-start space-y-2">
                                    <p className="text-base font-medium leading-none text-gray-800">{value?.postedBy[0].firstname} {value?.postedBy[0].lastname}</p>
                                    <p className="text-sm leading-none text-gray-600">{dayjs(value?.updatedAt).format('D MMMM, YYYY')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-start flex-col bg-gray-50 md:px-8 py-8">
                            <p className="text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{value?.comment}</p>
                            <button onClick={() => {
                                setSelectedComment(value)
                                setShowAddReply(true)
                            }}>Reply</button>

                            <div className={""}>
                                {
                                    value?.replies?.map((reply, index) => (
                                        <div key={index} className="mt-6  justify-start items-center flex-row space-x-2.5">
                                            <div className='flex gap-3'>
                                                <img src={`${process.env.REACT_APP_IMG_URI}${reply?.postedBy[0]?.image}`} alt="girl-avatar" className='h-10 rounded-full' />
                                                <div className="flex flex-col justify-start items-start space-y-2">
                                                    <p className="text-base font-medium leading-none text-gray-800">{reply?.postedBy[0].firstname} {reply?.postedBy[0].lastname}</p>
                                                    <p className="text-sm leading-none text-gray-600">{dayjs(reply?.updatedAt).format('D MMMM, YYYY')}</p>
                                                </div>
                                            </div>
                                            <div className="w-full flex justify-start items-start flex-col bg-gray-50 md:px-8 py-8">
                                                <div className={""}>
                                                    <p className="text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{reply?.comment}</p>

                                                    <div className='flex gap-3'>
                                                        <button onClick={() => {
                                                            setSelectedComment(reply)
                                                            setShowAddReply(true)
                                                        }}>Reply</button>
                                                        {
                                                            reply?.replies?.length > 0 &&
                                                            <button onClick={() => {
                                                                viewMoreReplies(reply._id)
                                                            }}>View Replies</button>
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default RecursiveReplies