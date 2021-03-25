import React, { Component } from 'react';
import Axios from 'axios';
import './table.css';

class Table extends Component {
    state= {
        bills: []
    }
    componentDidMount() {
            Axios.get('http://localhost:8080/findAllBills')
            .then(response =>{
                this.setState({
                bills: response.data
            });
        });
    }
    render() {
        return (
            
          <div>
          <h2 className="text-title">2020-2021 Board Bills</h2>
          <div className='col-10 table-wrapper'>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="table-success">
                            <th> Bill Number</th>
                            <th>Title</th>
                            <th className="text">Text</th>
                            <th >Link</th>
                            
                            
                          </tr>
                        </thead>
            
                        <tbody>
                          {this.state.bills.map((bill) => (
                            <tr key={bill.billNum} className="table-light">
                            <td>{bill.billNum}</td>
                            <td>{bill.title}</td>
                            <td> {bill.text}</td>
                            <td> <a href={bill.billLink} target="_blank">Full Page</a></td>
                             
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
           
                          


export default Table;