import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {

    const {user} = useAuth();
    const [applications, setApplications] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setApplications(data))
    },[user.email])
    return (
<div className=' mb-40 lg:max-w-7xl mx-auto'>
  <h1 className="text-3xl font-bold text-center text-gray-900 my-5">My Applications {applications.length}</h1>

  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Company</th>
        <th>Position</th>
        <th>Salary</th>
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
        <td>{application.company}</td>
        <td>{application.title}</td>
        <td>{application.salaryRange.min} - {application.salaryRange.max} {application.salaryRange.currency}</td>
        <td>{application.location}</td>
        <td>{application.status}</td>
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

export default MyApplications;