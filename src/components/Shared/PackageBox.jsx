import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoIosCheckmark } from 'react-icons/io';

const PackageBox = () => {
    return (
        <div className='text-[#0649E7]  border-2 rounded-4xl  p-8'>
            <h3 className='font-bold text-xl mb-5' >April Promo</h3>
            <h2 className='font-bold text-4xl mb-10 '>$35<span className='text-lg'>/week</span></h2>
            <div className=' text-gray-400'>
                <hr className='mb-5' />
            </div>
            <div>
                <div className='flex justify-center items-start gap-2 mb-2'>
                    <IoIosCheckmark className='mt-1 bg-green-400 text-white rounded-full w-5 h-5 flex-shrink-0' />
                    <p className='text-sm font-medium'>Curated jobs from 1M+ listings, refreshed every 48 hours</p>
                </div>
                
            </div>
            <div></div>
            <div className='mt-10 text-lg bg-[#0649E7] text-white px-6 py-3 rounded-full flex items-start gap-2  text-darkblue w-fit'>
                <p className='text-white' >Get Started</p>
                <GoArrowRight className='text-white' />
            </div>
        </div>
    );
};

export default PackageBox;