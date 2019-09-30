import React, { Component } from 'react'
import actphoto from '../../assets/svg/profile.png'

export default class ActivityLog extends Component {
  render() {
    return (
      <div className="container  act-all">
        <div className="head row">
            <div className="col-md-12 title">
                <h1>
                    Activities
                </h1>
            </div>
        </div>
        <div className="container">
            <div className="row activity">
                <div className="col-md-12">
                    <span className="act-photo"> </span>
                    <span className="activity-log">Wisnu Aquaproof Added New Laptop</span>
                    <span className="time-log"> 1h</span>
                </div>
            </div>
            <div className="row activity">
                <div className="col-md-12">
                    <span className="act-photo"> </span>
                    <span className="activity-log">Reza Tampanz Request An Upgrade For His Laptop </span>
                    <span className="time-log"> 1h</span>
                </div>
            </div>
            <div className="row activity">
                <div className="col-md-12">
                    <span className="act-photo"> </span>
                    <span className="activity-log">Inem Skarakopiv Purchase Bubble Wrap</span>
                    <span className="time-log"> 1h</span>
                </div>
            </div>
            <div className="row activity">
                <div className="col-md-12">
                    <span className="act-photo"> </span>
                    <span className="activity-log">Monica Ababwa Move Table From Green Office Park to Cideng</span>
                    <span className="time-log"> 1h</span>
                </div>
            </div>
            <div className="row activity">
                <div className="col-md-12">
                    <span className="act-photo"> </span>
                    <span className="activity-log">Karimun Sofyan Assign Laptop MCEBOOK20299 to Fahrul Husen</span>
                    <span className="time-log"> 1h</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
