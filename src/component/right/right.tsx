import React, { Component } from 'react'
import ActivityLog from './activity';
import Header from './header';

export default class RightComponent extends Component {
  render() {
    return (
      <div className="col-md-3 right-component">
        <Header />
        <ActivityLog />
      </div>
    )
  }
}
