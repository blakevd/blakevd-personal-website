import React from 'react';
import logo from './images/home-icon.svg';
import './App.css';
// web routing
import { BrowserRouter as Router, Route, Routes, NavLink } from'react-router-dom';
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import axios from 'axios';

// state management
import { useState } from 'react';

function App() {
  const [repos, getRepos] = useState<any>([]);

  // GET request github for my page
  const handleProj = async () => {
    try{
      const result = await axios(`https://api.github.com/users/blakevd/repos`);
      getRepos(result);
      console.log(result);
    }
    catch(err){
      console.log(err);
    }
  }

  handleProj() // call once to handle page refresh hack
  return (
    <div>
      <div className="overlay"></div>
      <div className="wrapper">
      <Router>
          <header>
            <NavLink to="/">
              <img src={logo} width="40" height="auto" alt="Blake" />
            </NavLink>
            <nav>
                <ul>
                    <li>
                      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={handleProj}>Projects</NavLink>
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
                <Route path="/projects" element={<Projects repos={repos.data}/>} />
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
