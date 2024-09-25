import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import Skills from '../components/Skills';

const HomePage = () => {
    return (
        <div className='flex flex-col gap-y-20 mb-20'>
            <Hero />
            <Services />
            <Work />
            <Skills />
        </div>
    );
}

export default HomePage;
