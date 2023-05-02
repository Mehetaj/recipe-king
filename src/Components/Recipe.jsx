import React from 'react';

const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { name, picture, description, ingredients, instructions } = recipe;
    return (
        <div className='container w-[1000px] border p-4 mx-auto flex justify-center  mt-10'>
            <div className='w-[1000px] '>
                <img className=' w-[1000px] h-[600px]' src={picture} alt="" />
                <h1 className='text-3xl  font-bold font-serif my-4'>{name}</h1>

                <div className='my-6 p-4'>
                    <h2 className='text-2xl my-4 font-bold'>Ingredients</h2>
                {
                    ingredients.map(i => <ol><li className=' list-disc'>{i}</li></ol>)
                }
                </div>

                <div className='my-6'>
                    <h2 className='text-2xl my-4 font-bold'>Cooking Method</h2>
                {
                    instructions.map(i => <p>{i}</p>)
                }
                </div>
            </div>
        </div>
    );
};

export default Recipe;