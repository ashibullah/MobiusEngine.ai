import React from 'react';
import bannerImg from '../assets/banner.png';
import bgImg from '../assets/bannerBg.png';

const Banner = () => {
    return (
        <div className='flex items-center justify-center py-20' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='flex flex-col gap-8 w-[600px] items-start'>
                <h1 className='text-Sora text-5xl font-bold '>Land job interviews <br /> <span className='text-darkblue'>10x</span> faster</h1>
                <p>Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
                <button className='text-[20px] bg-white text-black px-6 py-2 rounded-[32px]'>Get Started</button>


            </div>
            <div>
                <img className='w-full' src={bannerImg} alt="banner" />

            </div>
            
        </div>
    );
};

export default Banner;