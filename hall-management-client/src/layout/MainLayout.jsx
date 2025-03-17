import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Common/NavBar';
import Footer from '../pages/Common/Footer';
const Mainlayout = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;