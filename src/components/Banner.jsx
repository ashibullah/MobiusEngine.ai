import React from 'react';

import bgImg from '../assets/bannerBg.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import pdfImg from '../assets/image 1.png';
import bookImg from '../assets/book.png';
import { GoArrowDownLeft, GoArrowRight } from 'react-icons/go';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 pt-20 lg:pt-40 pb-20 text-white'
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='flex flex-col gap-6 sm:gap-8 w-full max-w-[600px] items-start text-center lg:text-left'>
                <h1 className='text-Sora text-3xl sm:text-4xl lg:text-5xl font-bold'>
                    Land job interviews <br />
                    <span className='text-darkblue'>10x</span> faster
                </h1>
                <p className='font-light text-sm sm:text-base'>
                    Custom-built resumes that match your goals, keywords, and recruiter expectations.
                </p>
                <button className='text-sm sm:text-lg bg-white text-[#022183] hover:bg-[#022183] hover:text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 self-center lg:self-start'>
                    Get Started
                    <GoArrowRight />
                </button>
            </div>

            <div className='mt-10 lg:mt-0 lg:ml-10 relative'>
                <div className='relative flex justify-center'>
                    <img className='w-48 sm:w-60 md:w-72' src={pdfImg} alt="banner" />
                    <div className='backdrop-blur-xs p-3 sm:p-5 rounded-full border-2 absolute -bottom-5 -right-4 sm:-bottom-7 sm:-right-6'>
                        <img className='w-8 sm:w-10' src={bookImg} alt="book" />
                    </div>
                    <div className='flex justify-center items-center w-5 sm:w-6 h-5 sm:h-6 text-darkblue bg-white rounded-full absolute -bottom-6 right-6 sm:-bottom-9 sm:right-10'>
                        <GoArrowDownLeft />
                    </div>
                </div>
                <div className='pt-4 sm:pt-5'>
                    <p className='font-light text-sm sm:text-base text-center'>Download Free E-Book</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
