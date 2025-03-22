import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from './SocialLogin';
import axios from 'axios';



const Login = () => {
    const {loginUser, setUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage]= useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location?.state?.from?.pathname || '/';

    const handleLogin= (e) =>
         {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value
            const password = form.password.value

            loginUser(email, password)
            .then(result =>{
                    const user = result.user;
                    setUser(user)
                    console.log(result.user)
                    const lastSignInTime = result.user?.metadata?.lastSignInTime
                    const loginInfo ={email, lastSignInTime}
                    navigate(from );
                   
                    const userData ={
                        email : user.email
                    }
                   axios.post('http://localhost:5000/jwt', userData, {withCredentials: true})
                   .then(res =>console.log(res.data))
                    
            })
            .catch(error =>{
                console.log(error)
                setErrorMessage(error.message)
            })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
            <form onSubmit={handleLogin} action="">
                <div className="relative mt-6">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        autoComplete="NA"
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
                                className="w-full font-bold rounded-md bg-[#384959] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:opacity-90 transition-opacity "
                            >
                                Login
                            </button>
                            <div className="divider">OR</div>

                            <SocialLogin></SocialLogin>
                </div>
               
            </form>
            <p className="text-center text-sm text-gray-500">
                    Don&#x27;t have an account yet?{" "}
                  
                       <Link to='/register'> Sign up</Link>
                
                    
                </p>
                <p className='text-center font-bold text-red-500'>
    {
      errorMessage && errorMessage
    }
  </p>
        </div>
    </div>
</div>
        </div>
    );
};

export default Login;