import React from 'react';

import bgImg from '../assets/bannerBg.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import pdfImg from '../assets/image 1.png';
import bookImg from '../assets/book.png';
import { GoArrowDownLeft, GoArrowRight } from 'react-icons/go';

const Banner = () => {
    return (
        <div className='flex items-start justify-center pt-40 pb-20 text-white'
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='flex flex-col gap-8 w-[600px] items-start'>
                <h1 className='text-Sora text-5xl font-bold '>Land job interviews <br /> <span className='text-darkblue'>10x</span> faster</h1>
                <p className='font-light'>Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
                <div className='text-lg bg-white text-black px-6 py-3 rounded-full flex items-center gap-2  text-darkblue'>
                    <button >Get Started</button>
                    <GoArrowRight />
                </div>


            </div>
            <div>
                <div className='relative'>
                    <img className='w-xs ' src={pdfImg} alt="banner" />
                    <div className='backdrop-blur-xs p-5 rounded-full border-2 absolute -bottom-7 -right-6'>
                        <img src={bookImg} alt="banner" />
                    </div>
                    <div className='flex justify-center items-center w-6 h-6 text-darkblue bg-white rounded-full 
                absolute -bottom-9 right-10'>
                        <GoArrowDownLeft />
                    </div>
                </div>
                <div className='pt-5'>
                    <p className='font-light text-center '>Download Free E-Book</p>

                </div>


            </div>
        </div>
    );
};

export default Banner;