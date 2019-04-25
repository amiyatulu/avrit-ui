import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import TopMenu from './containers/TopMenu/TopMenu';
import Banner from './containers/Banner/Banner';
import Footer from './containers/Footer/Footer';
import LoginForm from './containers/LoginForm/LoginForm';
import RegisterForm from './containers/RegisterForm/RegisterForm';
import Logout from './containers/Logout';
import auth from './services/authService';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({user});
    
  }

  render() {
    return (
      <div>
        <TopMenu user={this.state.user}/>
        <br/>
        <br/>
        <div className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/" component={Banner} />
        </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
