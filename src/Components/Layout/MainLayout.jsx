import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Admin/Footer/Footer';
import Navbar from '../../Components/Admin/Navbar/Navbar'


export default class Mainlayout extends Component {
  render() {
    return (
      <>
       
        <Navbar/>
       <Outlet/>      
      </>
    )
  }
}
