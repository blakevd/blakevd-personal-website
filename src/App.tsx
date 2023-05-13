import React from 'react';
import logo from './images/blakeyboo.jpg';
import { BrowserRouter as Router, Route, Link } from'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="wrapper">
          <header>
              <a href="#"><img src={logo} width="100" height="auto"  alt="Company Logo" /></a>
              <nav>
                  <ul>
                      <li><a href="#" className="active">About Me</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="https://github.com/blakevd">Github</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </nav>
          </header>

          <main>
              <div className="left-col">
                  <h1>Quality Apparel without the price tag</h1>
                  <p className="subhead">this is a paragraph tag</p>
                  <div className="cta-buttons">
                      <a href="#" className="primary-cta">Button Text</a>
                      <a href="#" className="second-cta">
                          <span>Second Button Text</span>
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                      </a>
                  </div>
                  <div className="news">
                      <p className="employees">50K Employees!</p>
                      <p className="details">here are lots of details <strong>loser</strong></p>
                  </div>
              </div>
              <div className="right-col">
                  <div className="card card1">
                      <div className="card-details">
                          <div>
                              <a href="#" className="product-title">Sports</a>
                              <p>Running Shoes</p>
                          </div>
                          <p className="product-price">$8888</p>
                      </div>
                  </div>

                  <div className="card card2">
                      <div className="card-details">
                          <div>
                              <a href="#" className="product-title">Sports</a>
                              <p>Running Shoes</p>
                          </div>
                          <p className="product-price">$8888</p>
                      </div>
                  </div>

                  <div className="card card3">
                      <div className="card-details">
                          <div>
                              <a href="#" className="product-title">Sports</a>
                              <p>Running Shoes</p>
                          </div>
                          <p className="product-price">$8888</p>
                      </div>
                  </div>
              </div>
          </main>
      </div>
    </div> 
  );
}

export default App;
