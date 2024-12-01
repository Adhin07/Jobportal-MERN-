// All imports must be at the top
import React, { useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';


// Your component code starts here
const EditProfile = (

) => {

  const dispatch=useDispatch()

  
  const [editData, setEditData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(true); // State to control visibility


  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!editData.name) newErrors.name = 'Name is required';
    if (!editData.email) newErrors.email = 'Email is required';
    if (!editData.password) newErrors.password = 'Password is required';
    if (editData.password !== editData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!editData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
    if (editData.mobileNumber && !/^\d{10}$/.test(editData.mobileNumber))
      newErrors.mobileNumber = 'Invalid mobile number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

  
      const dataResponse = await fetch(SummaryApi.Update_user.url, {
        method: SummaryApi.Update_user.method,
        credentials:"include",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(editData)
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    
  };

  const handleClose = () => {
    setIsVisible(false); // Hide the profile edit form
  };

  if (!isVisible) return null;


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg relative w-full">
      <button onClick={handleClose} className="absolute top-2 right-2 text-black hover:text-white p-2 rounded-full hover:bg-red-700">
        X
      </button>

      <h2 className="text-xl font-bold text-gray-700 mb-4">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700 flex">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email" className="flex text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={editData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="mobileNumber" className="flex text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={editData.mobileNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your mobile number"
          />
          {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
        </div>

        <div>
          <label htmlFor="password" className="flex text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={editData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="flex text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={editData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg font-medium hover:bg-blue-600 focus:ring-4"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
