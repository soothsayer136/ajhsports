import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow  ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="grid grid-cols-6">
                    <ul className='sm:col-span-4 col-span-full sm:mb-0 mb-10'>
                        <a href="/" className="grid items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="/app_logo.png" className="h-8" alt="AJH SPORTS" />
                        </a>
                        <p className='mt-5 text-gray-600'> We are here to help the customers <br /> to get their success</p>
                        <div className='flex gap-3 mt-5'>
                            <Link to={'/https://www.instagram.com/starstv/'} target='blank'>
                                <BsInstagram />
                            </Link>
                            <Link to={'/https://www.facebook.com/aussiestarstv/'} target='blank'>
                                <BsFacebook />
                            </Link>
                            <Link to={'https://www.youtube.com/user/clubSTARStv'} target='blank'>
                                <BsYoutube />
                            </Link>
                            <Link to={'https://twitter.com/starstv'} target='blank'>
                                <BsTwitter />
                            </Link>
                            <Link to={'https://www.linkedin.com/in/starstv/'} target='blank'>
                                <BsLinkedin />
                            </Link>
                        </div>
                    </ul>

                    <ul className="grid sm:col-span-1 col-span-3 items-center gap-3 mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li className='mb-5'>
                            <label className=" me-4 md:me-6">Services</label>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/events" className="hover:underline">Events</a>
                        </li>
                        <li>
                            <a href="/coaching" className="hover:underline">Bookings</a>
                        </li>
                    </ul>
                    <ul className="grid sm:col-span-1 col-span-3 items-center gap-3 mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li className='mb-5'>
                            <label className=" me-4 md:me-6">Quick Links</label>
                        </li>
                        <li>
                            <a href="/forum" className="hover:underline me-4 md:me-6">Forum</a>
                        </li>
                        <li>
                            <a href="/blogs" className="hover:underline me-4 md:me-6">Blogs</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="/" className="hover:underline">AJH Sports</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer