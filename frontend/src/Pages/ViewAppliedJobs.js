import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const JobDetails = () => {
  const [jobData, setJobData] = useState([]); // State to store the fetched job data

  const appliedJob = async () => {
    const response = await fetch(SummaryApi.View_Applied_job.url, {
      method: SummaryApi.View_Applied_job.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setJobData(data.data); // Update the state with the fetched data
  };

  useEffect(() => {
    appliedJob();
  }, []);

  return (
    <div className="container w-full">
      <h1 className="text-blue-600 font-semibold text-3xl py-7">Applied Job Details</h1>
      <div className="mx-16">
        <table className="border-2 w-full">
          <thead>
            <tr className="border-2 border-black">
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="border-2 border-gray-400">
            {jobData.length > 0 ? (
              jobData.map((job,index) => (
                <tr key={index}>
                  <td>{job.jobTitle}</td>
                  <td>{job.companyName}</td>
                  <td>{job.salary}</td>
                  <td>{job.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No jobs applied yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetails;
