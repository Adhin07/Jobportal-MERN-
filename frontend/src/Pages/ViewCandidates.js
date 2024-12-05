import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/index'

function ViewCandidates() { 

  const [CandidateData,setCandidateDate]=useState([])

  const handleUserData=async()=>{
      const userData=await fetch(SummaryApi.View_candidates.url,{
        method:SummaryApi.View_candidates.method,
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        }
      })

      const viewData=await userData.json()
        const data=viewData.data
        setCandidateDate([data])

  }

  useEffect(()=>{
    handleUserData()
  },[])


  return (
    <div>
       <div className="container  shadow-lg">
      <h1 className="text-blue-500 font-semibold text-3xl py-7">Applied Candidates Details</h1>
      <div className="mx-16">
        <table className="border-2 w-full">
          <thead className='text-white bg-black' >
            <tr className="border-2 border-black">
              <th>Name</th>
              <th >Email</th>
              <th >Contact</th>
              <th>JOB Batch.No</th>
              <th >Status</th>
            </tr>
          </thead>
          <tbody className="border-2 border-gray-400">
          {
           CandidateData.length > 0 ? (
           CandidateData.map((data,index) => (
      <tr key={index}>
        <td className="border-2 border-black">{data?._doc?.name}</td>  {/* Accessing name from _doc */}
        <td className="border-2 border-black">{data?._doc?.email}</td> {/* Accessing email from _doc */}
        <td className="border-2 border-black">{data?._doc?.mobile || "Contact number not Available"}</td> {/* Accessing mobile from _doc */}
        <td className="border-2 border-black">{data?.batchData.replace(/"/g, '')}</td> {/* Cleaning batchData by removing quotes */}
        <td>
          <button className='bg-green-500 hover:bg-green-700 text-white px-2 p-1 rounded m-1 '>Action</button>
        </td>  {/* Add action button */}
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">No Candidates Applied yet</td> {/* Adjusted colSpan to match the number of columns */}
    </tr>
  )
}

          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ViewCandidates
