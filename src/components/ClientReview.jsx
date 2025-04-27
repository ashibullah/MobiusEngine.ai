import React from 'react';
import Videobox from './Shared/Videobox';
import { GoArrowRight } from 'react-icons/go';

const ClientReview = () => {
    return (
        <div className=" px-10 py-18 w-[1100px] mx-auto">
            <h1 className='text-lightblue text-3xl mb-20'>What our clients have to say</h1>
            <div className='flex  gap-8'>
            <Videobox/>
            <Videobox/>
            <Videobox/>
            </div>
            <div className='flex justify-center gap-5 mt-25'>
                
                <div className='text-lg bg-white  px-6 py-3 rounded-full flex items-center gap-2 border border-[#0649E7]'>
                    <p className='text-[#0649E7]' >More customer testimonials ↗</p>
                    
                </div>                
                <div className='text-lg bg-[#0649E7] text-white px-6 py-3 rounded-full flex items-center gap-2  text-darkblue'>
                    <p className='text-white' >Get Started</p>
                    <GoArrowRight className='text-white' />
                </div>                
            </div>
        </div>
    );
};

export default ClientReview;