import React, { useState } from 'react';
import ProjectsList from '../helpers/ProjectsList'; // Import the Projects List

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Default state for "All"

    // Function to filter projects based on the selected category
    const filteredProjects = ProjectsList.filter((project) => {
        if (selectedCategory === "all") return true; // Show all projects
        return project.type === selectedCategory;
    });

    return (
        <section className='2xl:px-28 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-10 md:px-8 sm-custom:px-24 sm:px-16 xs-custom:px-14 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4'>
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
                        className='bg-[rgb(26,22,66)] shadow-[0_0_20px_5px_rgb(217,200,253)] lg-custom:px-8 lg-custom:py-12 lg:p-7 md:p-5 sm:p-9 xs:p-7 2xs-custom:p-5 2xs:p-4 p-3 rounded-lg flex justify-center items-center'
                    >
                        <img src={project.image} alt={project.title} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
