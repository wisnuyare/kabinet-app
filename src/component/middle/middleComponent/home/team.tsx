import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import folder from '../../../../assets/svg/status-Sync.svg'

export default class Team extends Component {
  render() {
    return (
      <div>
        <div className="head row">
            <div className="col-md-6 col-xs-12 title">
                <h1>
                    Team
                </h1>
            </div>
            <div className="col-md-6 view">
                <span>View all ></span>        
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-xs-4 team-box">
                <div className="team">
                    <div className="row">
                        <div className="col-md-6 col-xs-6">
                            <img src={folder} alt=""/>
                        </div>
                        <div className="col-md-6 col-xs-6">
                            <img src="" alt="" className="thumb"/>
                            <img src="" alt="" className="thumb"/>
                            <img src="" alt="" className="thumb"/>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12 team-name">
                        <span className="team-title">Tech Team</span>
                    </div>
                    <div className="col-md-12 col-xs-12 asset-detail">
                        <span className="total-assets">120 Assets. </span>
                        <span className="detail-link">detail?</span>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xs-4 team-box">
                <div className="team">
                    <div className="row">
                        <div className="col-md-6 col-xs-6">
                            <img src={folder} alt=""/>
                        </div>
                        <div className="col-md-6 col-xs-6">
                            <img src="" alt="" className="thumb"/>
                            <img src="" alt="" className="thumb"/>
                            <img src="" alt="" className="thumb"/>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12 team-name">
                        <span className="team-title">Tech Team</span>
                    </div>
                    <div className="col-md-12 col-xs-12 asset-detail">
                        <span className="total-assets">120 Assets. </span>
                        <span className="detail-link">detail?</span>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xs-4 team-box">
                <div className="team">
                    <div className="row">
                        <div className="col-md-6 col-xs-6">
                            <img src={folder} alt=""/>
                        </div>
                        <div className="col-md-6 col-xs-6">
                            <img src="" alt="" className="thumb"/>
                            <img src="" alt="" className="thumb"/>
                            <img src="" alt="" className="thumb"/>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12 team-name">
                        <span className="team-title">Tech Team</span>
                    </div>
                    <div className="col-md-12 col-xs-12 asset-detail">
                        <span className="total-assets">120 Assets. </span>
                        <span className="detail-link">detail?</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
