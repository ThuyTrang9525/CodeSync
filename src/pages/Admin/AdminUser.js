import React, { Component } from 'react'
import Header from '../../components/Admin/AdminHeader';
import Nav from '../../components/Admin/AdminNav';


export default class AdminUser extends Component {
  render() {
    return (
        <div className='container'>
            <Header />
            <Nav />
        </div>
    )
  }
}
