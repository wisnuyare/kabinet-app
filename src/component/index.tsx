import React, { Component } from 'react'
import Sidebar from './left/sidebar';
import MidComponent from './middle/middle';
import RightComponent from './right/right';
import { BrowserRouter } from 'react-router-dom';

export default class Index extends Component {
  render() {
    return (
      <div className="index">
        <div className="row">
          <BrowserRouter>
            <Sidebar />
            <MidComponent />
            <RightComponent />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
