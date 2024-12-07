import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditProfile from '../components/EditProfiel';
import SummaryApi from '../common';

function EmployerDashboard() {
  const [openEditProfiel, setOpenEditProfile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [jobData, setJobData] = useState();
  const navigate = useNavigate();

  const openModal = async () => {
    
    const response = await fetch(SummaryApi.view_Created_Job.url, {
      method: SummaryApi.view_Created_Job.method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const createdJob = await response.json();
    setData(createdJob.data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto'; // Enable scrolling
    setIsModalOpen(false);
  };

  const handleEditProfile = () => {
    setOpenEditProfile((prevState) => !prevState);
  };

  const handleViewCandidates = () => {
    navigate("/ViewappliedCandidates");
  };

  const handleEditApplication = async (job) => {
    const response = await fetch(`${SummaryApi.apply_job.url}?jobId=${job._id}`, {
      method: SummaryApi.apply_job.method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const jobData = await response.json();
    setJobData(jobData);
    if (jobData.success) {
      navigate(`/edit-Create-Job/${job._id}`, { state: { job: job } });
    }
  };

  const handleResponse=()=>{

  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Employer Dashboard</h1>
          <p className="mt-2 text-xl">Manage Job Applications and Profile</p>
        </div>
      </header>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Editing Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700">Profile Editing</h2>
            <p className="mt-2 text-gray-600">Update your personal and professional information.</p>
            <button
              onClick={handleEditProfile}
              className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200"
            >
              Edit Profile
            </button>
          </div>

          {openEditProfiel && <EditProfile />}

          {/* Create Job Application Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700">Create Job Application</h2>
            <p className="mt-2 text-gray-600">Create a new job application to hire top talent.</p>
            <Link to={'/job-application'}>
              <button className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200">
                Create Application
              </button>
            </Link>
          </div>

          {/* View Applied Candidates Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700">View Applied Candidates</h2>
            <p className="mt-2 text-gray-600">View and manage applications from candidates.</p>
            <button
              onClick={handleViewCandidates}
              className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200"
            >
              View Applications
            </button>
          </div>

          {/* Edit Job Application Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700">Edit Job Application</h2>
            <p className="mt-2 text-gray-600">Edit your existing job applications.</p>
            <button
              onClick={openModal}
              className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200"
            >
              View & Edit
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700">Give Status to Application </h2>
            <p className="mt-2 text-gray-600">Download student resume and give status</p>
            <button
              onClick={handleResponse}
              className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200"
            >
              Give Response
            </button>
          </div>

        </div>
      </div>

      {/* Modal for Editing Jobs */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl relative z-50 max-w-6xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-800"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-purple-700 text-white">
                <tr>
                  <th className="px-4 py-2 border-b">Job Title</th>
                  <th className="px-4 py-2 border-b">Company Name</th>
                  <th className="px-4 py-2 border-b">Salary</th>
                  <th className="px-4 py-2 border-b">Location</th>
                  <th className="px-4 py-2 border-b">End Date</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? (
                  data.map((job) => (
                    <tr key={job._id} className="border-b">
                      <td className="px-4 py-2">{job.jobTitle}</td>
                      <td className="px-4 py-2">{job.companyName}</td>
                      <td className="px-4 py-2">{job.salary}</td>
                      <td className="px-4 py-2">{job.companyLocation}</td>
                      <td className="px-4 py-2">{new Date(job.endDate).toLocaleDateString('en-GB')}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleEditApplication(job)}
                          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center px-4 py-2 text-gray-500">No job applications available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployerDashboard;
