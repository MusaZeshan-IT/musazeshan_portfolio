import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Work />
            <Skills />
            <Contact />
        </div>
    );
}

export default HomePage;
