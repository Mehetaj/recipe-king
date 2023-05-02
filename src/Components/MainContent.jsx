import React from 'react';
import Banner from './Banner';
import FirstSec from './FirstSec';
import Chefs from './Chefs';
import SecondSec from './SecondSec';


const MainContent = () => {
    return (
        <div>
            <Banner />
            <Chefs />
            <SecondSec />
            <FirstSec />
        </div>
    );
};

export default MainContent;