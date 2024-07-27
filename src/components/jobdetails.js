import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://blogapi2-pxnf.onrender.com/api/job-details2/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="job-details-container">
      <h1 className="job-details-title">Jobe title: {job.jobTitle}</h1>
      <p className="job-details-description">Jobe description:{job.jobDescription}</p>
      <p className="job-details-info"><strong>Posted by:</strong> {job.postedBy}</p>
      <p className="job-details-info"><strong>Category:</strong> {job.category}</p>
      <p className="job-details-info"><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
    </div>
    </>
  );
};

export default JobDetails;
