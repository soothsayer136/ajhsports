import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import React, { useContext, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/authContext';

function Login() {

  const navigate = useNavigate()
  const { isAuthenticated, setIsAuthenticated, setUserDetails } = useContext(AuthContext)


  // Function to handle form submission
  const handleFormSubmit = async (values, actions) => {

    try {
      // Make an Axios POST request
      const response = await axios.post('user/login', values);

      if (response.data.success) {
        localStorage.setItem('_hw_userDetails', JSON.stringify(response.data.data))
        localStorage.setItem('_hw_token', response.data.data.token)
        setUserDetails(response.data.data);
        toast.success('Login Successfull')

        setTimeout(() => {
          setIsAuthenticated(true)
          if (response.data.data.role.includes('admin') || response.data.data.role.includes('superadmin')) {
            navigate('/dashboard')
          } else navigate('/')
        }, 400)
      }

    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error submitting form:', error);
      toast.error(error?.response?.data?.message ? error?.response?.data?.message : "Failed To Login")
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  })


  return (
    <div className="grid min-h-screen  w-full place-items-center px-6 py-12 lg:px-8">
      
      <div className='max-w-sm w-full '>
        <a href='/' className='font-semibold text-gray-600 flex items-center gap-3'>
          <FaArrowLeft /> Back
        </a>
        <div className="mx-auto w-full ">
          {/* <img
            className="mx-auto h-20 w-auto"
            src="/app_logo.png"
            alt="login img"
          /> */}
          {/* <h1>AJH SPORTS</h1> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full ">

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values, actions) => {
              handleFormSubmit(values, actions);
            }}
          >
            {(props) => (
              <Form>
                <div>
                  <label
                    id="email"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Email Address
                  </label>
                  <Field
                    required
                    name="email"
                    value={props.values.email}
                    aria-labelledby="email"
                    type="email"
                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-6  w-full">
                  <label
                    htmlFor="pass"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="relative flex items-center justify-center">
                    <Field
                      required
                      name="password"
                      value={props.values.password}
                      id="pass"
                      type={`${"password"}`}
                      className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    // onClick={() => login()}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not Signed Up Yet?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login