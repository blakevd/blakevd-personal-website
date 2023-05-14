import React from 'react';
import logo from './images/home-icon.svg';
import './App.css';
// web routing
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from'react-router-dom';
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'

// state management
import { useState } from 'react';

function App() {
  const [currPage, setCurrPage] = useState<string>("About");
  return (
    <div>
      <div className="overlay"></div>
      <div className="wrapper">
      <Router>
          <header>
              <a href="#"><img src={logo} width="40" height="auto" alt="Blake Van Dyken" /></a>
              <nav>
                  <ul>
                      <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                      </li>
                  </ul>
              </nav>
          </header>

          <main>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
          </main>
        </Router>
      </div>
    </div> 
  );
}

export default App;
