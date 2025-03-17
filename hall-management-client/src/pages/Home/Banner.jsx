import React from 'react';
import photo1 from '../../assets/photos/group-1.jpg'
import photo2 from '../../assets/photos/group-2.jpg'
import { easeOut } from "framer-motion";
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <div className=" flex justify-center items-center lg:p-20 bg-base-200">
            <motion.div 

            initial={{ y: 50, opacity: 0.25 }} // Start slightly below and fully transparent
            animate={{ y: 0, opacity: 1 }}  // Move to the original position and become fully visible
            transition={{ duration: 1, delay: 1, ease: "easeOut" }} // Animation settings

            
            className="hero-content flex  justify-center items-center flex-col lg:flex-row-reverse">
                <div className='flex-1 lg:ml-20'>
                <motion.img
    src={photo1}
    initial={{ y: 50, opacity: 0 }} // Start slightly below and transparent
    animate={{ y: 0, opacity: 1 }} // Move to original position and become visible
    transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
    className="lg:w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-gray-400 shadow-2xl"
/>
<motion.img
    src={photo2}
    initial={{ x: 50, opacity: 0 }} // Start slightly to the right and transparent
    animate={{ x: 0, opacity: 1 }} // Move to original position and become visible
    transition={{ duration: 2, delay: 1, ease: "easeOut" }} // Delay the second animation
    className="lg:w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-gray-400 shadow-2xl ml-50 -mt-10"
/>
                </div>
                <div
                className='flex-1'

>
<h1 className="text-6xl font-bold text-gray-900 mb-6">
        Empowering Students, Building Futures
    </h1>
    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Welcome to our student community platform! Here, you can buy affordable food tokens, find expert tutors for your studies, 
        discover internship opportunities, and connect with peers to help each other grow. Plus, explore our marketplace for 
        secondhand items like books, electronics, and more. Everything you need to succeed as a student, all in one place!
    </p>
    <button className="btn btn-primary bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
        Get Started
    </button>

</div>
            </motion.div>
        </div>
    );
};

export default Banner;


