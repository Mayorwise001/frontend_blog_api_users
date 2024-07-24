
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about';

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
