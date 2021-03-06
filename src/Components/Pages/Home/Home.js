import React from 'react';
import Contact from '../Contact/Contact';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>

            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;