import React from 'react';
import logo from './images/blakeyboo.jpg';
import './App.css';
// web routing
import { BrowserRouter as Router, Route, Link, Routes } from'react-router-dom';
import NotFound from './pages/NotFound'


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
                        <li><Link to="/Projects">Projects</Link></li>
                        <li>
                        <Link to={{pathname: "https://github.com/blakevd"}} target="_blank">Github</Link>
                        </li>
                        <li><Link href="#">Contact & Github</Link></li>
                    </ul>
                </nav>
            </header>
          </Router>
          <main>
              <Routes>
                
                <Route path="*" element={<NotFound/>} />
              </Routes>
          </main>
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
