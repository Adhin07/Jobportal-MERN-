import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { useNavigate } from 'react-router-dom';

function JobList() {
  const navigate = useNavigate();
  const [viewData, setViewData] = useState([]);
  const [job, setJob] = useState(null);

  const handleApply = async (job) => {
    const response = await fetch(`${SummaryApi.apply_job.url}?jobId=${job._id}`, {
      method: SummaryApi.apply_job.method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const jobData = await response.json();
    setJob(jobData);

    console.log('JobData123', jobData);

    if (jobData.success) {
      navigate(`/viewJobDetails/${job._id}`, { state: { job: job } });
    }
  };

  const handleSubmit = async (e) => {
    const fetchData = await fetch(SummaryApi.all_job.url, {
      method: SummaryApi.all_job.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    });

    const jobData = await fetchData.json();
    setViewData(jobData.data);

    console.log('Jobdata', jobData);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Search Jobs</h2>
      <form className="space-y-4">
        <div className="flex w-full gap-4">
          {/* Job Title */}
          <div className="flex-1">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="mt-1 block w-full p-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter job title"
            />
          </div>

          {/* Location */}
          <div className="flex-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 block w-full p-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter location"
            />
          </div>

          {/* Company Name */}
          <div className="flex-1">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 block w-full p-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter company name"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-auto bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 focus:ring-4"
          >
            Search
          </button>
        </div>
      </form>

      {/* Job Listings Table */}
      <div className="mt-8">
        <div className="overflow-y-auto max-h-96"> {/* max-h-96 sets a limit for the visible area */}
          <table className="min-w-full bg-white border-2 border-separate border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Job Title</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Company Name</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Salary</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Experience</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Qualification</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Location</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">End Date</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Skills</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Job Description</th>
                <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="border border-black">
              {viewData.length > 0 ? (
                viewData.map((job) => (
                  <tr key={job._id}>
                    <td className="px-4 py-2 border-b truncate">{job.jobTitle}</td>
                    <td className="px-4 py-2 border-b truncate">{job.companyName}</td>
                    <td className="px-4 py-2 border-b truncate">{job.salary}</td>
                    <td className="px-4 py-2 border-b truncate">{job.experience}</td>
                    <td className="px-4 py-2 border-b truncate">{job.qualification}</td>
                    <td className="px-4 py-2 border-b truncate">{job.companyLocation}</td>
                    <td className="px-4 py-2 border-b truncate">{new Date(job.endDate).toLocaleDateString('en-GB')}</td>
                    <td className="px-4 py-2 border-b truncate">{job.skills}</td>
                    <td className="px-4 py-2 border-b truncate">{job.jobDescription}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700" onClick={() => handleApply(job)}>Apply</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center px-4 py-2">No job list found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobList;
