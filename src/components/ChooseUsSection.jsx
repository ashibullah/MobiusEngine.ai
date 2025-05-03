import React from 'react';
import Box from './Shared/box';
import icon1 from '../assets/Layer 1.png';
import icon2 from '../assets/Profile 1.png';
import icon3 from '../assets/Star 1.png';

const ChooseUsSection = () => {
    const des1 = `Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.`;
    const des2 = `A hands-on team that actually cares — guiding you through every twist in your career path.`;
    const des3 = `We search, shortlist, and apply for you, so your name shows up first — every single day.`;

    return (
        <div className="px-5 md:px-12 py-10 md:py-18 sm:w-full lg:w-[1100px] mx-auto bg-[#F8FAFF] rounded-4xl">
            <h1 className='text-lightblue font-semibold text-3xl mb-10 text-center'>Why Choose Us?</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-items-center  items-center gap-8'>
                <Box img={icon1} des={des1} tittle={'Tried, Tested, Trusted'} />
                <Box img={icon2} des={des2} tittle={'Real People, Real Help'} />
                <Box img={icon3} des={des3} tittle={'Beat the Line'} />
            </div>
        </div>
    );
};

export default ChooseUsSection;
