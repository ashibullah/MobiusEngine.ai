import linkedinLogo from '../../assets/linkedinLogo.png'

const AboutProfiles = ({ img, des }) => {
    return (
        <div className='flex mb-20 gap-10  px-20 justify-center items-center'>
            <div className='relative'>
                <div className='bg-white h-48  w-48  rounded-full overflow-hidden flex items-center justify-center  '>
                    <img className='h-full w-full object-cover ' src={img} alt="profilePic" />
                </div>
                <div className='backdrop-blur-xs p-5 rounded-full border-2 absolute -bottom-5 -right-4'>
                 <img className='' src={linkedinLogo} alt="" />   
                </div>
                
            </div>
            <div className='px-10'>
                <p className='font-light text-xs'>{des}</p>
            </div>
        </div>
    );
};

export default AboutProfiles;