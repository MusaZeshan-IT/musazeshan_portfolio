import React, { useState } from 'react';
import ProjectsList from '../helpers/ProjectsList'; // Import the Projects List

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Default state for "All"
    const [hoveredProject, setHoveredProject] = useState(null); // State to manage hovered project

    // Function to filter projects based on the selected category
    const filteredProjects = ProjectsList.filter((project) => {
        if (selectedCategory === "all") return true; // Show all projects
        return project.type === selectedCategory;
    });

    return (
        <section id='work' className='pt-28'>
            <div className='2xl:px-28 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-10 md:px-8 sm-custom:px-24 sm:px-16 xs-custom:px-14 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4'>
                <div className='flex flex-col items-center'>
                    <h1 className='lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] text-[28px] leading-[1.05] font-bold text-center text-blue-700'>
                        My Recent Work
                    </h1>
                    <div className='sm:mt-12 mt-10 flex gap-x-4 bg-gray-200 w-fit p-2 rounded-full'>
                        <button
                            className={`rounded-full sm:px-5 px-3 sm:py-2 py-1 sm:text-base xs:text-sm text-[13px] ${selectedCategory === 'all' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'text-blue-600'
                                }`}
                            onClick={() => setSelectedCategory("all")}
                        >
                            All
                        </button>
                        <button
                            className={`rounded-full sm:px-5 px-3 sm:py-2 py-1 sm:text-base xs:text-sm text-[13px] ${selectedCategory === 'fullstack' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'text-blue-600'
                                }`}
                            onClick={() => setSelectedCategory("fullstack")}
                        >
                            Full Stack
                        </button>
                        <button
                            className={`rounded-full sm:px-5 px-3 sm:py-2 py-1 sm:text-base xs:text-sm text-[13px] ${selectedCategory === 'frontend' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'text-blue-600'
                                }`}
                            onClick={() => setSelectedCategory("frontend")}
                        >
                            Frontend
                        </button>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 mt-20 lg-custom:gap-14 lg:gap-9 md:gap-7 gap-10'>
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className='relative cursor-pointer bg-[rgb(26,22,66)] shadow-[0_0_20px_5px_rgb(217,200,253)] lg-custom:px-8 lg-custom:py-12 lg:p-7 md:p-5 sm:p-9 xs:p-7 2xs-custom:p-5 2xs:p-4 p-3 rounded-lg flex justify-center items-end'
                            onMouseEnter={() => setHoveredProject(project.title)} // Set hovered project
                            onMouseLeave={() => setHoveredProject(null)} // Reset on leave
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            <img src={project.image} alt={project.title} />
                            {/* Overlay for project title */}
                            {hoveredProject === project.title && (
                                <div className='absolute flex flex-col justify-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 text-white lg-custom:px-6 lg:px-5 lg:py-4 p-4 lg:w-11/12 2xs-custom:w-[94%] w-[96%] h-fit'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='lg-custom:text-2xl lg:text-[22px] md:text-[18px] text-[16px] font-bold'>{project.title}</h2>
                                        <i className='fa-solid fa-chevron-right lg-custom:text-2xl lg:text-[22px] md:text-[18px] text-[16px]'></i>
                                    </div>
                                    <p className='lg-custom:mt-3 lg:mt-2 mt-1 lg-custom:text-base lg:text-[15px] md:text-[13px] text-[11px] leading-snug'>{project.desc}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
