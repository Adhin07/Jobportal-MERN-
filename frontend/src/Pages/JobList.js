import React from 'react'

function JobList() {
  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Search Jobs</h2>
      <form className="space-y-4">
        {/* Row of Input Fields */}
        <div className="flex w-full gap-4">
          {/* Job Title */}
          <div className="flex-1">
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
          <div className="flex-1">
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
          <div className="flex-1">
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
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">SI.No</th>
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Company Name</th>
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Job Title</th>
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Qualification</th>
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Location</th>
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">End Date</th>
              <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
           
            {/* <tr> */}
              {/* <td className="px-4 py-2 border-b text-sm text-gray-700">1</td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">ABC Corp</td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">Software Developer</td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">BCA</td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">New York</td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">12/31/2024</td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Apply
                </button>
              </td>
            </tr>
           */}
          
           
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobList
