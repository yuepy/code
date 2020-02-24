import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';
import Login from 'bundle-loader?lazy&name=login!pages/Login/login';
import Index from 'bundle-loader?lazy&name=index!pages/Index/index';
import warehousing from 'bundle-loader?lazy&name=warehousing!pages/warehousing/warehousing';
const Loading = function () {
    return <div>Loading...</div>
};
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);
const getRouter = () => (
    <Router>
            <Switch>
                <Route exact path="/" component={createComponent(Login)}/>
                <Route path="/index" component={createComponent(Index)}/>
                <Route path="/warehousing" component={createComponent(warehousing)}/>
            </Switch>
    </Router>
);
export default getRouter;