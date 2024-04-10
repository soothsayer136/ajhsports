import axios from '../../../axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'
import Modal from 'react-modal'
import * as yup from 'yup';
import FieldError from '../../../components/FieldError'
import Select from 'react-select'
function AddEvent({ modalIsOpen, closeModal, getRoute }) {

    const handleFormSubmit = async (values, actions) => {
        try {
            let result = await axios.post('/event/register', values)

            if (result.data.success) {
                toast.success('Event Added Successfully')
                closeModal()
                getRoute()
            } else toast.error('Failed')
        } catch (ERR) {
            console.log(ERR)
            toast.error(ERR.response.data.msg)
        }
    }

    const validationSchema = yup.object({
        firstname: yup.string()
            .required('This Field is required'),
        lastname: yup.string()
            .required('This Field is required'),
        email: yup.string()
            .required('This Field is required'),
        contact: yup.string()
            .required("Phone number is required")
            .matches(/^[9]\d{9}$/, "Invalid phone number"),
        address: yup.string()
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


    return (
        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Add Event Modal"
            overlayClassName="Overlay"
            className="Modal rounded-md p-5 md:w-2/4 max-h-screen overflow-auto"
        >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Add Event</h1>

            <div className='mt-4'>
                <Formik
                    enableReinitialize
                    initialValues={{
                        eventName: '',
                        eventDescription: '',
                        startDate: '',
                        endDate: '',
                        startTime: '',
                        endTime: '',
                        occurrence: {
                            type: [String],
                        },

                        // firstname: "",
                        // lastname: "",
                        // email: "",
                        // contact: "",
                        // address: "",
                        // password: "password",
                        // role:'superadmin',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        handleFormSubmit(values, actions);
                    }}
                >
                    {(props) => (
                        <Form className='gap-3 grid grid-cols-2'>
                            <div className=''>
                                <label htmlFor="eventName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Event Name
                                </label>
                                <div className="mt-2">
                                    <Field
                                        id="eventName"
                                        name="eventName"
                                        autoComplete="eventName"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <FieldError message={props.touched.eventName && props.errors.eventName} />

                            </div>
                            <div>
                                <label htmlFor="eventDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                    Event Description
                                </label>
                                <div className="mt-2">
                                    <Field
                                        as="textarea"
                                        id="eventDescription"
                                        name="eventDescription"
                                        autoComplete="eventDescription"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <FieldError message={props.touched.eventDescription && props.errors.eventDescription} />
                            </div>

                            <div className=''>
                                <label htmlFor="startDate" className="block  text-sm font-medium leading-6 text-gray-900">
                                    Start Date
                                </label>
                                <div className="mt-2">
                                    <Field
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        autoComplete="startDate"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <FieldError message={props.touched.startDate && props.errors.startDate} />

                            </div>
                            <div className=''>
                                <label htmlFor="endDate" className="block  text-sm font-medium leading-6 text-gray-900">
                                    End Date
                                </label>
                                <div className="mt-2">
                                    <Field
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        autoComplete="endDate"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <FieldError message={props.touched.endDate && props.errors.endDate} />

                            </div>
                            <div className=''>
                                <label htmlFor="startTime" className="block  text-sm font-medium leading-6 text-gray-900">
                                    Start Time
                                </label>
                                <div className="mt-2">
                                    <Field
                                        type="time"
                                        id="startTime"
                                        name="startTime"
                                        autoComplete="startTime"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <FieldError message={props.touched.startTime && props.errors.startTime} />

                            </div>
                            <div className=''>
                                <label htmlFor="endTime" className="block  text-sm font-medium leading-6 text-gray-900">
                                    End Time
                                </label>
                                <div className="mt-2">
                                    <Field
                                        type="time"
                                        id="endTime"
                                        name="endTime"
                                        autoComplete="endTime"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <FieldError message={props.touched.endTime && props.errors.endTime} />

                            </div>

                            <div className='col-span-full text-center opacity-15'>
                                ------------
                            </div>

                            <div className=''>
                                <label htmlFor="occurrence" className="block  text-sm font-medium leading-6 text-gray-900">
                                    Occurrence
                                </label>
                                <div className="mt-2">
                                    <Select
                                    className='capitalize'
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                        isMulti
                                        menuPortalTarget={document.body}
                                        options={occurrenceType} />

                                    {/* <Field
                                        multiple
                                        as="select"
                                        id="occurrence"
                                        name="occurrence"
                                        autoComplete="occurrence"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >

                                        <option>Select Event's Occurrence</option>

                                        {
                                            occurrenceType?.map((value, index) => (
                                                <option className='capitalize' key={index}>{value}</option>
                                            ))
                                        }


                                    </Field> */}
                                </div>
                                <FieldError message={props.touched.occurrence && props.errors.occurrence} />

                            </div>


                            <div className='col-span-full mt-4'>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 px-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </button>
                            </div>


                        </Form>
                    )}
                </Formik>
            </div>

        </Modal>
    )
}

export default AddEvent