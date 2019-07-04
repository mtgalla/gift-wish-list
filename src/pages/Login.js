import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'

import LoginForm from '../components/login-form'
import Navbar from '../components/navbar'
// import Home from './components/home'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()

  }

  updateUser (userObject) {
    this.setState(userObject)
    console.log(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {

      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (

      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }

        {/* Routes to different components */}
        {/* <Route
          exact path="/"
        component={Home} /> */}
{/*           
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        /> */}

        {/* <Route
          path="/signup"
          render={() =>
            <Signup/>}
        /> */}

      </div>
    );
  }
}

export default Login;
