import React, { Component } from 'react';
import Axios from 'axios';
import ProfileCal from './ProfileCal';
import Aldercard from './Aldercard';
import './profile.css'

class Profile extends Component {
    state = {
        user:{ }
    }
    componentDidMount() {
        const email = localStorage.getItem("loggedInUser");
        const params = {email}
        Axios.get('http://localhost:8080/findUserByEmail' , {params})
        .then(response => {
            this.setState({
                user:  response.data
            });

            
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
            <div className="col-md-2">
            
                <div className="user-container">
                <h2 className="greeting">Hello, {this.state.user.fName} <br/> <br/>Welcome Back</h2>
                            </div>    
                            </div>
                            <div className="clearfix"></div>
                <div className="col-md-6">
                    <h2 className="cal-title">Full Calendar</h2>
                    
                    <ProfileCal/>
                    </div>
                    
                    
                    <div className="clearfix"></div>
                    <div className="col-md-4">
                        
                        <Aldercard/>
                    </div>
                    
                    </div>
                </div>
                

                
               
        );
    }
}

export default Profile;