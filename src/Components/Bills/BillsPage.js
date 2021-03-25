import React, { Component } from 'react';
import Aldertable from '../AlderTable/Aldertable';
import Sidebar from '../sidebar/Sidebar';

import Table from '../Table/Table';


class BillsPage extends Component {
    render() {
        return (
            
            
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">

                    
                <Table/>
                </div>
                </div>
               
            
        );
    }
}

export default BillsPage;