import { FaLinkedinIn } from 'react-icons/fa';
import FooterLogo from '../assets/FooterLogo.png';

const Footer = () => {
    const FooterInfo = [
        {
            "title": "Address",
            "des": "1875 Mission St Ste 103 #450 San Francisco, CA 94103"
        },
        {
            "title": "Email",
            "des": "finance@mobiusengine.ai"
        },
        {
            "title": "Telephone",
            "des": "650-889-6026"
        }
    ];

    return (
        <div>
            <div className='text-[#0649E7] px-4 md:px-20 mt-20 sm:px-5'>
                <div>
                    <img src={FooterLogo} alt="Footer Logo" className="w-32 md:w-auto" />
                    <div className="mt-5 text-gray-400 w-full md:w-1/5">
                        <hr className="mb-5" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-40'>
                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row gap-10">
                        {
                            FooterInfo.map((item, idx) => (
                                <div className='w-full md:w-auto' key={idx}>
                                    <h4 className='underline font-semibold text-md'>{item.title}</h4>
                                    <p className='text-lg font-medium'>{item.des}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h4 className='underline font-semibold text-md'>Social</h4>
                        <div className="flex gap-4">
                            <div className='border p-2 rounded-full'>
                                <FaLinkedinIn className='text-xl' />
                            </div>
                            {/* Add more social icons here */}
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-white bg-[#0649E7] flex flex-col md:flex-row justify-between p-6 px-4 md:px-20 mt-10'>
                <p>© 2023 Mobiusservices LLC</p>
                <div className='flex gap-5'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
