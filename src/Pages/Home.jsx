import React from 'react';
import Banner from '../components/Banner';
import WorkStep from '../components/Shared/WorkStep';
import WorkSteps from '../components/WorkSteps';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WorkSteps/>
            <AboutUs/>
        </div>
    );
};

export default Home;