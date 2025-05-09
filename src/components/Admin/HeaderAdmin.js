import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="https://5.imimg.com/data5/HR/RD/ZK/SELLER-3465741/track-smart-document-file-workflow-tracking-software.png" alt="" />
                <h1 className="brand-name">TrackSmart</h1>
            </div>
            <button className="logout-btn">Log out</button>     
        </header>
    )
  }
}
