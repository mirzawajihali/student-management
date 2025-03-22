import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import animation from '../../assets/animation/register.json';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from './SocialLogin';
import axios from 'axios';
const Register = () => {
    const { setUser, createUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';




    
   


    
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.Name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        if (!email || !password) {
            setErrorMessage("Email and password are required");
            return;
        }
        
        const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain at least one number");
            return;
        }

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
         
            navigate(from);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen bg-white px-4 py-8'>
            {/* Animation section - hidden on small screens, visible on medium and up */}
            <div className="hidden md:block w-full md:w-1/2 lg:w-5/12 p-4">
                <Lottie animationData={animation} className="max-w-full h-auto" />
            </div>
            
            {/* Form section */}
            <div className='w-full md:w-1/2 lg:w-5/12 px-4'>
                <div className="w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
                    
                    <form onSubmit={handleSignUp} className='w-full'>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="Name"
                                id="name"
                                placeholder="name"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Your Name
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="photo"
                                id="photo"
                                placeholder="Photo"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                            />
                            <label
                                htmlFor="photo"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Photo URL
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Email Address
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                required
                            />
                            <label
                                htmlFor="password"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Password
                            </label>
                        </div>
                        <div className="my-6 ">
                            <button
                                type="submit"
                                className="w-full font-bold rounded-md bg-[#384959] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:opacity-90 transition-opacity"
                            >
                                Register
                            </button>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                           
                        </div>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to='/login' className="text-[#3C2A21] font-medium hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </form>
                    
                    {errorMessage && (
                        <p className='text-center font-bold text-red-500 mt-4'>
                            {errorMessage}
                        </p>
                    )}
                    
                    {/* Show animation on small screens at the bottom */}
                    <div className="md:hidden w-full mt-8">
                        <Lottie animationData={animation} className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;