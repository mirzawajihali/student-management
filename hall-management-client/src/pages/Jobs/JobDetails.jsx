import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const JobDetails = () => {
  const {user}= useAuth();
  const job = useLoaderData();
  const {
    _id,
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

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  


  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const department = form.department.value;
    const roll = form.roll.value;
    const applyData = {
      jobId : _id,
      name,
      email,
      phone,
      linkedIn,
      github,
      resume,
      department,
      roll,
    }

    fetch('https://student-management-server-mu.vercel.app/job-applications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(applyData),
    })
    .then(res => res.json())
    .then(data => {
     if(data.insertedId){
       
      Swal.fire({
        title: "Success!",
        text: "Congratulations you succesfully applied for this job",
        imageUrl: "https://i.pinimg.com/736x/00/af/60/00af601b947285d31fa1ba13d6e89d78.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
       navigate('/myApplications');
     }
    })
  }




  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
      {/* Job Details Section */}
      <section className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="flex items-center mb-6">
          <img
            src={company_logo}
            alt={`${company} Logo`}
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 text-sm">{company}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-sm text-gray-500">Location</span>
            <p className="text-gray-900 font-medium">{location}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-sm text-gray-500">Job Type</span>
            <p className="text-gray-900 font-medium">{jobType}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-sm text-gray-500">Category</span>
            <p className="text-gray-900 font-medium">{category}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-sm text-gray-500">Deadline</span>
            <p className="text-gray-900 font-medium">{formatDate(applicationDeadline)}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
            <span className="text-sm text-gray-500">Salary</span>
            <p className="text-gray-900 font-medium">
              {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.slice(0, 3).map((req, index) => (
              <li key={index}>{req}</li>
            ))}
            {requirements.length > 3 && <li>...</li>}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {responsibilities.slice(0, 3).map((res, index) => (
              <li key={index}>{res}</li>
            ))}
            {responsibilities.length > 3 && <li>...</li>}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact HR</h3>
          <div className="text-gray-700">
            <p><span className="font-medium">Name:</span> {hr_name}</p>
            <p><span className="font-medium">Email:</span> {hr_email}</p>
            <p><span className="font-medium">Phone:</span> {hr_phone}</p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Apply for this Job</h2>
        <p className='text-center text-gray-500 mb-6'>Please ensure that all information provided is accurate and truthful. Providing false or misleading information is strictly prohibited and may result in legal action under applicable laws of Bangladesh. We reserve the right to take necessary steps, including pursuing legal remedies, to address any instances of fraud or misrepresentation</p>
        <form onSubmit={handleApply} className='w-full space-y-6 p-6'>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="Name"
                                id="name"
                                value={user?.displayName}
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Your Name
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={user?.email}
                                placeholder="Email Address"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Email Address
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                                required
                            />
                            <label
                                htmlFor="number"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Phone Number
                            </label>
                        </div>
                        <div className="relative mt-6">
  <select
    name="department" // Ensure this matches the key in handleApply
    id="department"
    className="mt-1 w-full border-b-2 border-gray-300 px-0 py-1 bg-transparent focus:border-gray-500 focus:outline-none appearance-none"
    required
  >
    <option value="" disabled>
      Select Department
    </option>
    <option value="EEE">EEE</option>
    <option value="CSE">CSE</option>
    <option value="ETE">ETE</option>
    <option value="ECE">ECE</option>
    <option value="CE">CE</option>
    <option value="URP">URP</option>
    <option value="Arch">Arch</option>
    <option value="BECM">BECM</option>
    <option value="ME">ME</option>
    <option value="IPE">IPE</option>
    <option value="GCE">GCE</option>
    <option value="MTE">MTE</option>
    <option value="MSE">MSE</option>
    <option value="ChE">ChE</option>
    <option value="Chem">Chem</option>
  </select>
  <label
    htmlFor="department"
    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
  >
    Department
  </label>
  {/* Dropdown arrow icon */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg
      className="w-4 h-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </div>
</div>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="roll"
                                id="roll"
                                placeholder="Roll Number"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                            />
                            <label
                                htmlFor="roll"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Roll Number
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="linkedIn"
                                id="linkedIn"
                                placeholder="LinkedIn Profile URL"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                            />
                            <label
                                htmlFor="linkedIn"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                LinkedIn Profile URL
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="github"
                                id="github"
                                placeholder="Github Profile URL"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                            />
                            <label
                                htmlFor="github"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Github Profile URL (Optional)
                            </label>
                        </div>
                       
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="resume"
                                id="resume"
                                placeholder="Upload Resume"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                            />
                            <label
                                htmlFor="resume"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Upload Resume URL
                            </label>
                        </div>
                       
                        <div className="my-6 ">
                            <button
                                type="submit"
                                className="w-full font-bold rounded-md bg-[#384959] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:opacity-90 transition-opacity"
                            >
                                Apply Now
                            </button>
                            
                            
                           
                        </div>
                        
                    </form>
      </section>
    </div>
  );
};

export default JobDetails;