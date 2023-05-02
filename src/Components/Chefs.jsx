import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const Chefs = () => {
    const chefs = useLoaderData()
    // console.log(chefs);
    return (
        <div>
            <h1 className='text-3xl text-center mt-40 mb-10 font-mono font-bold'>Our Chefs</h1>
            <div className='container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}/>)
                }
            </div>
        </div>
    );
};

export default Chefs;