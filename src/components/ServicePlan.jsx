import React from 'react';
import PackageBox from './Shared/PackageBox';
import { IoIosCheckmark } from 'react-icons/io';
import { GoArrowRight } from 'react-icons/go';

const ServicePlan = () => {
    const checkBox = ['Everything in Plus', 'Custom Resumes & Cover Letters', '20 fully customized applications/week', 'Help with complex job searches', 'Access to senior resume experts, Founder & Exec Coaches']
    return (
        <div className=" px-10 py-18   mx-auto">
            <h1 className='text-lightblue font-semibold text-3xl mb-20'>What our clients have to say</h1>

            <div className='flex gap-15'>
                <PackageBox />
            </div>

            <div className='relative text-white font-[600] p-10 mt-13 w-full  bg-[#0649E7] rounded-4xl '>
                <div className='flex justify-between'>
                <div>
                    <h2 className=' text-[32px]'>Advance</h2>
                <p className='text-[18px]'>Top-tier support for serious job hunters:</p>
                </div>
                <div>
                    <h1 className='font-[700px] text-[40px]'>$150<span className='text-xl font-semibold'>/week</span></h1>
                </div>
                </div>
                <div className="mt-5 text-gray-400 w-2/5">
                    <hr className="mb-5" />
                </div>
                <div className='flex flex-wrap w-2/3  gap-2 gap-x-10'>
                     {
                    checkBox.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 mb-2">
                            <IoIosCheckmark className="mt-1 bg-green-400 text-white rounded-full w-5 h-5 flex-shrink-0" />
                            <p className="text-sm font-medium">{feature}</p>
                        </div>
                    )
                    )
                }
                </div>  

                <div className="absolute bottom-10 right-10">
                    <button className="text-lg bg-white text-[#022183] hover:bg-[#022183] hover:text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                        Get Started
                        <GoArrowRight />
                    </button>
                </div>   
            </div>
            

            <hr className='mt-18 text-gray-400'/>

        </div>
    );
};

export default ServicePlan;