import React, { Component } from 'react';
import Aldertable from '../AlderTable/Aldertable';
import Sidebar from '../sidebar/Sidebar'

class Alderman extends Component {
    render() {
        return (
            <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">

                <Aldertable/>
                </div>
                </div>
        );
    }
}

export default Alderman;