import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className="px-4 md:px-10 py-18 mx-auto">
            <div className="text-white font-semibold p-6 md:p-10 w-full bg-[#0649E7] rounded-4xl grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 py-12 md:py-20 place-items-center">
                {/* Text "Still Have Doubts?" */}
                <p className="hidden md:block col-span-1 uppercase text-xl md:text-[28px] font-light self-start">
                    Still Have Doubts?
                </p>
                
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-center md:text-left">
                    Contact us
                </h2>

                {/* Arrow icon */}
                <div className="flex justify-center md:justify-end">
                    <GoArrowRight className="text-5xl md:text-[80px] font-semibold bg-white text-[#0649E7] rounded-full p-4" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
