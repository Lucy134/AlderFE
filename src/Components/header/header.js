import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Header extends Component{
    state ={
        user: {
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
        <Link className="nav-link" to="/sign-up">Register</Link>
       
        </li>
        );
        if (localStorage.getItem("loggedInUser")){
            links =(
            <li className="nav-item active">
                 <Link className="nav-link active" to="/profile">My Stuff</Link>
        
        </li>
            )
        }
        let signInSignOut = (
            <form className="form-inline mt-2 mt-md-0">
                        <input onChange={this.handleChange} value= {this.state.email} name="email" type="text" class="form-control" placeholder="Email"/>
                            <input onChange={this.handleChange} value={this.state.password} name="password" type="password" class="form-control" placeholder="Password" />
                            <button className="btn btn-outline-light my-2 my-sm-0" 
                            onClick={this.submitLogin}type="button">Login</button>
                        </form>
        )
        if (localStorage.getItem("loggedInUser")){
            signInSignOut =(
            <form className="form-inline mt-2 mt-md-0">
                <button className="btn btn-outline-light my-2 my-sm-0" onClick={this.SignOut} type="button">Sign Out</button>
                        </form>
            );
        }
        return(
            <div className="header-bottom">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
              <a className="navbar-brand" href="/home">Alder Home</a>
       
        <Link className="nav-link active" to="/about-us">About Us</Link>
        <Link className="nav-link active" to="/bills">Board Bills</Link>
        <Link className="nav-link active" to="/alderman">Aldermen</Link>
            
              
                  <ul className="navbar-nav mr-auto">
                      {links}
                  </ul>
                  {signInSignOut}
             
          </nav>
      </div>
        );
    }
}
export default Header;
