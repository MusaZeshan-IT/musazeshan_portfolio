import React from 'react';

const Contact = () => {
    return (
        <section className="bg-[#f0f4ff] py-16 2xl:px-28 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-10 md:px-8 sm-custom:px-24 sm:px-16 xs-custom:px-14 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4">
            <div className="flex lg:flex-row flex-col items-center">
                {/* Form Section */}
                <div className="w-full lg:w-[60%] bg-white rounded-lg p-8 shadow-lg">
                    <h2 className="xs:text-3xl text-[26px] leading-[1.1] font-bold text-[#003366] xs:mb-4 mb-2">Let's work together!</h2>
                    <p className="text-[#003366] mb-6">
                        I design and code beautifully simple things, and I love what I do. Just simple like that!
                    </p>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="border border-[#003366] px-3 py-[10px] rounded-md focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="border border-[#003366] px-3 py-[10px] rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="border border-[#003366] px-3 py-[10px] rounded-md focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="border border-[#003366] px-3 py-[10px] rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <select className="border border-[#003366] px-3 py-[10px] rounded-md w-full focus:outline-none focus:border-blue-500">
                                <option value="">—Please choose an option—</option>
                                <option value="frontend">Frontend Development</option>
                                <option value="backend">Backend Development</option>
                                <option value="fullstack">Full Stack Development</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Message"
                                className="border border-[#003366] p-2 rounded-md w-full h-32 focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="text-[15px] bg-gradient-to-r from-[#003366] to-[#0055cc] text-white px-5 py-3 rounded-md hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="w-full lg:w-[40%] lg:mt-0 mt-10">
                    <div className='xl:ms-20 lg-custom:ms-14 lg:ms-10'>
                        <h2 className='text-blue-950 xs:text-[28px] text-[26px] font-bold mb-6'>Contact Info</h2>
                        <ul className='flex flex-col gap-5'>
                            <li className="flex items-center mb-4">
                                <i className="h-12 w-12 rounded-full grid place-items-center fa-solid fa-phone text-xl bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white"></i>
                                <div className='flex flex-col ml-3'>
                                    <span className="text-blue-950">Phone</span>
                                    <span className="text-blue-950 xs:text-xl text-lg font-medium">+92 307 941 0053</span>
                                </div>
                            </li>
                            <li className="flex items-center mb-4 text-[#003366]">
                                <i className="h-12 w-12 rounded-full grid place-items-center fa-solid fa-envelope text-xl bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white"></i>
                                <div className='flex flex-col ml-3'>
                                    <span className="text-blue-950">Email</span>
                                    <span className="text-blue-950 xs:text-xl text-lg font-medium">musazeshan.it@gmail.com</span>
                                </div>
                            </li>
                            <li className="flex items-center mb-4 text-[#003366]">
                                <i className="h-12 w-12 rounded-full grid place-items-center fa-solid fa-location-dot text-xl bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white"></i>
                                <div className='flex flex-col ml-3'>
                                    <span className="text-blue-950">Address</span>
                                    <span className="text-blue-950 xs:text-xl text-lg font-medium">Lahore, Pakistan</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
