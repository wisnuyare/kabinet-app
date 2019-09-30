import React, { Component } from 'react'
import broken from '../../../../assets/svg/broken.svg'
import unbroken from '../../../../assets/svg/unbroken.svg'
import laptop from '../../../../assets/svg/laptop.jpg'
import { withRouter } from 'react-router';

class Assets extends Component<any, any> {
    state = {
    status: 0,
        assets: []
    }
    async componentDidMount(){
        const url = "http://172.20.10.4:5400/api/Item/GetAllItemIndex"
        const response = await fetch(url, {method: 'GET', headers: {'accept': 'application/json'}});
        const myJson = await response.json();
        this.setState({
            assets: myJson.Payload
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
    let view = (<span onClick={() => {this.props.history.push('/assets')}}>View all ></span>)
    let add = (<span onClick={() => {this.props.history.push('/addassets')}}>Add Assets +</span>)
    return (
      <div>
        <div className="head row">
            <div className="col-md-6 col-xs-12 title">
                <h1>
                    Reck Assets
                </h1>
            </div>
            <div className="col-md-6 view">
                {this.props.page ? view : add}
            </div>
        </div>
        <div className="list-of container">
        {this.state.assets.map((item : any, index) => {
                return(
            <div key={index} className={this.state.status === 0 ? 'row' : 'row broke-row'}>
                <div onClick={() => {this.props.history.push('/assets/'+item.ItemId)}} className="col-md-2 col-xs-2 asset-image">
                    <img src={laptop} alt=""/>
                </div>
                <div onClick={() => {this.props.history.push('/assets/'+item.ItemId)}} className="col-md-3 col-xs-3 asset-name">
                    <span>{item.Name}</span>
                </div>
                <div onClick={() => {this.props.history.push('/assets/'+item.ItemId)}} className="col-md-2 col-xs-2 asset-type">
                    <span>{item.ItemType}</span>
                </div>
                <div onClick={() => {this.props.history.push('/assets/'+item.ItemId)}} className="col-md-4 col-xs-4 asset-status">
                    <span>{item.isActive}</span>
                    <span> at </span>
                    <span>{item.LocationName}</span>
                </div>
                <div className="col-md-1 col-xs-1 asset-action">
                    <div className={this.state.status == 0 ? 'broken' : 'unbroken'} onClick={() => this.updateStatus()}><img src={this.state.status == 0 ? broken : unbroken } alt=""/></div>
                </div>    
            </div>)
        })}
        </div>
      </div>
    )
  }
}

export default withRouter(Assets);
