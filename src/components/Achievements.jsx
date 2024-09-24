import React from 'react';

const Achievements = () => {
    return (
        <section>
            <div className="flex justify-center gap-x-[160px] mt-8 text-indigo-600">
                <div className="font-body flex items-center gap-x-4">
                    <h3 className="text-6xl font-bold font-heading">2+</h3>
                    <p className='text-lg font-bold leading-snug'>Years of<br />Experience</p>
                </div>
                <div className="font-body flex items-center gap-x-4">
                    <h3 className="text-6xl font-bold font-heading">50+</h3>
                    <p className='text-lg font-bold'>Projects<br />Completed</p>
                </div>
                <div className="font-body flex items-center gap-x-4">
                    <h3 className="text-6xl font-bold font-heading">1.5K</h3>
                    <p className='text-lg font-bold'>Happy<br />Clients</p>
                </div>
                <div className="font-body flex items-center gap-x-4">
                    <h3 className="text-6xl font-bold font-heading">3</h3>
                    <p className='text-lg font-bold'>Social<br />Accounts</p>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
