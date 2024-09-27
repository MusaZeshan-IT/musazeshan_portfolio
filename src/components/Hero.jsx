import React from 'react';
import profileImage from '../assets/profileImage.jpeg';
import resume from '../assets/musazeshan_resume.pdf';

const Hero = () => {
    return (
        <section id="home" className="text-black 2xl:px-28 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-10 md:px-8 sm-custom:px-24 sm:px-16 xs-custom:px-14 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4 mt-12">
            <div className="container mx-auto flex flex-col-reverse md:flex-row gap-x-24 items-center justify-between">
                {/* Left side - Text Content */}
                <div className='md:w-[62%]'>
                    <div className='md:block hidden'>
                        <h1 className="xl:text-3xl lg:text-2xl text-xl font-black text-blue-900 font-heading">I am Musa Zeshan</h1>
                        <h2 className='mt-3 xl:text-[54px] lg:text-[44px] md-custom:text-[34px] text-[32px] leading-[1.05] font-bold text-blue-700'>
                            Full Stack Developer +
                            <br />
                            Devops Engineer
                        </h2>
                    </div>
                    <p className="xl:text-xl lg:text-lg md:text-base xs:text-xl text-lg leading-snug md:mt-5 mt-10 text-gray-500">
                        I build scalable and high-performance applications that enhance user experience
                        and engagement, boosting business results.
                    </p>

                    <div className='xl:mt-10 mt-8 flex items-center gap-x-5'>
                        {/* CV Download Button */}
                        <a href={resume} download="musazeshan_resume.pdf" className="xs:text-base 2xs-custom:text-sm text-[13px] tracking-[0.8px] bg-white border w-fit border-purple-600 text-blue-600 xs:px-6 px-4 xs:py-3 py-[10px] rounded-full font-body hover:bg-blue-600 hover:text-white hover:font-bold">
                            Download CV
                            <i className='fa-solid fa-download ml-2'></i>
                        </a>

                        {/* Social Links */}
                        <div className="flex gap-x-3">
                            <a href="https://www.instagram.com/musazeshan.it/" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-blue-600 rounded-full xs:h-9 h-8 xs:w-9 w-8 border border-purple-600 hover:bg-blue-600 hover:text-white">
                                <i className='fa-brands text-lg fa-instagram'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/musa-zeshan-it" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-blue-600 rounded-full xs:h-9 h-8 xs:w-9 w-8 border border-purple-600 hover:bg-blue-600 hover:text-white">
                                <i className='fa-brands text-lg fa-linkedin-in'></i>
                            </a>
                            <a href="https://github.com/MusaZeshan-IT" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-blue-600 rounded-full xs:h-9 h-8 xs:w-9 w-8 border border-purple-600 hover:bg-blue-600 hover:text-white">
                                <i className='fa-brands text-lg fa-github'></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full md:w-[38%]">
                    <div className='md:hidden block'>
                        <h1 className="xl:text-3xl xs:text-2xl text-xl font-black text-blue-900 font-heading mb-3">I am Musa Zeshan</h1>
                        <h2 className='mt-3 xs:text-[32px] text-[28px] leading-[1.05] font-bold text-blue-700'>Full Stack Developer + Devops Engineer</h2>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <img src={profileImage} alt="Musa Zeshan" className="hover:rotate-0 transition-all duration-300 rotate-3 2xl:h-[440px] 2xl:w-[400px] xl-custom:h-[410px] xl-custom:w-[370px] xl:h-[380px] xl:w-[340px] lg-custom:h-[350px] lg-custom:w-[310px] lg:h-[320px] lg:w-[280px] md-custom:h-[290px] md-custom:w-[250px] md:h-[260px] md:w-[220px] h-[360px] w-[320px] rounded-3xl shadow-lg hover:border-2 border-purple-600" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
