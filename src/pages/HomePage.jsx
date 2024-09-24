import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';

const HomePage = () => {
    return (
        <div className='flex flex-col gap-y-20 mb-20'>
            <div className='px-28'>
                <Hero />
            </div>
            <Services />
            <Work />
        </div>
    );
}

export default HomePage;
