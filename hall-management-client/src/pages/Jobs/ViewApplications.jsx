import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
    const data = {
      status: e.target.value
    }

    fetch(`https://student-management-server-mu.vercel.app/job-applications/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success',
          text: 'Status updated successfully',
          icon: 'success'
        })
      }
    }
    )
    }


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
            
            <th>Dept and Roll</th>
            <th>Status</th>
            <th>Links</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        applications.map(application =>{
            return(
                <tr key={application._id}>
        <th>1</th>
        <td>{application.name}</td>
        <td>{application.email}</td>
        <td>{application.phone}</td>
        <td>{application.department} {application.roll}</td>


        <td><select onChange={(e)=>handleStatusUpdate(e, application._id)} defaultValue={application.status} className="select select-sm">
  <option disabled={true} >Change Status</option>
  <option>Under Review</option>
  <option>Selected</option>
  <option>Rejected</option>
</select></td>
       
       
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