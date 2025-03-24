import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { FaSearch, FaSearchLocation } from "react-icons/fa";
const Jobs = () => {
    const [jobs, setJobs]= useState([]);
    const [sort, setSort]= useState(false);
    const [searchLocation, setSearchLocation]= useState('');
    const [searchTitle, setSearchTitle]= useState('');

    useEffect(() =>{
        fetch(`http://localhost:5000/jobs?sort=${sort}&searchLocation=${searchLocation}&searchTitle=${searchTitle}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[sort,searchLocation,searchTitle])
    return (
        <div className='container max-w-7xl mx-auto'>
            <h1 className='lg:text-4xl text-2xl font-bold text-center text-gray-900 my-10'>Jobs for Udergrad Students of RUET</h1>

            <div className='w-11/12 mx-auto py-5 px-3 flex flex-wrap items-center gap-4'>
  

  <div className="relative flex-grow min-w-[200px]">
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      onKeyUp={(e) => setSearchLocation(e.target.value)}
      type="text"
      placeholder="Search by job location"
      className="input input-bordered w-full pl-10"
    />
  </div>

  <div className="relative flex-grow min-w-[200px]">
    <FaSearchLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
    <input
      onKeyUp={(e) => setSearchTitle(e.target.value)}
      type="text"
      placeholder="Search by title"
      className="input input-bordered w-full pl-10"
    />
  </div>
  <button
    className={`btn ${sort ? 'btn-success' : 'btn-neutral'}`}
    onClick={() => setSort(!sort)}
  >
    {sort ? 'Sorted by Salary' : 'Sort by Salary'}
  </button>
</div>

           
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                jobs.map(job => <JobCard className="p-3" key={job._id} job={job}></JobCard>)
            }
            </div>
        </div>
    );
};

export default Jobs;