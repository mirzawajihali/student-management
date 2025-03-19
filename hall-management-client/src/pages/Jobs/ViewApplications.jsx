import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData();

    return (
        
<div className=' mb-40 lg:max-w-7xl mx-auto'>
  <h1 className="text-3xl font-bold text-center text-gray-900 my-5">My Applications {applications.length}</h1>

  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
            
            <th>Location</th>
            <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        applications.map(application =>{
            return(
                <tr>
        <th>1</th>
        <td>{application.name}</td>
        <td>{application.email}</td>
        <td>{application.phone}</td>
       
        <td>{application.department} {application.roll}</td>
            <td className='flex gap-2 items-center'>
                <Link className='text-blue-500 text-2xl ' to={application.linkedIn} target='_blank'><FaLinkedin /></Link>
       <Link className='text-black text-2xl ' to={application.github} target='_blank'><FaGithub /></Link>
         <Link className='btn' to={application.resume} target='_blank'>Resume</Link>
         </td>
      </tr>
            )
        })
     }
      
    </tbody>
  </table>
</div>
</div>
    );
};

export default ViewApplications;