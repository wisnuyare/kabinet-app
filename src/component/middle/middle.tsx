import React, { Component, Suspense } from 'react'
import Home from './middleComponent/home';
import SearchComponent from './searchBar';
import { withRouter, Switch, Route } from 'react-router';
import Assets from './middleComponent/home/assets';
import Employee from './middleComponent/employee';
import addEmployee from './middleComponent/addaction/addEmployee';
import EmployeeProfile from './middleComponent/employeeprofile';
import AssetDetail from './middleComponent/assetdetail';
import addAssets from './middleComponent/addaction/addAssets';
import AssetsStatus from './middleComponent/assetStatus';

class MidComponent extends Component {
  render() {
    return (
      <div className="col-md-6 no-padding">
        <SearchComponent />
          <Switch>
            <Route exact path={"/"} component={Home} />    
            <Route exact path={"/assets"} component={Assets} />
            <Route exact path={"/employee"} component={Employee} />
            <Route exact path={"/addemployee"} component={addEmployee} />
            <Route exact path={"/employee/:employeeId"} component={EmployeeProfile} />
            <Route exact path={"/assets/:assetId"} component={AssetDetail} />
            <Route exact path={"/assets/search/:searchValue"} component={AssetsStatus} />
            <Route exact path={"/addassets"} component={addAssets} />
          </Switch>
      </div>
    )
  }
}

export default withRouter<any, any>(MidComponent)
