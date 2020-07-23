import React from 'react'
import Home from './home';
import About from './about';
import Contact from './contact';
import history from './history';
import Notfound from './notFound'
import Website from './website';
import { BrowserRouter, Switch, Route } from "react-router-dom";


class Homepage extends React.Component {
    
    render (){
        return(
            <BrowserRouter history={history}>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    <Route component = {Notfound} />
                  </Switch> 
            </BrowserRouter>
        )
    }
}

export default (Homepage);