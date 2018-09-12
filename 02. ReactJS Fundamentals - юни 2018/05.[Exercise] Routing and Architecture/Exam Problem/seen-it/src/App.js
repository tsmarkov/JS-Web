import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router'

import Header from './components/common/Header';
import Notification from './components/common/Notifications';
import Footer from './components/common/Footer';
import Welcome from './components/welcome/Welcome';
import Logout from './components/user/Logout'
import Container from './components/Container';


class App extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <Notification />
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/container' component={Container} />
          <Route path='/logout' component={Logout} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
