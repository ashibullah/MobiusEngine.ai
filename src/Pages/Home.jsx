import React from 'react';
import Banner from '../components/Banner';
import WorkStep from '../components/Shared/WorkStep';
import WorkSteps from '../components/WorkSteps';
import AboutUs from '../components/AboutUs';
import ClientReview from '../components/ClientReview';
import ChooseUsSection from '../components/ChooseUsSection';
import ServicePlan from '../components/ServicePlan';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WorkSteps/>
            <AboutUs/>
            <ClientReview/>
            <ChooseUsSection/>
            <ServicePlan/>
        </div>
    );
};

export default Home;