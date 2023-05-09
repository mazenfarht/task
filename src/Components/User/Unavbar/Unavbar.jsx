import React from 'react';
import { NavLink } from 'react-router-dom';



function Unavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-felx justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page"  to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/updateprofile">Update Profile</NavLink>
            <NavLink className="nav-link" to="/exams">Show History Exams</NavLink>
          </div>
          <div className="demo">
            <NavLink className="nav-link " to="/logout" style={{color: "white",fontSize:"23px"}}>Log Out</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Unavbar;