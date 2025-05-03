import linkedinLogo from '../../assets/linkedinLogo.png';

const AboutProfiles = ({ img, des }) => {
    return (
        <div className='flex flex-col md:flex-row mb-20 gap-10 px-5 md:px-20 justify-center items-center'>
            <div className='relative'>
                <div className='bg-white h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden flex items-center justify-center'>
                    <img className='h-full w-full object-cover' src={img} alt="profilePic" />
                </div>
                <div className='backdrop-blur-xs p-5 rounded-full border-2 absolute -bottom-5 -right-4'>
                    <img className='' src={linkedinLogo} alt="LinkedIn" />
                </div>
            </div>
            <div className='px-5 md:px-10'>
                <p className='font-light text-xs md:text-sm'>{des}</p>
            </div>
        </div>
    );
};

export default AboutProfiles;
