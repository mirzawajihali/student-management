import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {_id, description, title, company, company_logo, location, jobType, salaryRange, applicationDeadline, requirements, hr_name} = job;

    return (
        <div>
        <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col h-[600px]">
          <div className="p-6 flex-grow">
            <div className="flex items-center mb-4">
              <img src={company_logo} alt={company} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-[#384959] text-xl font-bold">{title}</h3> {/* Changed title color */}
                <p className="text-[#384959]">{company}</p> {/* Changed company color */}
              </div>
            </div>
            <p className="text-[#384959] mb-4 line-clamp-3"> {/* Changed description color */}
              {description}
            </p>
            <div className="space-y-2">
              <p className="text-[#384959]"> {/* Changed location color */}
                <span className="font-semibold text-[#88BDF2]">Location:</span> {location} {/* changed label color */}
              </p>
              <p className="text-[#384959]"> {/* Changed jobtype color */}
                <span className="font-semibold text-[#88BDF2]">Job Type:</span> {jobType} {/* changed label color */}
              </p>
              <p className="text-[#384959]"> {/* changed salary color */}
                <span className="font-semibold text-[#88BDF2]">Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency} {/* changed label color */}
              </p>
              <p className="text-[#384959]"> {/* changed deadline color */}
                <span className="font-semibold text-[#88BDF2]">Deadline:</span> {applicationDeadline} {/* changed label color */}
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-[#88BDF2]">Requirements:</h4> {/* changed requirement color */}
              <ul className="list-disc list-inside text-[#384959]"> {/* changed requirement list color */}
                {requirements.map((req, i) => (
                  <li key={i} className="line-clamp-1">{req}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link to={`/jobs/${_id}`}><button className="bg-[#384959] hover:bg-[#6a99ce] text-white font-bold py-2 px-4 rounded transition-colors"> {/* Changed button color and hover color */}
                Apply Now
              </button></Link>
              <p className="text-sm text-[#384959]">Posted by: {hr_name}</p> {/* changed posted by color */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobCard;