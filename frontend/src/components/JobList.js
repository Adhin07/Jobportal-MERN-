import React from 'react'

function JobList() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-xl font-bold text-gray-700 mb-4">Search Jobs</h2>
    <form  className="space-y-4">
      {/* Job Title */}
      <div>
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
        
          className="mt-1 block w-full p-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
          placeholder="Enter job title"
        />
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
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
      <div>
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
          className="mt-1 block w-full p-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
          placeholder="Enter company name"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-lg font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300"
        >
          Search
        </button>
      </div>
    </form>
  </div>
);
};

export default JobList
