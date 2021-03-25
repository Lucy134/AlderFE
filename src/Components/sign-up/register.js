import React, { Component } from 'react';
import Axios from 'axios';
import './register.css';
class Signup extends Component {
    state ={
        user: {
        fName:'',
        lName:'',
        email: '',
        password:'',
        ward:'',
        }
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = {...this.state.user}
        tempUser[name] = value;
        this.setState(
            {
                user : tempUser
            }
        );
    }
    
    submitSignup = (e) =>{
        e.preventDefault()
        //postmapping for submit user details
        Axios.post('http://localhost:8080/submitUserDetails' , this.state.user)
        .then(response =>{
            this.props.history.push('/home');
        })
        .catch(error => {
            console.log (error)
           // this.props.history.push('/error');
        }
        )
        }
    
    render() {
        return (
            <div className="container">
                <div className="regbox">
            <div className="signupTop">
                <form className="about-us-container">
                <h4 >Let's get some quick info about you</h4>
                <h5>Please enter ward as a two digit number (01 or 28)</h5>
                <h5>If you need help finding your ward please go <a href="https://www.stlouis-mo.gov/government/departments/aldermen/search-for-your-alderman.cfm">here</a></h5>
                    <div className="row">
                        
                        <div className="col-md-8">
                        <input onChange={this.handleChange} value= {this.state.fName} name="fName" type="text" className="form-control" placeholder="First Name"/>
                                                   
                        <input onChange={this.handleChange} value= {this.state.lName} name="lName" type="text" className="form-control" placeholder="Last Name"/>
                        <input onChange={this.handleChange} value= {this.state.ward}name="ward" type="text" className="form-control" placeholder="Ward Number"/>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            
                            
                         </div>
                         
                           
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col">
                            <input onChange={this.handleChange} value= {this.state.email} name="email" type="text" class="form-control" placeholder="Email"/>
                         </div>
                            <div class="col">
                                <input onChange={this.handleChange} value= {this.state.password} name="password" type="password" class="form-control" placeholder="Password"/>
                            </div>
                    </div>
                    <br/>
                <button onClick={this.submitSignup} type="button" class="btn btn-info btn-lg btn-block">Submit</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Signup;