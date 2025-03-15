import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Common/NavBar';
const Mainlayout = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <div><Outlet></Outlet></div>
            
        </div>
    );
};

export default Mainlayout;