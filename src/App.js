import './App.css';
import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import BottomNav from './components/BottomNav';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
            <Router>
        <div className="bucket-app">
          <Navbar/>
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<AboutMe />}
              />
              <Route 
                path="/projects/" 
                element={<Projects />}
              />
            </Routes>
          </div>
          <BottomNav/>
        </div>
      </Router>
    </div>

  );
}

export default App;
