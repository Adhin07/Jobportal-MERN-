import React, { useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const JobApplication = () => {

  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    endDate: '',
    salary: '',
    experience: '',
    companyLocation: '',
    employerType: 'full-time',
    skills: '',
    qualification: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const fetchData=await fetch(SummaryApi.job_application.url,{
        method:SummaryApi.job_application.method,
        credentials:"include",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(formData)
        
    })
    
    const dataApi=await fetchData.json()

    if(dataApi.success){
        toast.success(dataApi.message)
        navigate("/employer-dashboard")
    }

    if(dataApi.error){
        toast.error(dataApi.message)
    }
   
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Job Application</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary (per month)</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-700">Company Location</label>
            <input
              type="text"
              id="companyLocation"
              name="companyLocation"
              value={formData.companyLocation}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="employerType" className="block text-sm font-medium text-gray-700">Employer Type</label>
            <select
              id="employerType"
              name="employerType"
              value={formData.employerType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
            </select>
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
