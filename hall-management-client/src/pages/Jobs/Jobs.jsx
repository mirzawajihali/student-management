import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { FaSearch, FaSearchLocation } from "react-icons/fa";
import Loader from '../Common/Loader';

const Jobs = () => {
    const [jobs, setJobs]= useState([]);
    const [sort, setSort]= useState(false);
    const [searchLocation, setSearchLocation]= useState('');
    const [searchTitle, setSearchTitle]= useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        fetch(`https://student-management-server-mu.vercel.app/jobs?sort=${sort}&searchLocation=${searchLocation}&searchTitle=${searchTitle}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching jobs:", error);
            setLoading(false);
        });
    },[sort,searchLocation,searchTitle]);

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

            {loading ? (
                <Loader />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    jobs.length > 0 ? (
                        jobs.map(job => <JobCard className="p-3" key={job._id} job={job}></JobCard>)
                    ) : (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                            <h2 className="text-2xl text-[#384959] font-semibold">No jobs found matching your criteria</h2>
                            <p className="text-[#6A89A7] mt-2">Try adjusting your search filters</p>
                        </div>
                    )
                }
                </div>
            )}
        </div>
    );
};

export default Jobs;