import React, { Component } from 'react'
import { withRouter } from 'react-router';

class addEmployee extends Component<any, any> {
    state = {
        Status: '',
        Fullname: '',
        Email: '',
        team: '',
        PositionId: '',
        Gender: '',
        PhoneNumber: '',
        Address: '',
        NpwpNumber: '',
        IdentityNumber:'',
        BankAccountNumber: '',
        Laptop: '',
        Monitor: '',
        Mouse: '',
        LocationId: '',
        photo: '',
        LevelId: '0ba1b414-dcf0-11e9-a034-88d7f6304099',
        Nickname: 'hardcode',
        FamilyCardNumber: "123123",
        positionList: [],
        teamList: [],
        locationList: []
    }
    async componentDidMount(){
        const url = "http://172.20.10.4:5100/api/Position/GetAllPosition"
        const response = await fetch(url, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJson = await response.json();
        this.setState({
            positionList: myJson.Payload
        })
        const urlteam = "http://172.20.10.4:5100/api/Department/GetAllDepartment"
        const responseTeam = await fetch(urlteam, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJsonTeam = await responseTeam.json();
        this.setState({
            teamList: myJsonTeam.Payload
        })
        const urllocation = "http://172.20.10.4:5200/api/Location/GetAllLocation"
        const responseLocation = await fetch(urllocation, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJsonLocation = await responseLocation.json();
        this.setState({
            locationList: myJsonLocation.Payload
        })
    }
    handleChange(e: any){
        this.setState({
                [e.target.id]: e.target.value
        })
    }
    async handleSubmit(){
        let jsonPOST = JSON.stringify(this.state)
        const url = "http://172.20.10.4:5100/api/Employee"
        const response = await fetch(url, {method: 'POST', headers: {'accept': 'application/json', 'Content-Type': 'application/json-patch+json'}, body:jsonPOST});
        const myJson = await response.json();
        if(myJson.Status == true){
            this.props.history.push('/employee');
        }
    }
  render() {
    return (
        <div className="add-employee">
            <div className="head row">
                <div className="col-md-6 col-xs-12 title">
                    <h1>
                        New Employee
                    </h1>
                </div>
            </div>
            <div className="container form-employee input-form">
                <label>Employee Status</label>
                <select name="Status" id="Status" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What team is he/she will in charge?</option>
                    <option value="active">Active</option>
                    <option value="resign">Resign</option>
                </select>
                <label>Employee Name</label>
                <input type="text" id="Fullname" placeholder="Write his/her full name here" onChange={(e) => {this.handleChange(e)}}/>
                <label>Team</label>
                <select name="team" id="team" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What team is he/she will in charge?</option>
                    {this.state.teamList.map((team : any, index) => {
                        return(
                            <option value={team.Id} key={index}>{team.Name}</option>
                        )
                    })}
                </select>
                <label>Position</label>
                <select name="position" id="PositionId" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What position is he/she will in charge?</option>
                    {this.state.positionList.map((pos : any, index) => {
                        return(
                            <option value={pos.Id} key={index}>{pos.Name}</option>
                        )
                    })}
                </select>
                <label>Gender</label>
                <select name="gender" id="Gender" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>Is it a man or woman?</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label>Phone Number</label>
                <input type="text" id="PhoneNumber" placeholder="Write his/her phone number here" onChange={(e) => {this.handleChange(e)}}/>
                <label>Address</label>
                <input type="text" id="Address" placeholder="Write his/her home here" onChange={(e) => {this.handleChange(e)}}/>
                <label>NPWP<span>(optional)</span></label>
                <input type="text" id="NpwpNumber" placeholder="Is he/she has npwp? Write his/her npwp number here" onChange={(e) => {this.handleChange(e)}}/>
                <label>ID Number</label>
                <input type="text" id="IdentityNumber" placeholder="Write his/her id number here" onChange={(e) => {this.handleChange(e)}}/>
                <label>Bank Account</label>
                <input type="text" id="BankAccountNumber" placeholder="Write his/her bank account number here" onChange={(e) => {this.handleChange(e)}}/>
                <label>Laptop</label>
                <select name="laptop" id="laptop" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What laptop he/she will use?</option>
                    <option value="acer">Acer</option>
                    <option value="asus">Asus</option>
                </select>
                <label>Monitor</label>
                <select name="monitor" id="monitor" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What monitor he/she will use?</option>
                    <option value="lg">LG</option>
                    <option value="samsung">Samsung</option>
                </select>
                <label>Mouse</label>
                <select name="mouse" id="mouse" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What mouse he/she will use?</option>
                    <option value="logitech">Logitech</option>
                    <option value="a4tech">A4tech</option>
                </select>
                <label>Location</label>
                <select name="Location" id="LocationId" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>Pick one reason pal</option>
                    {this.state.locationList.map((location : any, index) => {
                        return(
                            <option value={location.Id} key={index}>{location.Name}</option>
                        )
                    })}
                </select>
                <label>Photo</label>
                <input type="text" id="photo" className="drag-drop" onChange={(e) => {this.handleChange(e)}}/>
                <button onClick={() =>{this.handleSubmit()}}>Send</button>
            </div>
        </div>
    )
  }
}

export default withRouter(addEmployee)