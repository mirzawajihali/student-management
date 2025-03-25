import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaEdit, FaEye } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';

const MyPostedJobs = () => {

    const {user} = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch(`https://student-management-server-mu.vercel.app/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])


    return (
        <div className='mb-30 lg:max-w-7xl mx-auto'>
            <h1 className='text-3xl text-center font-bold my-10'>My Posted Jobs</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Salary</th>
        <th>Status</th>
        <th>Deadline</th>
        <th>Applications</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    
    {jobs.map(job=>{
                return(<tr>
                    <th>
                     
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={job.company_logo}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{job.title}</div>
                          <div className="text-sm opacity-50">{job.company}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                    {job.salaryRange.min.toLocaleString()} - {job.salaryRange.max.toLocaleString()} {job.salaryRange.currency.toUpperCase()}
                    </td>
                    <td>No Application Yet</td>
                    <td>{job.applicationDeadline}</td>
                    <td className=' '> <Link to={`/viewApplications/${job._id}`}><button className='btn flex gap-3'> {job.applicationCount}    . View  <FaEye /></button></Link></td>
                  
                    <th className='flex gap-2'>
                      <Link to={`/jobs/${job._id}`}><button className="btn text-blue-500 "><TbListDetails /></button></Link>
                      <button className="btn text-green-600 "><FaEdit /></button>
                      <button className="btn text-red-700 "><MdDelete /></button>
                    </th>
                  </tr>
                )
            })}
    </tbody>
  
  </table>
</div>
          
        </div>
    );
};

export default MyPostedJobs;