import React, { Component } from 'react'
import logo from '../../assets/svg/logo.svg'
import { withRouter } from 'react-router';
import burger from '../../assets/svg/menu.svg'


class Sidebar extends Component<any,any> {
  state = {
    home: '',
    structure: '',
    employee: '',
    assets: '',
    settings: '',
    request: '',
    hide: 1
  }

  get initialState(){
    return{
      home: '',
      structure: '',
      employee: '',
      assets: '',
      settings: '',
      request: '' 
    }
  }
  componentDidMount(){
    this.setState({
      home: 'here'
    })
  }

  showMenu(){
    if(this.state.hide === 0){
      this.setState({hide: 1})
    }else{
      this.setState({hide: 0})
    }
  }
  handleClick(e:any){
    if(e.target.id == 'home'){
      this.props.history.push('/');  
    }else{
      this.props.history.push('/'+e.target.id);
    }
    this.setState(this.initialState);
    this.setState({
      [e.target.id]: 'here'
    })
  }

  render() {
    let reddot = <> </>
    // if(this.state.assets = ''){
    //   reddot = <span className="red-dot"></span>
    // }
    let MenuClass = "col-md-10 sidebar"
    if(this.state.hide === 0){
      MenuClass = "col-md-10 sidebar showMenu"
    }
    return (
      <div className="col-md-3 col-xs-12 no-padding">
        <div className="menu-burger" onClick={() => {this.showMenu()}}>
          <img src={burger} alt=""/>
        </div>
        <div className={MenuClass}>
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <div className="menu">
            <ul>
              <li className={this.state.home}><p id="home"  onClick={(e) => {this.handleClick(e)}}>Home</p></li>
              <li className={this.state.structure}><p id="structure" onClick={(e) => {this.handleClick(e)}}>Stucture</p></li>
              <li className={this.state.employee}><p id="employee" onClick={(e) => {this.handleClick(e)}}>Employee</p></li>
              <li className={this.state.assets}><p id="assets" onClick={(e) => {this.handleClick(e)}}>Assets</p></li>
              <li className={this.state.request}><p id="request" onClick={(e) => {this.handleClick(e)}}>Request</p>{reddot}</li>
              <li className={this.state.settings}><p id="settings" onClick={(e) => {this.handleClick(e)}}>Settings</p></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);
