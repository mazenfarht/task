import React from 'react'
import img1 from '../../../img/test.jpg';
import { NavLink } from 'react-router-dom';

export default function Exams() {
    return (
     <>
      <div className="d-flex flex-wrap justify-content-between p-3">
        <div className="cardDesign  ">
          <div className="card">
          <img src={img1} class="img-thumbnail" alt="" />
            <div className="card-body">
              <h4 className="card-title">exam 1</h4>
              <NavLink className="btn btn-success btn-block" to={"/userquiz"}>Go To Exam</NavLink>
            </div>
          </div>
        </div>
      </div>
  
     </>
    )
  }
  
  