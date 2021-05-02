import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import UsersList from './UsersList'
import Footer from './layout/Footer'




export default class HomePage extends Component {


  render() {
   console.log(this.props, "props at homepage")
    return (
      <div>
        <Navbar/>
        <UsersList {...this.props}/>
        <Footer/>      
      </div>
    )
  }
}