import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
class Header extends Component{
    state ={
        student: {
        email: '',
        password:'',
      
        }
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = {...this.state.user}
        tempUser[name] = value;
        this.setState(
            {
                user: tempUser
            }
        );
    }
    submitLogin =() =>{
        Axios.post('http://localhost:8080/login', this.state.user)
        .then(response =>{
            localStorage.setItem('loggedInUser', response.data.email)
            this.props.history.push('/home');
        })
        .catch(error => {
            this.props.history.push('/error');
        }
        )
        
    }
    SignOut = () => {
        localStorage.removeItem("loggedInUser");
        this.props.history.push('/');
    }
    render() {
        let links = (   <li className="nav-item active">
        <Link className="nav-link" to="/sign-up">Sign In</Link>
        </li>
        );
        if (localStorage.getItem("loggedInUser")){
            links =(
            <li className="nav-item active">
        <Link className="nav-link" to="/sign-up">Settings</Link>
        </li>
            )
        }
        let signInSignOut = (
            <form className="form-inline mt-2 mt-md-0">
                        <input onChange={this.handleChange} value= {this.state.email} name="email" type="text" class="form-control" placeholder="Email"/>
                            <input onChange={this.handleChange} value={this.state.password} name="password" type="password" class="form-control" placeholder="Password" />
                            <button className="btn btn-outline-info my-2 my-sm-0" 
                            onClick={this.submitLogin}type="button">Login</button>
                        </form>
        )
        if (localStorage.getItem("loggedInUser")){
            signInSignOut =(
            <form className="form-inline mt-2 mt-md-0">
                <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.SignOut} type="button">Sign Out</button>
                        </form>
            );
        }
        return(
            <div className="header-bottom">
                  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Link</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {links}
                            <li className="nav-item">
                            <Link className="nav-link" to="/about-us">Link</Link>
                            </li>

   
                        </ul>
                        {signInSignOut}
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;
