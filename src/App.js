import React from 'react';
// import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
// import Navbar from './components/navbar'
import Home from './components/home'
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Login from "./pages/Login";
// import Nav from "./components/Nav";
import NavTemplate from "./components/NavTemplate";

function App() {
  return (
    <Router>
      <div>
        <NavTemplate />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/tickets" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/login" render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
          <Route path="/signup"
          render={() =>
            <Signup/>}
        />*/}
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
