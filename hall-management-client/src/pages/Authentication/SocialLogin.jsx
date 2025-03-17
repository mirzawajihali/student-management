import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {RegisterWithGoogle, setUser} = useContext(AuthContext);
    
    const navigate = useNavigate();


    const handleGoogle = () =>{
        RegisterWithGoogle()
        .then(result =>{
            const user = result.user;
           setUser(user);
           navigate('/');
           
        })
        .catch(error =>{
       
               
             console.log(error)
             
         })
    }
    return (
        <div>
             <button onClick={handleGoogle} className="w-full font-bold rounded-md flex gap-3 justify-center items-center bg-[#e8f5ff] px-3 py-4  focus:bg-gray-600 focus:outline-none hover:opacity-90 transition-opacity">
        <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="Google logo"
        />
        <span>Login with Google</span>
    </button>
        </div>
    );
};

export default SocialLogin;