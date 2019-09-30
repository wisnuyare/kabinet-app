import React, { Component } from 'react'
import macbook from '../../../assets/svg/macbook.jpg'
import pencil from '../../../assets/svg/pencil.svg'
import ignore from '../../../assets/svg/ignore.svg'
import ignorecopy from '../../../assets/svg/ignore-copy.svg'
import QRCode from 'qrcode.react'

export default class AssetDetail extends Component<any,any> {
    state = {
        assetLink: ''
    }
    componentDidMount(){
        let id = this.props.match.params.assetId;
        this.setState({
            assetLink: 'http://172.20.10.2:3000/assets/'+id
        });

    }
  render() {
    return (
      <div className="asset-information">
        <div className="head row">
            <div className="col-md-6 col-xs-12 title">
                <h1>
                    Asset Detail
                </h1>
            </div>
            <div className="col-md-6 view">
                <span onClick={() => {this.props.history.push('/editasset')}}>Edit<img className="pencil-image" src={pencil} alt=""/></span>        
            </div>
        </div>
        <div className="container">
            <div className="col-md-12">
                <div className="row">
                    <div className="asset-photo">
                        <img src={macbook} alt=""/>
                    </div>
                    <div className="qr-code">
                        <QRCode value={this.state.assetLink}/>
                    </div>
                </div>
                <p>Asset Type: Laptop</p>
                <p>Asset Name: Apple Macbook Pero BGT</p>
                <p>Asset Id: APPMCEBOKPRBGT</p>
                <p>Asset Specification: Processor Intel Core 8th Gen i7, Ram 2GB</p>
                <p>Date Of Purchase: 21 January 2017</p>
                <p>Warranty Expired: 21 January 3017</p>
                <p>Asset Price: Rp. 13.500.000.000.000</p>
                <p>Asset Status: Owned By <span onClick={() => {this.props.history.push('/employee/'+11)}}>Ali Pangestu </span>From <span>Green Office Park Tech Team</span></p>
                <p className="logo-icon"><img src={ignorecopy} className="ignore-copy" alt=""/><img src={ignore} className="ignore" alt=""/></p>
            </div>
        </div>
      </div>
    )
  }
}