import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Chef = ({ chef }) => {
    
    // console.log(chef);
    const { name, years_of_experience, num_recipes, picture, like , id } = chef
    return (
        <div className='border p-4 gap-4'>
            <div className='flex justify-around items-center mt-4'>
                <img className='w-[120px] ' src={picture} alt="" />
                <div>
                    <h2 className='font-mono text-2xl font-bold'>{name}</h2>
                    <p>Experience : {years_of_experience} years on this Field</p>
                    <p>Recipes : {num_recipes} Different Recipes</p>
                    <p className='flex items-center bottom-0'><FaThumbsUp /> {like}</p>
                    <button className='bg-red-400 px-4 mt-10 py-2'><Link to={`/${id}`}>View Recipes</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Chef;