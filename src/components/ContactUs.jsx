import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className="px-4 md:px-10 py-18 mx-auto">
            <div className="text-white font-semibold p-10 w-full bg-[#0649E7] rounded-4xl grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-16 py-20">
                
          
                <p className="hidden md:block col-span-1 md:col-span-2 uppercase text-2xl md:text-[28px] font-light self-start">
                    Still Have Doubts?
                </p>
                
           
                <h2 className="text-4xl md:text-7xl font-medium col-span-1 md:col-span-4 text-center md:text-left">
                    Contact us
                </h2>


                <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end">
                    <GoArrowRight className="text-6xl md:text-[80px] font-semibold bg-white text-[#0649E7] rounded-full p-4" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
