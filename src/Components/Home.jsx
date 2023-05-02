import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header />
            <div>{
                navigation.state === 'loading' && <>
                <div>
                    
                </div>
                </>
            }</div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;