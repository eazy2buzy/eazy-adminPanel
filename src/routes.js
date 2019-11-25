import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/side-navigation/SideBar';


const AppRouter = _ => {

    return (
        <Router>
            <SideBar />
            <Switch>
            </Switch>
        </Router>
    )
}

export default AppRouter;