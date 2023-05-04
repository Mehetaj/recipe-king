import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
             <div className=' container lg:flex lg:justify-center lg:tems-center lg:mx-auto my-6 '>
            <div>
                <img className=' h-[350px] lg:container lg:w-[1550px] lg:h-[600px] ' src={banner} alt="" />
                <div className='lg:text-center p-4 shadow-2xl lg:p-12 '>
                    <p className='text-red-400 mb-4 seafood'><small><span>S</span><span>E</span><span>A</span><span>F</span><span>O</span><span>O</span><span>D</span></small></p>
                    <h2 className=' text-lg lg:text-2xl font-bold font-mono mb-3'>Spicy shrimp soup with tomatoes</h2>
                    <p className='w-[full] text-xs'>Spicy Shrimp Soup is a copycat recipe from our favorite Ecuadorian restaurant. Spicy, garlicky, and comforting, you will eat bowl after bowl of this easy soup recipe!</p>
                </div>
                <hr className='my-10 lg:container mx-auto border lg:w-[90%] h-0 -mt-10'/>
            </div>
        </div>
        </div>
    );
};

export default Banner;