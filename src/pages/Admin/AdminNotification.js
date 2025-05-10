import React, { Component } from 'react'
import Header from '../../components/Admin/HeaderAdmin';
import Nav from '../../components/Admin/NavAdmin';
import Notification from '../../components/Admin/Notification'; 
import Pagination from '../../components/Admin/Pagination';
export default class AdminNotification extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Nav /> 
        <div style={{ marginTop: '20px' }}>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </div>
        <Pagination />
      </div>
    )
  }
}
