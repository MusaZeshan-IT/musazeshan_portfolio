import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[rgb(26,22,66)] py-10 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4'>
            <div className='flex flex-col items-center'>
                {/* Logo */}
                <h1 className="text-4xl font-bold text-white font-heading flex gap-x-2 items-center">
                    <i className="fa-solid fa-code"></i>
                    Qubix
                </h1>
                {/* Nav Links */}
                <ul className="mt-7 font-bold text-[15px] flex xs:gap-x-8 2xs-custom:gap-x-6 gap-x-5 font-body text-white">
                    <li>Services.</li>
                    <li>Work.</li>
                    <li>Skills.</li>
                    <li>Contact.</li>
                </ul>
                {/* CTA Button */}
                <p className='text-blue-600 mt-4'>© 2024 All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
