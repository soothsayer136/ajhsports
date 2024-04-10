import React from 'react'

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow  ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        {/* <img src="/app_logo.png" className="h-8" alt="AJH SPORTS" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">AJH Sports</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
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