import React, { Component } from 'react';
import Axios from 'axios';
import './aldertable.css';
class Aldertable extends Component {
    state= {
        Alderman: []
    }
    componentDidMount() {
        Axios.get('http://localhost:8080//findAllAldermen')
        .then(response =>{
            this.setState({
            Alderman: response.data
        });
    });
}

    render() {
        return (
          <div>
          <h2 className="text-title">List of Aldermen</h2>
          <div className='col-10 table-wrapper'>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="table-success">
                            <th> Ward</th>
                            <th> Name</th>
                            <th> Phone</th>
                            
                            
                          </tr>
                        </thead>
            
                        <tbody className="table-wrapper">
                          {this.state.Alderman.map((alderman) => (
                            <tr key={alderman.ward} className="table-light">
                            <td>{alderman.ward}</td>
                            <td> {alderman.name}</td>
                            <td> {alderman.phone}</td>
                             
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </div>
                  
        );
                          }
                        }
           
                          


export default Aldertable;