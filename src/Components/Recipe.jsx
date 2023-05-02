import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { FaStar } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';




const Recipe = ({ recipe }) => {
    // console.log(recipe);
    const { name, picture, description, ingredients, instructions, rating } = recipe;

    const favorite = () => {
        toast('🦄 Add To Favorite', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className='container lg:w-[1000px] border p-4 mx-auto lg:flex justify-center  mt-10'>
            <div className='lg:w-[1000px] '>
                <img className=' w-[1000px] h-[600px]' src={picture} alt="" />
                <h1 className='text-3xl  font-bold font-serif my-4'>{name}</h1>

                <div className=' float-left lg:flex justify-evenly items-baseline'>
                    <div className='my-6 p-4 lg:w-[50%]'>
                        <h2 className='text-2xl my-4 font-bold'>Ingredients</h2>
                        {
                            ingredients.map((i,index) => <ol key={index}><li className=' list-disc'>{i}</li></ol>)
                        }
                    </div>

                    <div className='my-6 lg:w-[50%]'>
                        <h2 className='text-2xl my-4 font-bold'>Cooking Method</h2>
                        {
                            instructions.map((i,index) => <p key={index}>{i}</p>)
                        }


                    </div>
                </div>
                <hr className='my-4 border-red-400' />

                <div>
                    <p className='text-red-400 text-center text-xl my-4'>{description}</p>
                </div>

                <hr  className='border-red-400 my-4'/>

                <div className='flex justify-between items-center'>
                    <div title={rating} className='flex font-bold items-center' aria-disabled>
                        <p>{rating}</p>
                        <Rating isDisabled={true} style={{ maxWidth: 100 }} value={rating} />
                    </div>

                    <button onClick={favorite} className='text-red-300 text-3xl bg--700 focus:text-red-500'><FaStar /></button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Recipe;