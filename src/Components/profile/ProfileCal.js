import React, { Component } from 'react';
import Axios from 'axios';
import './profileCal.css'

class ProfileCal extends Component {
    state= {
        CalItem: []
    }
    componentDidMount() {
            Axios.get('http://localhost:8080/findAllCal')
            .then(response =>{
                this.setState({
                    CalItem: response.data
            });
        });
    }

    render() {
        return (
            
                 <div className="row">
              
               <div className ="cal-container">
               {this.state.CalItem.map((item) => (
                <div className="cardLong">
  <div className="card-body">
    <h3 className="card-title">{item.month} {item.day} </h3 >
    <div className ="card-text">{item.text}</div>
    </div>

                    
                    
       
</div>
                  ))}  </div></div>
                   );
    }
}


export default ProfileCal;