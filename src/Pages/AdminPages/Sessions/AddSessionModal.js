import axios from '../../../axios'
import { Field, FieldArray, Form, Formik } from 'formik'
import React, { useMemo, useState, useEffect, useRef } from 'react'

import toast from 'react-hot-toast'
import Modal from 'react-modal'
import * as yup from 'yup';
import FieldError from '../../../components/FieldError'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

function AddSessionModal({ modalIsOpen, closeModal, getRoute }) {

    const navigate = useNavigate()
    const uploadRef = useRef(null)
    const handleImage = (value) => {
        if (value) {
            setImage(value)
        }
    }

    const [image, setImage] = useState()

    const handleButtonClick = () => {
        // Access and interact with the DOM element
        if (uploadRef.current) {
            uploadRef.current.click()
        }
    }

    const handleFormSubmit = async (values, actions) => {
        try {

            const formData = new FormData()

            for (let value in values) {
                if (typeof values[value] === "object") {
                    formData.append(value, JSON.stringify(values[value]))
                } else formData.append(value, values[value])
            }

            if (image) {
                formData.append('image', image)

                let result = await axios.post('/coaching', formData)

                if (result.data.success) {
                    toast.success('Session Added Successfully')
                    navigate('/dashboard/sessions')
                }
            } else toast.error('Please Select an Image')
        } catch (ERR) {
            console.log(ERR)
            toast.error(ERR?.response?.data?.message)
        }
    }

    const validationSchema = yup.object({
        title: yup.string()
            .required('This Field is required'),
        description: yup.string()
            .required('This Field is required'),
    });

    const occurrenceType = [
        {
            value: "weekdays",
            label: "Week Days"
        },
        {
            value: "weekends",
            label: "Weekends"
        },
        {
            value: "sun",
            label: "Sunday"
        },
        {
            value: "mon",
            label: "Monday"
        },
        {
            value: "tue",
            label: "Tuesday"
        },
        {
            value: "wed",
            label: "Wednesday"
        },
        {
            value: "thrus",
            label: "Thursday"
        },
        {
            value: "fri",
            label: "Friday"
        },
        {
            value: "sat",
            label: "Saturday"
        },
    ]

    // image: { type: String },
    // title: { type: String, required: true },
    // description: { type: String, required: true },
    // price: { type: [Price]},

    return (
        <>
            {/* <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Session Modal"
                overlayClassName="Overlay"
                className="Modal rounded-md p-5 md:w-2/4 max-h-screen overflow-auto"
            > */}
            <div className='max-w-7xl mx-auto p-5'>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Add Session</h1>

                <div className='mt-4'>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            title: '',
                            description: '',
                            price: [{
                                name: "",
                                private: "",
                                group: ""
                            }]
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            handleFormSubmit(values, actions);
                        }}
                    >
                        {(props) => (
                            <Form className='gap-3 grid'>
                                <div className=''>
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                        Session Name
                                    </label>
                                    <div className="mt-2">
                                        <Field
                                            id="title"
                                            name="title"
                                            autoComplete="title"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <FieldError message={props.touched.title && props.errors.title} />

                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Session Description
                                    </label>
                                    <div className="mt-2">
                                        <Field
                                            as="textarea"
                                            id="description"
                                            name="description"
                                            autoComplete="description"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <FieldError message={props.touched.description && props.errors.description} />
                                </div>
                                <div className=''>
                                    <span className='font-semibold'>Image</span>
                                    <div className='mt-2'>
                                        <input
                                            ref={uploadRef}
                                            type='file'
                                            accept="image/png, image/jpeg"
                                            onChange={(e) => handleImage(e.target.files[0])}
                                            className='inputfield hidden'
                                            name='image'
                                            id='image'
                                            placeholder='End Date'
                                        />
                                    </div>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            handleButtonClick()
                                        }}
                                        className='border-2 border-dashed w-full h-14'
                                    >
                                        Upload
                                    </button>
                                    {image && (
                                        <div
                                            className='relative w-fit'
                                            style={{
                                                height: '100px',
                                            }}
                                        >
                                            <img fill={true} alt='currentimage' placeholder="blur" blurDataURL={'/img/logo.png'} className='border !relative my-2 w-full h-full' src={URL.createObjectURL(image)} />

                                            <button
                                                type='button'
                                                onClick={() => {
                                                    setImage('')
                                                    uploadRef.current.value = ''
                                                }}
                                                className='absolute bottom-0 bg-red-400 w-full'>Remove</button>
                                        </div>
                                    )}
                                </div>

                                <div className='mt-5'>
                                    <span className='block  leading-6 font-semibold text-gray-900'>Package Detail</span>

                                    <FieldArray
                                        name="price"
                                        render={arrayHelpers => (
                                            <div className='grid md:grid-cols-2 gap-3 mt-3'>
                                                {props.values.price && props.values.price.length > 0 ? (
                                                    props.values.price.map((value, index) => (
                                                        <div key={index} className='border p-3 shadow rounded relative'>
                                                            <div>
                                                                <label htmlFor="sessionDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Name
                                                                </label>
                                                                <div className="mt-2">
                                                                    <Field className="inputfield" name={`price.${index}.name`} />
                                                                </div>
                                                            </div>
                                                            <div className='flex gap-3 mt-3'>
                                                                <div className='w-full'>
                                                                    <label htmlFor="sessionDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Private Session Price
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <Field className="inputfield" type="number" name={`price.${index}.private`} />
                                                                    </div>
                                                                </div>
                                                                <div className='w-full'>
                                                                    <label htmlFor="sessionDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Group Session Price
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <Field className="inputfield" type="number" name={`price.${index}.group`} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='absolute top-2 right-2 gap-2 flex'>
                                                                {
                                                                    props.values.price.length != 1 &&

                                                                    <button
                                                                        type="button"
                                                                        className='bg-red-700 px-2 text-xl text-white rounded'
                                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                                    >
                                                                        -
                                                                    </button>
                                                                }
                                                                <button
                                                                    type="button"
                                                                    className='bg-green-700 px-2 text-xl text-white rounded'
                                                                    onClick={() => arrayHelpers.insert(index + 1, {
                                                                        name: "",
                                                                        private: "",
                                                                        group: ""
                                                                    })} // insert an empty string at a position
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <button type="button" className='btn-primary' onClick={() => arrayHelpers.push({
                                                        name: "",
                                                        private: "",
                                                        group: ""
                                                    })}>
                                                        {/* show this when user has removed all price from the list */}
                                                        Add a Package
                                                    </button>
                                                )}

                                            </div>
                                        )}
                                    />
                                </div>


                                <div className='col-span-full mt-4'>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div >

            {/* </Modal> */}
        </>
    )
}

export default AddSessionModal