import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                'service_m1dvgmy',
                'template_hdwlyn9',
                form.current,
                'sLYMLJGbrXA3TxZVy'
            );
            setFormStatus('SUCCESS');
        } catch (error) {
            setFormStatus('FAILED');
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pt-[75px]">
            <div className="bg-[#f0f4ff] py-16 flex lg:flex-row flex-col items-center px-4 lg:px-16">
                {/* Form Section */}
                <div className="w-full lg:w-[60%] bg-white rounded-lg p-8 shadow-lg">
                    <h2 className="text-[26px] font-bold text-[#003366] mb-4">Let's work together!</h2>
                    <p className="text-[#003366] mb-6">I design and code beautifully simple things, and I love what I do.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                name="user_firstname"
                                placeholder="First name"
                                className="border px-3 py-[10px] rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="user_lastname"
                                placeholder="Last name"
                                className="border px-3 py-[10px] rounded-md"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email address"
                                className="border px-3 py-[10px] rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="user_phone"
                                placeholder="Phone number"
                                className="border px-3 py-[10px] rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <select name="work_type" className="border px-3 py-[10px] rounded-md w-full">
                                <option value="">—Please choose an option—</option>
                                <option value="frontend">Frontend Development</option>
                                <option value="backend">Backend Development</option>
                                <option value="fullstack">Full Stack Development</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="border p-2 rounded-md w-full h-32"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="text-[15px] bg-gradient-to-r from-[#003366] to-[#0055cc] text-white px-5 py-3 rounded-md hover:opacity-90 transition-opacity"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {formStatus && (
                            <p className={`mt-4 ${formStatus === 'SUCCESS' ? 'text-green-500' : 'text-red-500'}`}>
                                {formStatus === 'SUCCESS' ? 'Message sent successfully!' : 'Failed to send message. Try again later.'}
                            </p>
                        )}
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="w-full lg:w-[40%] lg:mt-0 mt-10">
                    <div className="lg:ml-10">
                        <h2 className="text-blue-950 text-[26px] font-bold mb-6">Contact Info</h2>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center mb-4">
                                <i className="h-12 w-12 rounded-full grid place-items-center fa-solid fa-phone text-xl bg-gradient-to-b from-blue-950 to-blue-800 text-white"></i>
                                <div className="flex flex-col ml-3">
                                    <span className="text-blue-950">Phone</span>
                                    <span className="text-blue-950 text-lg font-medium">+92 307 941 0053</span>
                                </div>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="h-12 w-12 rounded-full grid place-items-center fa-solid fa-envelope text-xl bg-gradient-to-b from-blue-950 to-blue-800 text-white"></i>
                                <div className="flex flex-col ml-3">
                                    <span className="text-blue-950">Email</span>
                                    <span className="text-blue-950 text-lg font-medium">musazeshan.it@gmail.com</span>
                                </div>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="h-12 w-12 rounded-full grid place-items-center fa-solid fa-location-dot text-xl bg-gradient-to-b from-blue-950 to-blue-800 text-white"></i>
                                <div className="flex flex-col ml-3">
                                    <span className="text-blue-950">Address</span>
                                    <span className="text-blue-950 text-lg font-medium">Lahore, Pakistan</span>
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
