import React from 'react';
import first from '../assets/first.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'


const SecondSec = () => {
    return (
        <div className=' container mx-auto text-red-400 text-center gap-20  my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className=' lg:w-[450px]'>
                <img className='lg:w-[450px]' src={first} alt="" />
                <div className='bg-white text-red-400 relative p-4 -mt-10 italic'>
                <h1 className='text-2xl   font-bold italic'>Chocolate Heaven</h1>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptatibus fuga eveniet distinctio soluta maiores ad asperiores atque alias tenetur.</small></p>
                </div>
            </div>
            <div className='lg:w-[450px]'>
                <img className='lg:w-[450px]' src={second} alt="" />
                <div className='bg-white text-red-400 relative p-4 -mt-10 italic'>
                <h1 className='text-2xl   font-bold italic'>Healthy Breakfast Meals</h1>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptatibus fuga eveniet distinctio soluta maiores ad asperiores atque alias tenetur.</small></p>
                </div>
            </div>
            <div className='lg:w-[450px]'>
                <img className='lg:w-[450px]' src={third} alt="" />
                <div className='bg-white text-red-400 relative p-4 -mt-10 italic'>
                <h1 className='text-2xl   font-bold italic'>Natural Food Yughurts</h1>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptatibus fuga eveniet distinctio soluta maiores ad asperiores atque alias tenetur.</small></p>
                </div>
            </div>
        </div>
    );
};

export default SecondSec;