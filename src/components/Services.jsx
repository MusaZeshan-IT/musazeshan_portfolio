import React from 'react';

const Services = () => {
    return (
        <section id="services" className='pt-20'>
            <div className='bg-gray-100 md:px-10 sm:px-6 px-4 xs:pt-20 pt-14 xs:pb-28 pb-16'>
                <div>
                    <h2 className='lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] text-[28px] leading-[1.05] font-bold text-center text-blue-700'>My Quality Services</h2>
                    <p className="mt-5 xs:text-base 2xs-custom:text-sm text-[13px] text-gray-900 text-center">
                        We take your ideas and turn them into web project that will help you achieve your goals.
                    </p>
                </div>
                <div className='flex flex-col md:gap-14 sm:gap-10 gap-6 mt-10'>
                    {/* Full Stack Development Services */}
                    <div className='flex md:flex-row flex-col justify-between lg:gap-x-20 gap-x-10 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 md:py-10 sm:py-8 py-6 md:px-8 sm:px-6 px-4 text-white'>
                        <div className='flex md:w-[40%] md:gap-x-5 xs:gap-x-3 gap-x-2 items-center'>
                            <p className='lg:text-2xl xs:text-xl text-lg font-bold'>01</p>
                            <h1 className='lg:text-3xl xs:text-[25px] text-[20px] font-bold'>Full Stack Development</h1>
                        </div>
                        <p className='lg:text-base xs:text-sm text-[13px] leading-[1.33] md:mt-0 mt-1 md:w-[60%]'>I can create robust, scalable and resposive full stack web applications that can meet your business needs and has the best user experience.</p>
                    </div>
                    {/* Devops Services */}
                    <div className='flex md:flex-row flex-col justify-between lg:gap-x-20 gap-x-10 md:pb-10 sm:pb-8 pb-6 md:px-8 sm:px-6 px-4 border-b border-gray-300'>
                        <div className='flex md:w-[40%] md:gap-x-5 xs:gap-x-3 gap-x-2 items-center'>
                            <p className='text-blue-700 lg:text-2xl xs:text-xl text-lg font-bold'>02</p>
                            <h1 className='text-blue-700 lg:text-3xl xs:text-[25px] text-[20px] font-bold'>Devops Engineer</h1>
                        </div>
                        <p className='lg:text-base xs:text-sm text-[13px] leading-[1.33] text-gray-800 md:mt-0 mt-1 md:w-[60%]'>I can perform Devops tasks like deployment, hosting, collaboration, and maintenance. I can also provision and manage servers and databases.</p>
                    </div>
                    {/* Frontend Development Services */}
                    <div className='flex md:flex-row flex-col justify-between lg:gap-x-20 gap-x-10 md:pb-10 sm:pb-8 pb-6 md:px-8 sm:px-6 px-4 border-b border-gray-300'>
                        <div className='flex md:w-[40%] md:gap-x-5 xs:gap-x-3 gap-x-2 items-center'>
                            <p className='text-blue-700 lg:text-2xl xs:text-xl text-lg font-bold'>03</p>
                            <h1 className='text-blue-700 lg:text-3xl xs:text-[25px] text-[20px] font-bold'>Frontend Development</h1>
                        </div>
                        <p className='lg:text-base xs:text-sm text-[13px] leading-[1.33] text-gray-800 md:mt-0 mt-1 md:w-[60%]'>I can create responsive websites with HTML, CSS, Javascript, Tailwind CSS, Bootstrap, and React. I can build optimized web applications.</p>
                    </div>
                    {/* Backend Development Services */}
                    <div className='flex md:flex-row flex-col justify-between lg:gap-x-20 gap-x-10 md:pb-10 sm:pb-8 pb-6 md:px-8 sm:px-6 px-4 border-b border-gray-300'>
                        <div className='flex md:w-[40%] md:gap-x-5 xs:gap-x-3 gap-x-2 items-center'>
                            <p className='text-blue-700 lg:text-2xl xs:text-xl text-lg font-bold'>04</p>
                            <h1 className='text-blue-700 lg:text-3xl xs:text-[25px] text-[20px] font-bold'>Backend Development</h1>
                        </div>
                        <p className='lg:text-base xs:text-sm text-[13px] leading-[1.33] text-gray-800 md:mt-0 mt-1 md:w-[60%]'>I can create scalable and efficient backends with Django, DRF, and PostgreSQL. I can build robust and scalable web applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
