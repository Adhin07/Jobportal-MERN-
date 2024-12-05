import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";

function ViewJobApplication() {
  const location = useLocation();
  const { job } = location.state || {}; // Default to an empty object if no job data is found



  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);  // Store the selected file
    }
  };

  // Submit file to the backend
  const submitImage = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    
    Object.keys(job).forEach(key => {
      formData.append(`job[${key}]`, job[key]);
  });
    

      const response = await fetch(SummaryApi.resume_upload.url, {
        method: SummaryApi.resume_upload.method,
        credentials: "include",
        body:formData, 
      })
      

      const resumData = await response.json();

      if (resumData.success) {
        toast.success(resumData.message);
        setSelectedFile(null)
        closeModal();
      } else {
        toast.error(resumData.message);
      }
    
    closeModal(); // Close the modal after the upload is complete
  };

  return (
    <div>
      <div className="w-fit mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-semibold text-blue-500">Job Application Details</h1>
          <div className="space-y-4 flex flex-col items-start">
          <p className="text-lg text-gray-700">
              <strong>Company Name:</strong> {job?.jobTitle}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Company Name:</strong> {job?.companyName}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Location:</strong> {job?.companyLocation}
            </p>
            <p className="text-lg text-gray-700">
              <strong>End Date:</strong> {new Date(job.endDate).toLocaleDateString("en-GB")}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Salary:</strong> {job?.salary}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Experience Required:</strong> {job?.experience}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Employer Type:</strong> {job?.employerType}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Skills Required:</strong> {job?.skills}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Qualifications:</strong> {job?.qualification}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Job Description:</strong> {job?.jobDescription}
            </p>

            {/* Button to trigger file upload modal */}
            <button
              onClick={openModal}
              className="bg-purple-500 text-white hover:bg-purple-700 rounded-md p-3"
            >
              Upload Resume
            </button>
          </div>
        </div>
      </div>

      {/* Modal for file upload */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <form className="formStyle" onSubmit={submitImage} enctype="multipart/form-data">
              <h2 className="text-xl font-semibold text-blue-500 mb-4">Upload Your Resume</h2>
              <input
                type="file"
                accept=".pdf,.docx"
                name="avatar"
                onChange={handleFileChange}
                className="block w-full mb-4 border border-gray-300 p-2 cursor-pointer"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-200 text-black px-4 py-2 hover:bg-gray-400 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewJobApplication;
