import React, { Component } from 'react'
import resign from '../../../assets/svg/resign.svg'
import { Link } from 'react-router-dom';

export default class Employee extends Component<any,any> {
    state = {
        status: 0,
        employee: []
    }
    
    async componentDidMount(){
        const url = "http://172.20.10.4:5100/api/Employee/GetAllEmployee"
        const response = await fetch(url, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJson = await response.json();
        this.setState({
            employee: myJson.Payload
        })
    }

    updateStatus(){
        if(window.confirm('are you sure?') == true){
            if(this.state.status == 0){
                this.setState({status: 1})
            }else{
                this.setState({status: 0})
            }
        }
    }
  render() {
    return (
      <div>
        <div className="head row">
            <div className="col-md-6 col-xs-12 title">
                <h1>
                    Employee
                </h1>
            </div>
            <div className="col-md-6 view">
                <span onClick={() => {this.props.history.push('/addemployee')}}>Add Employee +</span>        
            </div>
        </div>
        <div className="list-of container">
            {this.state.employee.map((emp : any, index) => {
                return(
                    <div onClick={() => {this.props.history.push('/employee/'+emp.Id)}} key={index} className={this.state.status === 0 ? 'row' : 'row broke-row'}>
                        <div className="col-md-4 col-xs-4 employee-name">
                            <span>{emp.FullName}</span>
                        </div>
                        <div className="col-md-3 col-xs-3 employee-job">
                            <span>{emp.Position.Name}</span>
                        </div>
                        <div className="col-md-4 col-xs-4 employee-status">
                            <span>{emp.Position.Department.Name}</span>
                            <span> at </span>
                            <span></span>
                        </div>
                        <div className="col-md-1 col-xs-1 employee-action">
                            <div className={this.state.status == 0 ? 'broken' : 'unbroken'} onClick={() => this.updateStatus()}><img src={resign} alt=""/></div>
                        </div>    
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}
