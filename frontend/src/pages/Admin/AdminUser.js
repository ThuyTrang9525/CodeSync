import React, { Component } from 'react'
import Header from '../../components/Admin/HeaderAdmin';
import Nav from '../../components/Admin/NavAdmin';


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
