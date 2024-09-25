import React from 'react';

const Services = () => {
    return (
        <section className='bg-gray-100 pt-20 pb-28'>
            <div>
                <h1 className='text-[45px] leading-[1.05] font-bold text-center text-blue-700'>My Quality Services</h1>
                <p className="mt-5 text-gray-900 text-center">
                    We take your ideas and turn them into web project that will help you achieve your goals.
                </p>
            </div>
            <div className='flex flex-col gap-14 px-10 mt-10'>
                {/* Full Stack Development Services */}
                <div className='flex justify-between gap-x-20 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-10 px-8 text-white'>
                    <div className='flex w-[40%] gap-x-5 items-center'>
                        <p className='text-2xl font-bold'>01</p>
                        <h1 className='text-3xl font-bold'>Full Stack Development</h1>
                    </div>
                    <p className='w-[60%]'>I can create robust, scalable and resposive full stack web applications that can meet your business needs and has the best user experience.</p>
                </div>
                {/* Devops Services */}
                <div className='flex justify-between gap-x-20 pb-10 px-8 border-b border-gray-300'>
                    <div className='flex w-[40%] gap-x-5 items-center'>
                        <p className='text-blue-700 text-2xl font-bold'>02</p>
                        <h1 className='text-blue-700 text-3xl font-bold'>Devops Engineer</h1>
                    </div>
                    <p className='text-gray-800 w-[60%]'>I can perform Devops tasks like deployment, hosting, collaboration, and maintenance. I can also provision and manage servers and databases.</p>
                </div>
                {/* Frontend Development Services */}
                <div className='flex justify-between gap-x-20 pb-10 px-8 border-b border-gray-300'>
                    <div className='flex w-[40%] gap-x-5 items-center'>
                        <p className='text-blue-700 text-2xl font-bold'>03</p>
                        <h1 className='text-blue-700 text-3xl font-bold'>Frontend Development</h1>
                    </div>
                    <p className='text-gray-800 w-[60%]'>I can create responsive websites with HTML, CSS, Javascript, Tailwind CSS, Bootstrap, and React. I can build optimized web applications.</p>
                </div>
                {/* Backend Development Services */}
                <div className='flex justify-between gap-x-20 pb-10 px-8 border-b border-gray-300'>
                    <div className='flex w-[40%] gap-x-5 items-center'>
                        <p className='text-blue-700 text-2xl font-bold'>04</p>
                        <h1 className='text-blue-700 text-3xl font-bold'>Backend Development</h1>
                    </div>
                    <p className='text-gray-800 w-[60%]'>I can create scalable and efficient backends with Django, DRF, and PostgreSQL. I can build robust and scalable web applications.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
