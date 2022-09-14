import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">W T F</a>
    <div className=""  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <button className='btn btn-danger login'>Login</button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Fitness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nutrition</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gyms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >Become WTF Partner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-danger" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
      </nav>
    </div>
  )
}

export default Navbar