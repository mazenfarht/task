import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Ufooter from '../User/Ufooter/Ufooter'
import Aunavbar from '../User/Aunavbar/Aunavbar'

export default class ULayout extends Component {
  render() {
    return (
      <>    
        <Aunavbar/>
        <Outlet/>
        <Ufooter/>
      </>
    )
  }
}
