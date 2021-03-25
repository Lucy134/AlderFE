import React, { Component } from 'react';

import Header from './header/header';
import {Route, withRouter} from 'react-router-dom';
import register from './sign-up/register'
import Home from './home/Home';
import Error from '../Components/Error';
import BillsPage from './Bills/BillsPage';
import Profile from './profile/Profile';

import Alderman from './Alderman/Alderman';
import AboutUs from './about/AboutUs';


class Layout extends Component {
    render() {
        let routes =(
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/sign-up" component={register} />
                    <Route exact path="/bills" component={BillsPage}/>
                    <Route exact path="/alderman" component={Alderman}/>
                    <Route exact path="/about-us" component={AboutUs}/>
            </div>
        );
        if (localStorage.getItem("loggedInUser")){
            routes = (
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/bills" component={BillsPage}/>
                    <Route exact path="/alderman" component={Alderman}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/profile" component={Profile}/>
              

                </div>
            )
        }
        return (
            <div >
                <Header {...this.props}/>
                {routes}
                 
                 
                 <Route path="/error" component={Error}/>

            </div>
        );
    }
}

export default withRouter(Layout);