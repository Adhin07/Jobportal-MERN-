import React, { useState } from "react";
import SummaryApi from "../common";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function JobApplicationEdit() {

  const location = useLocation();
  const { job } = location.state || {};
  const navigate=useNavigate()

  const params=useParams()

  
  const [formData, setFormData] = useState({
    jobId:job._id,
    batchNumber: job.batchNumber,
    jobTitle: job.jobTitle,
    companyName:job.companyName,
    endDate: job.endDate,
    salary: job.salary,
    experience: job.experience,
    companyLocation: job.companyLocation,
    employerType: job.employerType,
    skills: job.skills,
    qualification: job.qualification,
    jobDescription: job.jobDescription,
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleEdit=async(e)=>{
    e.preventDefault()
    const response=await fetch(SummaryApi.Update_Job_Application.url,
      {
        method:SummaryApi.Update_Job_Application.method,
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      },
      
    )

    const updatedData=await response.json()

    if(updatedData.success){
      toast.success(updatedData.message)
      navigate('/employer-dashboard')
    }
  }

  const handleDelete = async() => {
    
    const response=await fetch(`${SummaryApi.Delete_job_application.url}?jobId=${job._id}`,{
      method:SummaryApi.Delete_job_application.method,
      credentials:"include",
      headers:
      {
        "Content-Type":"application/json"
      },
      params
    })

    const deleteData=await response.json()

    if(deleteData.success){
      toast.error(deleteData.message)
      navigate('/employer-dashboard')
    }

  }



  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto p-8 bg-white border rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-blue-500 text-center mb-8">
          Edit Job Application
        </h1>

        {/* Form to edit job application */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Batch Number */}
            <div className="space-y-2">
              <label
                htmlFor="batchNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Batch Number
              </label>
              <input
                type="text"
                id="batchNumber"
                name="batchNumber"
                value={formData.batchNumber}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
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

            {/* Company Name */}
            <div className="space-y-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
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

            {/* End Date */}
            <div className="space-y-2">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={new Date(formData.endDate).toISOString().split("T")[0]} // Format to YYYY-MM-DD
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Salary */}
            <div className="space-y-2">
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700"
              >
                Salary (per month)
              </label>
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

            {/* Experience */}
            <div className="space-y-2">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700"
              >
                Experience (in years)
              </label>
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

            {/* Company Location */}
            <div className="space-y-2">
              <label
                htmlFor="companyLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Company Location
              </label>
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

            {/* Employer Type */}
            <div className="space-y-2">
              <label
                htmlFor="employerType"
                className="block text-sm font-medium text-gray-700"
              >
                Employer Type
              </label>
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

            {/* Skills */}
            <div className="space-y-2">
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700"
              >
                Skills 
              </label>
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

            {/* Qualification */}
            <div className="space-y-2">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification
              </label>
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

            {/* Job Description */}
            <div className="space-y-2">
              <label
                htmlFor="jobDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8 justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handleEdit}>
              Save Changes
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationEdit;
