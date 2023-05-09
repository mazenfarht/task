import React from 'react';
import './UserHome.css'; 

import { NavLink } from "react-router-dom";
import Unavbar from '../Unavbar/Unavbar';


function UserHome() {
  return (
    <div>
      <Unavbar/>

      <header className="header">
       
        <div className="header-image" style={{backgroundImage: "url('https://www.ivywise.com/cdn-cgi/image/fit=scale-down,quality=50,width=1200/https://www.ivywise.com/core/wp-content/uploads/2018/11/5-Tips-to-Help-You-Ace-Your-Final-or-Mid-Term-Exams.jpeg')"
         , backgroundSize: "cover",
backgroundPosition: "center"  , backgroundRepeat: "no-repeat"}}/>
       
      </header>
      <main className="main">
    <section>
  <h2>Instructions</h2>
  <p>Please read the instructions carefully before starting the exam.</p>
  <ul>
    <li>There are 5 multiple choice questions.</li>
    <li>Each question carries 1 marks.</li>
    <li>There is no negative marking.</li>
    <li>Click the "Start Exam" button to begin.</li>
  </ul>
  
  <div className="btn btn-primary">
      <NavLink to="/userexam" className="btn btn-primary ">Start Exam</NavLink>
    </div>
</section>

        
</main>

    </div>
  );
}

export default  UserHome;


