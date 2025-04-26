import React from 'react';
import AboutProfiles from './Shared/AboutProfiles';
import dp1 from '../assets/person2.png'
import dp2 from '../assets/person1.png'



const AboutUs = () => {

    const des1 = (<>Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles.<br /><br />Ashwin is an MBA holder from Yale University.Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</>)
    const des2 = (<>Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. <br /><br />
        With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</>)
    return (

        <div className='h-[900px] bg-gradient-to-b from-black to-blue-700 text-white flex items-center'>
            <div className=" px-10 py-18 w-[1000px] mx-auto">
                <h1 className=' text-3xl mb-20 text-white'>About Us</h1>
                <div>
                    <AboutProfiles img={dp1} des={des1} />
                    <AboutProfiles img={dp2} des={des2} />
                </div>
                <div className="flex justify-center">
                    <div className='flex flex-col justify-center items-start'>
                        <a href="">Learn more about our Board of Advisors ↗</a>
                        <a href="">Follow us on our Linkedin page ↗</a>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default AboutUs;