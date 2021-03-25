import Axios from 'axios';
import React, { Component } from 'react';
import './aldercard.css';
class Aldercard extends Component {
    state = {
        user:{ },
        alderman: []
    }
    componentDidMount() {
        const email = localStorage.getItem("loggedInUser");
        const params = {email}
        Axios.get('http://localhost:8080/findUserByEmail' , {params})
        .then(response => {
            this.setState({
                user:  response.data
            });

            Axios.get('http://localhost:8080/findUsersAldermen', {params})
            .then(response => {
                this.setState({
                    alderman: response.data
                });
            })
        })
    }
    
    render() {
        return (
            <div className="card-contain">
                <div className="card-class">
               
                    
                       
                       <div className="card-title aldTitle"><h2 className="youAld">Your Alderman</h2></div>
                       <div className="card-text">
                       {this.state.alderman.map((item) => (
                       
                            <ul>
                                <li className="aldList">Ward: {item.ward}</li>
                                <li className="aldList">{item.name} </li>
                                <li className="aldList">{item.phone}</li>
                                <li className="aldList"><a href={item.facebook}>Facebook</a></li>
                                <li className="aldList"><a href={item.twitter}>Twitter</a></li>
                                
                                 </ul>

                         
                    ))}</div> </div>

                </div>
            
        );
    }
}

export default Aldercard;