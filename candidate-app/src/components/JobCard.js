// src/components/JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Description: {job.description}</p>
      <p>Experience Required: {job.experience}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
