import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
        <form  className='w-full p-6'>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="Name"
                                id="name"
                                placeholder="name"
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
                                type="text"
                                name="photo"
                                id="photo"
                                placeholder="Photo"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="NA"
                            />
                            <label
                                htmlFor="photo"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Photo URL
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
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
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                required
                            />
                            <label
                                htmlFor="password"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Password
                            </label>
                        </div>
                        <div className="my-6 ">
                            <button
                                type="submit"
                                className="w-full font-bold rounded-md bg-[#384959] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:opacity-90 transition-opacity"
                            >
                                Register
                            </button>
                            
                            
                           
                        </div>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to='/login' className="text-[#3C2A21] font-medium hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </form>
      </section>
    </div>
  );
};

export default JobDetails;