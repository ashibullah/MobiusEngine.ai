import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { IoPlayCircle } from 'react-icons/io5';

const Videobox = () => {
    return (
        <div className='flex flex-col bg-[#0649E7] text-white w-[320px] rounded-4xl'>
            <div className='flex justify-center items-center border-2 border-[#0649E7] rounded-4xl '>
                <div className='w-[400px] h-[220px] rounded-4xl bg-white flex justify-center items-center'>
                    <IoPlayCircle className='text-[#0649E7] text-4xl' />
                </div>
            </div>
            <div className='p-5 font-light '>
                <p>Holly is a <span className='font-bold'>senior executive</span> who got over <span className='font-bold'>10 job interviews</span> and an offer she accepted</p>
            </div>
            <div className='py-5 flex justify-end pr-5'>

                <GoArrowUpRight className=' bg-white p-3 text-[#0649E7] rounded-full text-5xl' />
            </div>
        </div>
    );
};

export default Videobox;