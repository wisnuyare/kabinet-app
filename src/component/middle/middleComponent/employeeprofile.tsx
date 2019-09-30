import React, { Component } from 'react'
import profImage from '../../../assets/svg/pasfoto.png'
import ktp from '../../../assets/svg/ktp.jpeg'
import npwp from '../../../assets/svg/npwp.jpg'
import pencil from '../../../assets/svg/pencil.svg'
import { Link } from 'react-router-dom';

export default class EmployeeProfile extends Component<any,any> {
    state = {
        status: 0,
        employee: []
    }
    async componentDidMount(){
        let id = this.props.match.params.employeeId;
        const url = "http://101.50.1.2:50661/api/Employee/GetEmployeeById/"+{id}
        const response = await fetch(url, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJson = await response.json();
        this.setState({
            employee: myJson.Payload
        })
        console.log(myJson.Payload)
    }
  render() {
    return (
      <div className="employee-detail">
        <div className="head row">
            <div className="col-md-6 col-xs-12 title">
                <h1>
                    Employee Detail
                </h1>
            </div>
            <div className="col-md-6 view">
                <span onClick={() => {this.props.history.push('/editemployee')}}>Edit<img className="pencil-image" src={pencil} alt=""/></span>        
            </div>
        </div>
        <div className="container">
            <div className="col-md-12">
                <div className="profile-image">
                    <img src={profImage} alt=""/>
                </div>
                <p>Angel Lelga</p>
                <p className="acc-stats">Active</p>
                <p>Team: People Ops</p>
                <p>Position: General Affair</p>
                <p>Gender: Woman</p>
                <p>Telp: 081288229390</p>
                <p>Address: Pamulang Permai Blok U11 no 23 Pamulang, Tangerang Selatan</p>
                <p>NPWP Number: 99.999.999.9-999.999</p>
                <p>ID Number: 36710129192830003</p>
                <p>Bank Account: 6040992200</p>
                <p>Laptop: Acer</p>
                <p>Monitor: -</p>
                <p>Mouse: -</p>
                <p><img src={npwp} alt=""/><img src={ktp} alt=""/></p>
            </div>
        </div>
      </div>
    )
  }
}