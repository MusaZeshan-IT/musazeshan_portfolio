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
        <section className='px-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[45px] leading-[1.05] font-bold text-center text-blue-700'>
                    My Recent Work
                </h1>
                <div className='mt-12 flex gap-x-4 bg-gray-200 w-fit p-2 rounded-full'>
                    <button
                        className={`rounded-full px-5 py-2 ${selectedCategory === 'all' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'text-blue-600'
                            }`}
                        onClick={() => setSelectedCategory("all")}
                    >
                        All
                    </button>
                    <button
                        className={`rounded-full px-5 py-2 ${selectedCategory === 'fullstack' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'text-blue-600'
                            }`}
                        onClick={() => setSelectedCategory("fullstack")}
                    >
                        Full Stack
                    </button>
                    <button
                        className={`rounded-full px-5 py-2 ${selectedCategory === 'frontend' ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'text-blue-600'
                            }`}
                        onClick={() => setSelectedCategory("frontend")}
                    >
                        Frontend
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-20 gap-14'>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className='bg-[rgb(26,22,66)] shadow-[0_0_20px_5px_rgb(217,200,253)] px-8 py-12 rounded-lg flex justify-center items-center'
                    >
                        <img src={project.image} alt={project.title} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
