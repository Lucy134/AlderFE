import React, { Component } from 'react';
import Axios from 'axios';
import './sidebar.css';

class sidebar extends Component {
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
            
            <div>
             <p className="side-head">Coming Up</p>  
               <div className ="side-container">
               {this.state.CalItem.slice(0,4).map((item) => (
                <div className="card w-90">
  <div className="sidecard-body">
    <h5 className="sidecard-title">{item.month} {item.day}</h5>
    <p className="sidecard-text">{item.text}</p>

                    </div>
       
</div>
                  ))}  </div></div>
                   );
    }
}

export default sidebar;