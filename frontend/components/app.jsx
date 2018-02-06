import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectRoute } from '../utils/route_utils';
import LoginContainer from './session/login_container';
import MainPage from './home/main';
import DashboardContainer from './dashboard/dashboard_container';
import LocationContainer from './locations/location_index_container';


export default () => (
  <div>
    <AuthRoute exact path='/' component={NavBarContainer} />
    <Route exact path='/' component={MainPage} />
    <ProtectRoute exact path='/dashboard' component={NavBarContainer} />
    <ProtectRoute exact path='/dashboard' component={DashboardContainer} />
    <ProtectRoute exact path='/locations' component={NavBarContainer} />
    <ProtectRoute exact path='/locations' component={LocationContainer} />
  </div>
  
);