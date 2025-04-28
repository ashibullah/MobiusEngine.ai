import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className=" px-10 py-18 w-[1200px] mx-auto">
        <div className='text-white font-[600] p-10  w-full -mt-15 bg-[#0649E7] rounded-4xl grid grid-cols-8 justify-items-center items-center gap-35 py-20'>
                        <p className='col-span-2 uppercase text-[30px] font-[400]'>Still Have Doubts?</p>
                        <h2 className='text-[80px] font-[500] col-span-4'>Contact us</h2>
                        <GoArrowRight className='col-span-2 text-[80px] font-semibold bg-white text-[#0649E7] rounded-full p-4'/>
                       
        
                    </div>
                    </div>
    );
};

export default ContactUs;