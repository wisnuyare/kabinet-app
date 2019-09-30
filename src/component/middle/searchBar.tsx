import React, { Component } from 'react'
import search from '../../assets/svg/search.svg'
import { withRouter } from 'react-router';

class SearchComponent extends Component<any,any> {
  state = {
    string: '',
  }
  handleChange(e: any){
    if(e.key == 'Enter'){
      this.props.history.push('/assets/search/laptop')
    }else{
      this.setState({
        string: e.target.value
      })
    }
  }
  render() {
    return (
      <div className="search-component">
        <span><img src={search} alt=""/></span>
        <input onKeyPress={(e) => {this.handleChange(e)}} className="search-input" type="text" placeholder="Search..."/>
      </div>
    )
  }
}

export default withRouter(SearchComponent)
