import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Jobs = () => {
    const [jobs, setJobs]= useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='container max-w-7xl mx-auto'>
            <h1 className='lg:text-4xl text-2xl font-bold text-center text-gray-900 my-10'>Jobs for Udergrad Students of RUET</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                jobs.map(job => <JobCard className="p-3" key={job._id} job={job}></JobCard>)
            }
            </div>
        </div>
    );
};

export default Jobs;