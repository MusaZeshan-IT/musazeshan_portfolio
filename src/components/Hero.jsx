import React from 'react';
import profileImage from '../assets/profileImage.jpeg';

const Hero = () => {
    return (
        <section id="home" className="text-black mt-12">
            <div className="container mx-auto flex flex-col-reverse md:flex-row gap-x-24 items-center justify-between px-4">
                {/* Left side - Text Content */}
                <div className='md:w-[62%]'>
                    <h1 className="text-2xl md:text-3xl font-black text-blue-900 font-heading">I am Musa Zeshan</h1>
                    <div className='mt-3 text-[54px] leading-[1.05] font-bold text-blue-700'>
                        <h2>
                            Full Stack Developer +
                            <br />
                            Devops Engineer
                        </h2>
                    </div>
                    <p className="text-xl mt-5 text-gray-600">
                        I build scalable and high-performance applications that enhance user experience
                        and engagement, boosting business results.
                    </p>

                    <div className='mt-10 flex items-center gap-x-5'>
                        {/* CV Download Button */}
                        <a href="path-to-your-cv.pdf" className="tracking-[0.8px] bg-white border w-fit border-purple-600 text-blue-600 px-6 py-3 rounded-full font-body hover:bg-blue-600 hover:text-white hover:font-bold">
                            Download CV
                            <i className='fa-solid fa-download ml-2'></i>
                        </a>

                        {/* Social Links */}
                        <div className="flex space-x-3 font-body">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-blue-600 rounded-full h-9 w-9 border border-purple-600 hover:bg-blue-600 hover:text-white">
                                <i className='fa-brands text-lg fa-instagram'></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-blue-600 rounded-full h-9 w-9 border border-purple-600 hover:bg-blue-600 hover:text-white">
                                <i className='fa-brands text-lg fa-linkedin-in'></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-blue-600 rounded-full h-9 w-9 border border-purple-600 hover:bg-blue-600 hover:text-white">
                                <i className='fa-brands text-lg fa-github'></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full md:w-[38%] hover:rotate-0 transition-all duration-300 rotate-3">
                    <img src={profileImage} alt="Musa Zeshan" className="rounded-3xl shadow-lg hover:border-2 border-purple-600" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
