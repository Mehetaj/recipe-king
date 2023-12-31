import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa'
import Recipe from './Recipe';

const Details = () => {
    const chef = useLoaderData()
    // console.log(chef.recipes);
    const { picture, name, bio, like, num_recipes, years_of_experience, recipes } = chef;
    const [likes , setLike] = useState(parseInt(like)) 
    return (
        <div className='container mt-20 mx-auto'>
            <div className='lg:flex items-center justify-evenly'>
                <img className=' w-80 lg:w-80' src={picture} alt="" />
                <div className='lg:w-[600px]'>
                    <h1 className='text-3xl font-serif font-bold my-6'>{name}</h1>
                    <p className=' italic my-4 font-serif '>{bio}</p>
                    <p className='my-2'><span className='font-bold'>Recipes :</span> {num_recipes} Different Kind of Recipes</p>
                    <p><span className='font-bold'>Experience :</span> {years_of_experience} years experience on this field </p>

                    <p className='lg:flex items-center my-3'><FaThumbsUp  onClick={() => {
                        parseInt(setLike(likes => likes + 1))
                        
                        }} className='mr-2 focus:bg-red-400' />{likes}</p>
                </div>
            </div>

            <div className='mt-20'>
                {
                    recipes?.map((recipe , i) => <Recipe key={i} recipe={recipe}/>)
                }
            </div>
        </div>
    );
};

export default Details;