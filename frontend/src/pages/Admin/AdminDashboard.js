import React, { Component } from 'react'
import Header from '../../Layout/Admin/HeaderAdmin';
import Nav from '../../Layout/Admin/NavAdmin';
import TopProgressChart from '../../Layout/Admin/TopProgressChart';
import '../../css/admin.css';
export default class AdminDashboard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Header />

          <Nav />

          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-title">Total Teachers</h3>
              <p className="stat-value">12</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Total Students</h3>
              <p className="stat-value">132</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Total Classes</h3>
              <p className="stat-value">12</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Weekly Visits</h3>
              <p className="stat-value">34</p>
            </div>
          </div>

          <TopProgressChart />
          
        </div>
      
      </>
    )
  }
}