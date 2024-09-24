import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="px-28 z-10 sticky top-0 bg-white p-4 flex justify-between items-center">
            <div className='flex items-center gap-x-4'>
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600 font-heading flex gap-x-2 items-center">
                    <i className="fa-solid fa-code"></i>
                    Qubix
                </h1>

                {/* Email */}
                <a href="mailto:musazeshan.it@gmail.com" className="text-gray-500 hover:text-blue-600 font-body">
                    musazeshan.it@gmail.com
                </a>
            </div>

            <div className='flex items-center gap-x-10'>
                {/* Nav Links */}
                <ul className="hidden md:flex space-x-6 font-heading text-gray-600">
                    <Link to="/"><li className="hover:text-blue-600">Home</li></Link>
                    <Link to="/"><li className="hover:text-blue-600">About</li></Link>
                    <Link to="/"><li className="hover:text-blue-600">Contact</li></Link>
                    <Link to="/"><li className="hover:text-blue-600">Projects</li></Link>
                </ul>

                {/* CTA Button */}
                <a href="#contact" className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-[10px] rounded-full hover:bg-blue-800">
                    Hire me!
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
