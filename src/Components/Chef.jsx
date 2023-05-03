import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {
    
    // console.log(chef);
    const { name, years_of_experience, num_recipes, picture, like , id } = chef
    return (
        <div className='container mx-auto  p-2 border lg:gap-4'>
            <div className='lg:flex justify-around items-center mt-4'>
                <div className='flex justify-center items-center'>
                    

                <img className='w-[120px] ' src={picture} alt="" />
                    
                </div>
                <div>
                    <h2 className='font-mono my-4 text-2xl font-bold'>{name}</h2>
                    <p className='mb-3'>Experience : {years_of_experience} years on this Field</p>
                    <p className='mb-3'>Recipes : {num_recipes} Different Recipes</p>
                    <p className='flex items-center bottom-0'><FaThumbsUp /> {like}</p>
                    <button className='w-full bg-red-400 lg:px-4 mt-10 py-2'><Link to={`/${id}`}>View Recipes</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Chef;