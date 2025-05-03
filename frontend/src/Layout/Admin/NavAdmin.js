import React, { Component } from 'react'

export default class NavAdmin extends Component {
  render() {
    return (
      <>
             <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item active">
                <a href="#" className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">User</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">Class</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">Notification</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">Report</a>
                </li>
            </ul>
            </nav>
      </>
    )
  }
}
