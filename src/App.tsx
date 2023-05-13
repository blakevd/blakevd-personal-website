import React from 'react';
import logo from './images/blakeyboo.jpg';
import './App.css';
// web routing
import { BrowserRouter as Router, Route, Link, Routes } from'react-router-dom';
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="wrapper">
      <Router>
          <header>
              <a href="#"><img src={logo} width="100" height="auto"  alt="Company Logo" /></a>
              <nav>
                  <ul>
                      <li><Link to="/" className="active">About</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      <li>
                        <Link to={{pathname: "https://github.com/blakevd"}} target="_blank">Github</Link>
                      </li>
                      <li><Link to="/contact">Contact</Link></li>
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
/*
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
                */
export default App;
