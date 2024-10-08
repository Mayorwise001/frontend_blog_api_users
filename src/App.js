

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/joblist';
import JobDetails from './components/jobdetails';

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        <Route path='/' element={<JobList/>}/>

        <Route path="/job-details/:id" element={<JobDetails/>}/> {/* Add route for job details */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
