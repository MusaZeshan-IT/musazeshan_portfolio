import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to manage the mobile menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="2xl:px-28 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-10 md:px-8 sm-custom:px-24 sm:px-16 xs-custom:px-14 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4 z-10 sticky top-0 bg-white p-4 flex justify-between items-center">
            <div className='flex items-center gap-x-4'>
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600 font-heading flex gap-x-2 items-center">
                    <i className="fa-solid fa-code"></i>
                    Qubix
                </h1>

                {/* Email */}
                <a href="mailto:musazeshan.it@gmail.com" className="md:block hidden text-gray-500 hover:text-blue-600 font-body">
                    musazeshan.it@gmail.com
                </a>
            </div>

            <div className='flex items-center lg:gap-x-10 xs:gap-x-7 gap-x-4'>
                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex space-x-6 font-heading text-gray-600">
                    <Link to="/"><li className="hover:text-blue-600">Services</li></Link>
                    <Link to="/"><li className="hover:text-blue-600">Work</li></Link>
                    <Link to="/"><li className="hover:text-blue-600">Skills</li></Link>
                    <Link to="/"><li className="hover:text-blue-600">Contact</li></Link>
                </ul>

                {/* CTA Button */}
                <a href="#contact" className="xs:text-base text-[15px] bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white xs:px-6 px-5 xs:py-[10px] py-2 rounded-full hover:bg-blue-800">
                    Hire me!
                </a>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden">
                    <i
                        className={`text-3xl fa-solid fa-bars-staggered text-blue-700 cursor-pointer`}
                        onClick={toggleMenu}
                    ></i>
                </div>
            </div>

            {/* Overlay and Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-0 z-20">
                    {/* Overlay */}
                    <div className="bg-black bg-opacity-50 w-full h-full" onClick={toggleMenu}></div>

                    {/* Mobile Menu */}
                    <div className="fixed top-0 left-0 2xs-custom:w-[300px] w-full h-full bg-white z-30 transform translate-x-0 transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center p-6">
                            <h1 className="text-[26px] font-bold text-blue-600 font-heading flex gap-x-2 items-center">
                                <i className="fa-solid fa-code"></i>
                                Qubix
                            </h1>
                            <i className="text-3xl fa-solid fa-times text-blue-700 cursor-pointer" onClick={toggleMenu}></i>
                        </div>
                        <div className='px-6'>
                            <ul className="flex flex-col justify-center space-y-6 mt-5 font-heading text-blue-950 text-lg">
                                <Link to="/" onClick={toggleMenu}><li className="hover:text-blue-600">Services</li></Link>
                                <Link to="/" onClick={toggleMenu}><li className="hover:text-blue-600">Work</li></Link>
                                <Link to="/" onClick={toggleMenu}><li className="hover:text-blue-600">Skills</li></Link>
                                <Link to="/" onClick={toggleMenu}><li className="hover:text-blue-600">Contact</li></Link>
                            </ul>
                            <a href="#contact" className="mt-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-800 block text-center">
                                Hire me!
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
