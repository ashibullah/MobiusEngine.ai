import React from 'react';
import ResumeBox from './Shared/ResumeBox';

const ResumeBuilding = () => {
    return (
        <div className=" md:px-10  py-18 mx-auto">
            <h1 className="text-lightblue font-semibold text-3xl mb-20 text-center">What our clients have to say</h1>
            
            <div className="flex justify-center">
                <ResumeBox />
            </div>
        </div>
    );
};

export default ResumeBuilding;
