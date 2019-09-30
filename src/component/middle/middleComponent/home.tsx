import React, { Component } from 'react'
import Assets from './home/assets';
import Team from './home/team';

export default class Home extends Component {
  render() {
    return (
      <div className="container no-padding">
        <Team />
        <Assets page={"true"}/>
      </div>
    )
  }
}
