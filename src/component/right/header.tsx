import React, { Component } from 'react'
import notif from '../../assets/svg/notification.svg'
import dropdown from '../../assets/svg/chevron.svg'
import image from '../../assets/svg/profile.png'

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 header">
            <img src={notif} alt="" className="notif-button"/><span className="red-dot"></span>
            <img src={image} alt="" className="profile-pic"/> 
            <span className="user">Angel <img src={dropdown} alt=""/></span>
          </div>
        </div>
      </div>
    )
  }
}
