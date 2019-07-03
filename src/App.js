import React, { Component } from 'react';
//import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Login from "./pages/Login";
// import Nav from "./components/Nav";
// import NavTemplate from "./components/NavTemplate";

class App extends Component {
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
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {

  return (
    <Router>
      <div>

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        
        {this.state.loggedIn &&
          <p>Your Email, {this.state.username}, has been registered!</p>
        }

        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/tickets" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route exact path="/home" component={Home} />

          <Route path="/login" render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
          />
        
          <Route path="/signup" render={() =>
            <Signup/>}
          />
          
          <Route component={NoMatch} /> 
        </Switch>

      </div>

    </Router>
  );
}
}

export default App;
