import React from 'react';
import Videobox from './Shared/Videobox';
import { GoArrowRight } from 'react-icons/go';

const ClientReview = () => {
    return (
        <div className="px-4 md:px-10 py-18 w-full md:max-  mx-auto">
            <h1 className='text-lightblue text-3xl mb-20 sm:text-center'>
                What our clients have to say
            </h1>
            {/* Flex layout changes for md */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-items-center  items-center gap-8'>
                <Videobox />
                <Videobox />
                <Videobox />
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-5 mt-10'>
                <div className='text-lg bg-white px-6 py-3 rounded-full flex items-center gap-2 border border-[#0649E7]'>
                    <p className='text-[#0649E7]'>More customer testimonials ↗</p>
                </div>
                <div className='text-lg bg-[#0649E7] text-white px-6 py-3 rounded-full flex items-center gap-2'>
                    <p className='text-white'>Get Started</p>
                    <GoArrowRight className='text-white' />
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
