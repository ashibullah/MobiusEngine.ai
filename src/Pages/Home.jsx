import React from 'react';
import Banner from '../components/Banner';
import WorkStep from '../components/Shared/WorkStep';
import WorkSteps from '../components/WorkSteps';
import AboutUs from '../components/AboutUs';
import ClientReview from '../components/ClientReview';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WorkSteps/>
            <AboutUs/>
            <ClientReview/>
        </div>
    );
};

export default Home;