import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
        <LoaderAnimation />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8 w-full">
      <LoaderAnimation />
    </div>
  );
};

const LoaderAnimation = () => {
  return (
    <div className="text-center">
      <motion.div
        className="inline-block w-16 h-16 relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-4 border-t-[#88BDF2] border-r-[#6A89A7] border-b-[#384959] border-l-[#BDDDFC] rounded-full"
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>
      <p className="mt-4 text-[#384959] font-medium">Loading...</p>
    </div>
  );
};

export default Loader; 