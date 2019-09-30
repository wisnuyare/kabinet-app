import React, { Component } from 'react'

export default class addAssets extends Component<any, any> {
    state = {
        status: '',
        DepartmentId: '',
        ItemTypeId: '',
        Name: '',
        processor: '',
        memory: '',
        Price: '',
        DateOfPurchase: '',
        WarrantyExpiredDate: '',
        LocationId: '',
        ImeiNumber:'',
        photo: '',
        LocationID: 'b475b0ed-e0ac-11e9-a0c6-88d7f6304099',
        itemList: [],
        teamList: [],
        locationList: []
    }
    async componentDidMount(){
        const url = "http://172.20.10.4:5400/api/ItemType/GetAllItemType"
        const response = await fetch(url, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJson = await response.json();
        this.setState({
            itemList: myJson.Payload
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
        const url = "http://172.20.10.4:5400/api/Item"
        const response = await fetch(url, {method: 'POST', headers: {'accept': 'application/json', 'Content-Type': 'application/json-patch+json'}, body:jsonPOST});
        const myJson = await response.json();
        if(myJson.Status == true){
            this.props.history.push('/assets');
        }
    }
  render() {
    return (
        <div className="add-asset">
            <div className="head row">
                <div className="col-md-6 col-xs-12 title">
                    <h1>
                        New Asset
                    </h1>
                </div>
            </div>
            <div className="container form-asset input-form">
                <label>Asset Status</label>
                <select name="status" id="status" onChange={(e) => {this.handleChange(e)}}>
                    <option value="" disabled hidden>Asset Status?</option>
                    <option value="available">Available</option>
                    <option value="rusak">Rusak</option>
                </select>
                <label>Team</label>
                <select name="team" id="DepartmentId" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What team is he/she will in charge?</option>
                    {this.state.teamList.map((team : any, index) => {
                        return(
                            <option value={team.Id} key={index}>{team.Name}</option>
                        )
                    })}
                </select>
                <label>Asset Type</label>
                <select name="type" id="ItemTypeId" onChange={(e) => {this.handleChange(e)}} defaultValue="">
                    <option value="" disabled hidden>What type is this?</option>
                    {this.state.itemList.map((item : any, index) => {
                        return(
                            <option value={item.Id} key={index}>{item.Name}</option>
                        )
                    })}
                </select>
                <label>Asset Specification</label>
                <div className="row">
                <label className="key">Processor</label>
                <select name="processor" id="processor" onChange={(e) => {this.handleChange(e)}} className="value">
                    <option value="" disabled hidden>What is the processor</option>
                    <option value="i7">I7</option>
                    <option value="i5">I5</option>
                </select>
                </div>
                <div className="row">
                <label className="key">Memory</label>
                <select name="memory" id="memory" onChange={(e) => {this.handleChange(e)}} className="value">
                    <option value="" disabled hidden>RAM Capacity</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                </select>
                </div>
                <label>Asset Price</label>
                <input type="text" id="Price" placeholder="How much you buy this one?" onChange={(e) => {this.handleChange(e)}}/>
                <label>Asset Name</label>
                <input type="text" id="Name" placeholder="write the name of your asset" onChange={(e) => {this.handleChange(e)}}/>
                <label>Asset ID</label>
                <input type="text" id="ImeiNumber" placeholder="write the id of your asset" onChange={(e) => {this.handleChange(e)}}/>
                <label>Date of Purchase</label>
                <input type="date" id="DateOfPurchase" placeholder="write your date" onChange={(e) => {this.handleChange(e)}}/>
                <label>Warranty</label>
                <input type="date" id="WarrantyExpiredDate" placeholder="write your date" onChange={(e) => {this.handleChange(e)}}/>
                <label>Photo</label>
                <input type="text" id="photo" className="drag-drop" onChange={(e) => {this.handleChange(e)}}/>
                <button onClick={() => {this.handleSubmit()}}>Send</button>
            </div>
        </div>
    )
  }
}
