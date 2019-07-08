import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import '../../App.css';
import axios from 'axios';
import SignInBtn from '../SignInBtn';
import Menu from '../Menu';
import logo from './logo.png';


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()

        axios.post('/user/logout').then(response => {
          if (response.status === 200) {
            this.props.updateUser({
                loggedIn: false,
                username: null
            })
          }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        
        return (
            
            <div>
                <header className="navbar App-header" id="nav-container">
                <div class="logo col-1">
                    <img src={logo} alt="Logo"/>
                    </div>
                <div>
                        {loggedIn ? ( 
                            <section className="navbar-section" >
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span>
                                </Link>

                            </section>

                        ) : ( <Menu></Menu>
                            // <section className="navbar-section signbtn">

                            //     <Link to="/login" className="btn btn-link text-secondary signbtn">
                            //         <span className="text-secondary">Login</span>
				            //     </Link>
                                
                            //     <Link to="/signup" className="btn btn-link signbtn">
                            //         <span className="text-secondary">Sign Up</span>
				            //     </Link>

                            // </section>
                        )}
                    </div>

                        <div>
                        <SignInBtn></SignInBtn> 
                        </div>
                {/* <div className="col-12">
                    <nav class="menu">
                        <ol>
                            <li class="menu-item"><a href="/">Home</a></li>
                            <li class="menu-item"><a href="/Saved">Saved</a></li>
                            <li class="menu-item"><a href="sports">Sports</a></li>
                            <li class="menu-item"><a href="concert">Concerts</a></li>
                            <li class="menu-item"><a href="theatre">Theaters</a></li>
                        </ol>
                    </nav>
                </div>
       */}



                
                </header>
            </div>
        );
    }
}

export default Navbar