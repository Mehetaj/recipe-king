import React from 'react';
import bg from '../assets/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='min-h-screen relative bg-cover bg-center flex object-cover justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
      <button className=' bg-gray-100 text-xl py-2 px-10 '><Link to="/">Go Back</Link></button>
    </div>
  );
};

export default Error;