import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router'

import Header from './components/common/Header';
import Notification from './components/common/Notifications';
import Footer from './components/common/Footer';
import Welcome from './components/welcome/Welcome';
import Logout from './components/user/Logout'


class App extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <Notification />
        <Switch>
          <Route path='/' component={Welcome} />
          <Route path='/logout' component={Logout} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
