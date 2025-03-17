import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        hr_phone,
        company_logo,
      } = job;
    
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };

    return (
        <div>
              <div className="mx-auto max-w-2xl p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-3">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="h-10 w-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-xl font-semibold text-indigo-700">{title}</h2>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
        <div>
          <span className="font-semibold text-gray-700">Location:</span> {location}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Job Type:</span> {jobType}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Category:</span> {category}
        </div>
        <div className="col-span-2">
          <span className="font-semibold text-gray-700">Deadline:</span> {formatDate(applicationDeadline)}
        </div>
        <div className="col-span-2">
          <span className="font-semibold text-gray-700">Salary:</span> {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
        </div>
      </div>

      <div className="mb-3">
        <h3 className="text-md font-semibold text-indigo-700 mb-1">Description</h3>
        <p className="text-gray-800 text-sm line-clamp-3">{description}</p>
      </div>

      <div className="mb-3">
        <h3 className="text-md font-semibold text-indigo-700 mb-1">Requirements</h3>
        <ul className="list-disc list-inside text-gray-800 text-sm">
          {requirements.slice(0, 3).map((req, index) => (
            <li key={index}>{req}</li>
          ))}
          {requirements.length > 3 && <li>...</li>}
        </ul>
      </div>

      <div className="mb-3">
        <h3 className="text-md font-semibold text-indigo-700 mb-1">Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-800 text-sm">
          {responsibilities.slice(0, 3).map((res, index) => (
            <li key={index}>{res}</li>
          ))}
          {responsibilities.length > 3 && <li>...</li>}
        </ul>
      </div>

      <div>
        <h3 className="text-md font-semibold text-indigo-700 mb-1">Contact HR</h3>
        <div className="text-sm">
          <p><span className="font-semibold text-gray-700">Name:</span> {hr_name}</p>
          <p><span className="font-semibold text-gray-700">Email:</span> {hr_email}</p>
          <p><span className="font-semibold text-gray-700">Phone:</span> {hr_phone}</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default JobDetails;