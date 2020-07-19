import React from 'react'
import Home from './home';
import About from './about';
import Contact from './contact';
import History from './history';

import { Route, Redirect, Link, BrowserRouter as Router, NavLink, Switch, BrowserRouter } from 'react-router-dom';

class Homepage extends React.Component {
    
    render (){
        return(
                <BrowserRouter history={History}>
                  <div>  
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                  </div>  
                </BrowserRouter>
        )
    }
}

export default (Homepage);