import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoIosCheckmark } from 'react-icons/io';
import resumePackages from '../../assets/resumePackages.json'; // adjust path if needed

const ResumeBox = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-15 lg:px-40 justify-evenly">
      {resumePackages.map((pkg, index) => (
        <div
          key={index}
          className="text-[#0649E7]  h-full border-2 rounded-4xl p-8 flex flex-col"
        >
          <div>
            <h3 className="font-[600] text-[32px] ">{pkg.planName}</h3>
            {pkg.subtitle && (
              <p className="font-[500] text-sm mb-5">{pkg.subtitle}</p>
            )}
            <h2 className="font-bold text-4xl mb-5">
              {pkg.price}
              <span className="text-lg">{pkg.duration}</span>
            </h2>
            <div className="text-gray-400">
              <hr className="mb-5" />
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-2">
                  <IoIosCheckmark className="mt-1 bg-green-400 text-white rounded-full w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-lg bg-[#0649E7] text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit">
              <p className="text-white">{pkg.buttonText}</p>
              <GoArrowRight className="text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeBox;
