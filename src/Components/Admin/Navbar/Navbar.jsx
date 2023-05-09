import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand " style={{color: "white", fontSize:"50px" }} href="#">Admin</a>
            
            <div className="justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-0 mb-lg-10">                 
                <li className="nav-item mx-0 mx-lg-1">
                <NavLink  className="btn btn-outline-primary "  style={{color: "white",fontSize:"23px"}} to={"/logout"}>Logout</NavLink>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                <NavLink  className="btn btn-outline-primary "  style={{color: "white",fontSize:"23px"}} to={"/update"}>Updateuser</NavLink>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                <NavLink  className="btn btn-outline-primary "  style={{color: "white",fontSize:"23px"}} to={"/myprofile"}>Myprofile</NavLink>
                </li>
              </ul>


            </div>
          </div>
        </nav>


            </>
          )
        }
