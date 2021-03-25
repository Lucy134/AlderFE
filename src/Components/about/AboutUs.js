import React, { Component } from 'react';
import './aboutus.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
            <div className="aboutHead">
                <h1>What is Alder</h1>
             </div>
             <br/>
                    <div className="artcontain">
                <p >
                    Alder is a final coding bootcamp project.  We were intended to make a project that solves a real problem
                    and is important to us personally.  Local politics has always been close to my heart and my hope is to make 
                    it easy and accessible for the end user (you). </p><p> For now we only function in St Louis, but the code is posted on github with instructions on how to modifty the scrapers
                    to get the data in your city.  As I worked on this project I found more and more that there was no real reason
                    for a user to make an account.  This isn't data that should require jumping through hoops.  It should be uncomplicated and simple and 
                    I hope that I have done that for you.  </p> <p>Feel free to sign up but please know its not nessecary.  Links in the Board Bills table will take you to 
                    the full page on the official city website.  This can be helpful as they often have full pdfs of the Bills
                    where a short summary is not enough.</p>
                
                </div>
            </div>
            
        );
    }
}

export default AboutUs;