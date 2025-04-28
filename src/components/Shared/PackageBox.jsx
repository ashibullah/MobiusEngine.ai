import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoIosCheckmark } from 'react-icons/io';
import packages from '../../assets/packages.json'; // adjust path

const PackageBox = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
                <div key={index} className= {`text-[#0649E7] ${pkg.badge ?  'bg-[#0649E7]/10' : ''} h-full border-2 rounded-4xl p-8  flex flex-col `}>
                    <div>
                        <div className='flex justify-between items-start '>
                            <h3 className="font-bold text-xl mb-5">{pkg.planName}</h3>
                            {pkg.badge && <p className=' border rounded-3xl px-2 py-1'>{pkg.badge}</p>}
                        </div>


                        <h2 className="font-bold text-4xl mb-10">
                            {pkg.price.split('/')[0]}
                            <span className="text-lg">/{pkg.price.split('/')[1]}</span>
                        </h2>
                        <div className="text-gray-400">
                            <hr className="mb-5" />
                        </div>
                    </div>

                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            {pkg.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 mb-2">
                                    <IoIosCheckmark className="mt-1 bg-green-400 text-white rounded-full w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-medium">{feature}</p>
                                </div>
                            ))}
                        </div>
                        <div className=" mt-10 text-lg bg-[#0649E7] text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit">
                            <p className="text-white">{pkg.buttonText}</p>
                            <GoArrowRight className="text-white" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PackageBox;
