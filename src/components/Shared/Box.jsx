import React from 'react';


const Box = ({tittle, des, img}) => {
    return (
        <div className='text-[#022183]  border-2 rounded-4xl  p-8'>
            <img className='mb-15' src={img} alt="" />
            <div>
                <h3 className='font-bold text-xl mb-5' >{tittle}</h3>
                <p className='pb-5'>{des}</p>
            </div>
        </div>
    );
};

export default Box;