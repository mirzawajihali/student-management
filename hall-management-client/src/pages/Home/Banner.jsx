import React from 'react';
import photo1 from '../../assets/photos/group-1.jpg'
import photo2 from '../../assets/photos/group-2.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="w-full flex justify-center items-center py-8 sm:py-12 md:py-16 lg:p-20 bg-base-200">
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hero-content flex w-full max-w-7xl mx-auto px-4 justify-center items-center flex-col lg:flex-row-reverse gap-6 lg:gap-12"
            >
                {/* Image container */}
                <div className='flex-1 flex justify-center lg:justify-start relative max-w-md mx-auto lg:mx-0'>
                    <motion.img
                        src={photo1}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="w-60 sm:w-72 md:w-80 lg:w-96 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-gray-400 shadow-2xl"
                        alt="Students group"
                    />
                    <motion.img
                        src={photo2}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                        className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-gray-400 shadow-2xl absolute -bottom-10 -right-4 sm:right-0 md:right-8 lg:right-12"
                        alt="Students group"
                    />
                </div>
                
                {/* Text content */}
                <div className='flex-1 text-center lg:text-left mt-16 lg:mt-0'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Empowering Students, Building Futures
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                        Welcome to our student community platform! Here, you can buy affordable food tokens, find expert tutors for your studies, 
                        discover internship opportunities, and connect with peers to help each other grow. Plus, explore our marketplace for 
                        secondhand items like books, electronics, and more. Everything you need to succeed as a student, all in one place!
                    </p>
                    <Link to='/login'>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary bg-[#384959] hover:bg-[#6A89A7] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;


