import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { useNavigate } from "react-router-dom";

function JobList() {
  const navigate = useNavigate();
  const [viewData, setViewData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [query, setQuery] = useState(""); 

  const handleApply = async (job) => {
    const response = await fetch(`${SummaryApi.apply_job.url}?jobId=${job._id}`, {
      method: SummaryApi.apply_job.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jobData = await response.json();

    if (jobData.success) {
      navigate(`/viewJobDetails/${job._id}`, { state: { job } });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    const searchValue = query.toLowerCase();

    const filtered = viewData.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchValue) ||
        job.companyName.toLowerCase().includes(searchValue) ||
        job.companyLocation.toLowerCase().includes(searchValue)
    );

    setFilteredData(filtered);
  };

  const fetchData = async () => {
    const response = await fetch(SummaryApi.all_job.url, {
      method: SummaryApi.all_job.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jobData = await response.json();
    setViewData(jobData.data);
    setFilteredData(jobData.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Search Jobs</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col md:flex-row w-full gap-4">

          {/* Job Title */}

          <div className="flex-1 ">
            <input
              type="text"
              id="query"
              name="query"
              className="mt-1 w-1/2  p-2  border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter job title, company name, or location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-20 py-2 md:w-auto bg-purple-500 text-white  rounded-lg font-medium hover:bg-purple-700 focus:ring-4"
          >
            Search
          </button>
        </div>
      </form>

      {/* Job Listings Table */}
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="min-w-full border-2 rounded-lg">
            <thead className="border-2 border-black bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-xs md:text-sm">Job Title</th>
                <th className="px-4 py-2 text-xs md:text-sm">Company Name</th>
                <th className="px-4 py-2 text-xs md:text-sm">Salary</th>
                <th className="px-4 py-2 text-xs md:text-sm">Location</th>
                <th className="px-4 py-2 text-xs md:text-sm">End Date</th>
                <th className="px-4 py-2 text-xs md:text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((job) => (
                  <tr key={job._id} className="border">
                    <td className="px-2 py-1 text-xs md:text-sm">{job.jobTitle}</td>
                    <td className="px-2 py-1 text-xs md:text-sm">{job.companyName}</td>
                    <td className="px-2 py-1 text-xs md:text-sm">{job.salary}</td>
                    <td className="px-2 py-1 text-xs md:text-sm">{job.companyLocation}</td>
                    <td className="px-2 py-1 text-xs md:text-sm">
                      {new Date(job.endDate).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm">
                      <button
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
                        onClick={() => handleApply(job)}
                      >
                        View & Apply
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center px-4 py-2">
                    No job list found
                  </td>
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
