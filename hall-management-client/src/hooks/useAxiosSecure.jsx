import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {

    const {logout} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            response => {
                return response;
            }, 
            async (error) => {
                console.log('error from the interceptor', error.response);
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    console.log('unauthorized - logging out');
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
        
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, [logout, navigate]);

    return axiosInstance;
};

export default useAxiosSecure;