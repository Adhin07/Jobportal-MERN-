import React, { useEffect, useState } from "react";
import SummaryApi from "../common/index";
import { toast } from "react-toastify";

function ViewCandidates() {
  const [candidateData, setCandidateData] = useState([]);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [status, setStatus] = useState("");

  const handleUserData = async () => {
    const response = await fetch(SummaryApi.View_candidates.url, {
      method: SummaryApi.View_candidates.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const viewData = await response.json();
    const data = viewData.data || [];
    setCandidateData(data);
  };

  useEffect(() => {
    handleUserData();
  }, []);

  const openModal = async (candidate) => {
    setSelectedCandidate(candidate);
    setIsResumeModalOpen(true);

    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeModal = () => {
    setIsResumeModalOpen(false);
    setSelectedCandidate(null);
    setStatus("");
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  const handleDownloadResume = async () => {
    const candidate_id = selectedCandidate._id;

    const response = await fetch(
      `${SummaryApi.resumeDownload.url}/${candidate_id}`,
      {
        method: SummaryApi.resumeDownload.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const blob = await response.blob();

      // Extract filename from Content-Disposition header (if set by the server)
      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = "resume.pdf"; // Default filename

      if (contentDisposition && contentDisposition.includes("attachment")) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match && match[1]) {
          filename = match[1];
        }
      }

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename; // Use extracted filename
      link.click();

      console.log("Download initiated");
    } else {
      console.error("Failed to download resume");
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSaveStatus = async () => {
    const Candidates = { ...selectedCandidate, status: status };

    const response = await fetch(SummaryApi.status_resume.url, {
      method: SummaryApi.status_resume.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Candidates),
    });

    const dataApi = await response.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      closeModal();
    }
    if (dataApi.error) {
      toast.error(dataApi.message);
      closeModal();
    }
  };

  return (
    <div>
      <div className="container shadow-lg">
        <h1 className="text-blue-500 font-semibold text-3xl py-7">
          Applied Candidates Details
        </h1>
        <div className="mx-16">
          <table className="border-2 w-full">
            <thead className="text-white bg-black">
              <tr className="border-2 border-black">
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Job Batch No</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="border-2 border-gray-400">
              {candidateData && candidateData.length > 0 ? (
                candidateData.map((candidate, index) => (
                  <tr key={index}>
                    <td className="border-2 border-black">{candidate.name}</td>
                    <td className="border-2 border-black">{candidate.email}</td>
                    <td className="border-2 border-black">
                      {candidate.mobile || "Not Available"}
                    </td>
                    <td className="border-2 border-black">
                      {candidate.batchData}
                    </td>
                    <td>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded m-1"
                        onClick={() => openModal(candidate)}
                      >
                        Action
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No Candidates Applied Yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Resume Download and Status Update */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-800"
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Candidate Management
            </h2>

            {/* Resume Download Section */}
            <div className="mb-4">
              <p className="text-gray-700">Download the candidate's resume:</p>
              <button
                onClick={handleDownloadResume}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Download Resume
              </button>
            </div>

            {/* Status Update Section */}
            <div>
              <label htmlFor="status" className="block text-gray-700 mb-2">
                Update Candidate Status:
              </label>
              <select
                id="status"
                value={status}
                onChange={handleStatusChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select Status</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
                <option value="hired">Hired</option>
                <option value="on-hold">On Hold</option>
              </select>
            </div>

            {/* Save or Close Actions */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveStatus}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCandidates;
