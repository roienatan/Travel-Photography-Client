import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import Country from './Country';
import About from './Routes/About';
import Contact from './Routes/Contact';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/countries'>
                <Country />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
        </Switch>
    )
}