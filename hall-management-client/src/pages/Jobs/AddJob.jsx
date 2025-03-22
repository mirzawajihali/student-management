import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData)
        const { min, max, currency, ...newJob } = initialData;
        console.log(min, max, currency, newJob)
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);

        fetch('https://student-management-server-mu.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has been added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left text-gray-800">Post a New Job</h2>
        <form onSubmit={handleAddJob} className="card-body p-8 rounded-lg shadow-lg bg-white border border-gray-100">
          {/* Job title */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* job location */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Job Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* job Type */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
              Job Type
            </label>
            <select
              defaultValue="Pick a Job type"
              className="select select-bordered h-12  w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
            >
              <option disabled>Pick a Job type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobField">
              Job Field
            </label>
            <select
              defaultValue="Pick a Job Field"
              className="select select-bordered h-12 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
          {/* salary range */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="form-control">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="min">
                Salary Range
              </label>
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="form-control">
              <select
                defaultValue="Currency"
                name="currency"
                className="select select-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* Job Description */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Job Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              placeholder="Job Description"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
          {/* Company Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* requirements */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
              Job Requirements
            </label>
            <textarea
              className="textarea textarea-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              placeholder="Put each requirement in a new line"
              name="requirements"
              rows="4"
              required
            ></textarea>
          </div>
          {/* responsibilities */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibilities">
              Job Responsibilities
            </label>
            <textarea
              className="textarea textarea-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              placeholder="Write each responsibility in a new line"
              name="responsibilities"
              rows="4"
              required
            ></textarea>
          </div>
          {/* HR Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hr_name">
              HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* HR Email */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hr_email">
              HR Email
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* application Deadline */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationDeadline">
              Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Deadline"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* Company Logo URL */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_logo">
              Company Logo URL
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              required
            />
          </div>
          {/* submit button */}
          <div className="mt-8">
            <button className="btn btn-primary w-full p-3 bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddJob;