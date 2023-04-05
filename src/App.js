import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginLand from './Components/Login/LandingLog';
import Login from './Components/Login/Login';
import Home from './Components/Home/HomeWrap';
import Apps from './Components/Apps/AppsWrap';
import AppOverView from './Components/Apps/AppOverView/AppOverView';
import UsersPage from './Components/Users/UsersPageWrap';
// import Wear from './Components/Wear/WearWrap';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={props => <Home />} />
      <Route exact path="/login_start" component={props => <LoginLand />} />
      <Route exact path="/login" component={props => <Login />} />

      <Route exact path="/apps" component={props => <Apps />} />
      <Route exact path="/app_overview" component={props => <AppOverView />} />
      <Route exact path="/users" component={props => <UsersPage />} />
      {/* <Route exact path="/wear" component={props => <Wear />} /> */}
    </Switch>
    </div>
  );
}

export default App;