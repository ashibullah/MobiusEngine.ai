import React from 'react';

const WorkStep = ({num,des}) => {
    return (
        <div>
            <div className='flex justify-center items-center border w-12 h-12 rounded-full '>
            <h1 className=' text-3xl '>{num}</h1>    
            </div>
            
            <hr className='w-32 pt-2 mt-2 text-lightblue' />
            <p className='text-lightblue font-semibold'>{des}</p>
            
        </div>
    );
};

export default WorkStep;