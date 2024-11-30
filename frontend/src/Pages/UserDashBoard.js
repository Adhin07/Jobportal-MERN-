import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserDashBoard() {

  const navigate=useNavigate()

  const handleApply=()=>{
      navigate("/joblist")
  }


  return (
    <div>
      <div className="min-h-screen bg-white">
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          



        {/* Profile Editing Section */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:bg-purple-100 transition-all">
            <h2 className="text-2xl font-bold text-purple-700">Profile Editing</h2>
            <p className="mt-2 text-gray-600">Update your personal and professional information.</p>
            <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800">
              Edit Profile
            </button>
          </div>

          {/* View Applied Jobs Section */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:bg-purple-100 transition-all">
            <h2 className="text-2xl font-bold text-purple-700">View Applied Jobs</h2>
            <p className="mt-2 text-gray-600">Check the jobs you’ve applied to and their status.</p>
            <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800">
              View Jobs
            </button>
          </div>

          

          {/* Apply Job Section */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:bg-purple-100 transition-all">
            <h2 className="text-2xl font-bold text-purple-700">Apply for Jobs</h2>
            <p className="mt-2 text-gray-600">Browse and apply for jobs that match your skills.</p>
            <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800" onClick={()=>handleApply()}>
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default UserDashBoard
