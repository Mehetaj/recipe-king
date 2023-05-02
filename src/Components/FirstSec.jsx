import React from 'react';
import author from '../assets/author.png';

const FirstSec = () => {
    return (
        <div className='h-[500px] text-center lg:h-[300px] mt-20 lg:mt-36 p-4 bg-rose-50 lg:w-[90%] lg:container mx-auto'>
            <div className='lg:flex justify-evenly border items-center lg:p-20 border-red-300 h-full'>
                <div className='text-center  font-sans'>
                <h1 className='text-3xl text-red-400 font-serif'><i>Hello there! I am Maggy. <br /> Start cooking with me.</i></h1>
                <p className='w-[400px] mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet, ad consectetur adi picibe elit, sed do eiusmod tempor inci didunt quo labore e dolore magna aliqua ut.
                </p>

                <button className='underline space-x-4 text-red-400 mt-6'>VIEW MORE</button>
                </div>
                <img className='mx-auto w-[250px] h-[250px]' src={author} alt="" />
            </div>
        </div>
    );
};

export default FirstSec;