import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./component/gameApp";
import Index from "./component"




export default class castomRouter extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/App" component={App}/>
            </Switch>
        </Router>
        )
    }

}