import React from 'react'
import img1 from '../../../img/deaf.jpg';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
   <>
    <div className="container">
    <img src= {img1} alt />
    <NavLink className="btn btn-outline-primary float-right btn-lg" to="/exam">Exam Page</NavLink>    
    </div> 
   </>
  )
}