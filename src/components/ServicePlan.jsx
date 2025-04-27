import React from 'react';
import PackageBox from './Shared/PackageBox';

const ServicePlan = () => {
    return (
        <div className=" px-10 py-18 w-[1100px] mx-auto">
            <h1 className='text-lightblue font-semibold text-3xl mb-20'>What our clients have to say</h1>

            <div className='flex gap-15'>
                <PackageBox/>
                <PackageBox/>
                <PackageBox/>
            </div>
            
        </div>
    );
};

export default ServicePlan;