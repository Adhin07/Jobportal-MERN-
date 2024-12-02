const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  companyLocation: {
    type: String,
    required: true,
  },
  employerType: {
    type: String,
    enum: ['full-time', 'part-time'],
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
}, 
{ 
    timestamps: true

});

const JobApplicationModel = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplicationModel;
