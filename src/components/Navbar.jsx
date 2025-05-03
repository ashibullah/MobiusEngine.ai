import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from 'react-icons/io';
import logo from '../assets/Startlogo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-transparent fixed top-0 left-0 w-full z-50 text-white'>
            <div className='flex justify-between items-center px-5 md:px-[85px] py-4 md:py-5'>
                <div>
                    <img className='w-32 md:w-40' src={logo} alt="logo" />
                </div>

                <div className='block lg:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                    </button>
                </div>

                <ul className='hidden lg:flex gap-5 items-center'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                    <li>Privacy Policy</li>
                    <li className='flex items-center gap-1'>More <IoMdArrowDropdown /></li>
                    <li>
                        <button className='text-sm md:text-[16px] bg-white font-semibold text-black px-5 md:px-6 py-2 rounded-full'>
                            Get Started
                        </button>
                    </li>
                </ul>
            </div>

            {menuOpen && (
                <div className='lg:hidden bg-[#111827] text-white px-5 pb-4'>
                    <ul className='flex flex-col gap-3'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Plans</li>
                        <li>Testimonials</li>
                        <li>Privacy Policy</li>
                        <li className='flex items-center gap-1'>More <IoMdArrowDropdown /></li>
                        <li>
                            <button className='w-full text-sm bg-white font-semibold text-black px-4 py-2 rounded-full'>
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
