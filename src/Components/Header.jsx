import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center mt-6'>
            <div>
                <div className='flex items-center '> <img className='w-[180px]' src={logo} alt="" /> <span className='-mt-3 text-4xl'>Recipes</span></div>
            </div>
        </div>
    );
};

export default Header;