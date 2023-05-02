import React from 'react';
import bg from '../assets/error.jpg'

const Error = () => {
  return (
    <div className='min-h-screen relative bg-cover bg-center flex object-cover justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
      <button className=' bg-gray-600 text-xl py-2 px-10 text-white'>Go Back</button>
    </div>
  );
};

export default Error;