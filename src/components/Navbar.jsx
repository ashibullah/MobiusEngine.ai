import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../assets/Startlogo.png';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-[85px] py-5 text-white fixed top-0 left-0 w-full'>
            <div>
                <img className='w-40' src={logo} alt="logo" />
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                    <li>Privacy Policy</li>
                    <li>Testimonials</li>
                    <li className='flex items-center'>More <IoMdArrowDropdown /></li>
                </ul>
            </div>
            <div>
                <button className='text-[16px] bg-white font-semibold text-black px-6 py-2 rounded-[32px] text-darkblue'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;