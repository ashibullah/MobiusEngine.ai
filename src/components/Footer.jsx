import { FaLinkedinIn } from 'react-icons/fa';
import FooterLogo from '../assets/FooterLogo.png'

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
    ]
    return (
        <div>
        <div className='text-[#0649E7] px-20 mt-20'>
            <div>
                <img src={FooterLogo} alt="" />
                <div className="mt-5 text-gray-400 w-1/5">
                    <hr className="mb-5" />
                </div>
            </div>
            <div className='flex justify-between gap-40'>
                <div className="flex gap-10">

                    {
                        FooterInfo.map((item, idx) => (
                            <div className='w-xs' key={idx}>
                                <h4 className='underline font-semibold text-md'>{item.title}</h4>
                                <p className='text-lg font-medium' >{item.des}</p>
                            </div>
                        ))
                    }

                </div>
                {/* for logo  */}
                <div>
                    <h4 className='underline font-semibold text-md'>Social</h4>
                    <div className="flex gap-2">
                        <div className=' border p-2 rounded-full'>
                            <FaLinkedinIn className='text-xl' />
                        </div>
                        <div className=' border p-2 rounded-full'>
                            <FaLinkedinIn className='text-xl' />
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>
        <div className='text-white bg-[#0649E7] flex justify-between p-6 px-20 mt-10'>
                <p >© 2023 Mobiusservices LLC</p>
                <div className='flex gap-5'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;