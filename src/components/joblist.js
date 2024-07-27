// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Navbar from './navbar'

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get('https://blogapi2-pxnf.onrender.com/api/published-jobs2');
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <>
//     <Navbar/>
//     <div className="job-list-container">
//       <h1 className="job-list-title">Published Jobs</h1>
//       <div className="job-cards">
//         {jobs.map((job) => (
//           <div className="job-card" key={job.jobid}>
//             <h2 className="job-title">{job.jobTitle}</h2>
//             <p className="job-description">Description: {job.jobDescription.length > 10 ? ` ${job.jobDescription.substring(0, 25)}...` : job.jobDescription}</p>
//             <p className="job-details">Posted by: {job.postedBy}</p>
//             <p className="job-details">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
//             <Link to={`/job-details/${job.jobid}`} className="view-details-link">View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default JobList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://blogapi2-pxnf.onrender.com/api/published-jobs2');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://blogapi2-pxnf.onrender.com/api/all-categories2');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchJobs();
    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  return (
    <>
      <Navbar />
      <div className="job-list-container">
        <h1 className="job-list-title">Published Jobs</h1>
        <div className="filter-container">
          <label htmlFor="category">Filter by Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="job-cards">
          {filteredJobs.map((job) => (
            <div className="job-card" key={job.jobid}>
              <h2 className="job-title">{job.jobTitle}</h2>
              <p className="job-description">
                Description:{' '}
                {job.jobDescription.length > 10
                  ? `${job.jobDescription.substring(0, 25)}...`
                  : job.jobDescription}
              </p>
              <p className="job-details">Posted by: {job.postedBy}</p>
              <p className="job-details">Category: {job.category}</p>
              <p className="job-details">
                Deadline: {new Date(job.deadline).toLocaleDateString()}
              </p>
              <Link to={`/job-details/${job.jobid}`} className="view-details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobList;
