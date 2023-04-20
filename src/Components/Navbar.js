import React from 'react';
import './Navbar.css';


export default function Navbar() {
  return (
    <> 
    <div className='container'>
    <nav className="navbar navbar-expand-lg _2_1 ">
  <div className="container-fluid">
    <a className="navbar-brand _2_1_1" href="/">CineCouncellor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link _2_1_1" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link _2_1_1" href="/">Analyer Dashboard</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link _2_1_1" href="/">Recommendation</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link _2_1_1" href="/">Database</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link _2_1_1" href="/">Ranking</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link _2_1_1" href="/">Feedback</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link _2_1_1" href="/">About Us</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle _2_1_1" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
