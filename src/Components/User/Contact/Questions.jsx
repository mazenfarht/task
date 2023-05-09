import React, { Component } from 'react'




      export default function Questions() {
        return (
          <>
          <div className="question ">
        <audio src="audio1.mp3" controls />
        <p className="question-text ">What is the main topic of the conversation?</p>
        <ul className="choices">
          <li>
            <label>
              <input type="radio" name="choice" defaultValue={0} />
              A. Choice 1
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="choice" defaultValue={1} />
              B. Choice 2
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="choice" defaultValue={2} />
              C. Choice 3
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="choice" defaultValue={3} />
              D. Choice 4
            </label>
          </li>
        </ul>
      </div>
            
          </>
        )
      }
