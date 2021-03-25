import React, { Component } from 'react';
import Arch from './arch.jpg'


import './home.css';


class Home extends Component {
    render() {
        return (
            <div className= "container">
                <div className="row">
           <div className="col-md-7">
            <div className= "pic">
            
               <br/><br/><br/><br/><br/><br/>
            <h2 className="city">Make this the city</h2><br/><h2> you want to see</h2>
            </div>
            </div>
            
          
            
                   <div className="col-md-5">
                   <div className="title">
               <h1 className="welcome">Welcome to Alder</h1>
               
                   <p className="intro">  We make local politics easy</p>
                   <p className="intro">  Find your representative</p>
                   <p className="intro">  See what they're up to</p>
                   <p className="intro">  Get in Touch</p>
                   <p className="intro">  Get Informed</p>
                   <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                   </div>
                   </div>
                   </div>
                   
               
            </div>
            
            
            
            
           
        );
    }
}

export default Home;