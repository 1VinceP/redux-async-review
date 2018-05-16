import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Cart from './components/Cart';
import Sell from './components/Sell/Sell';
import Trade from './components/Trade/Trade';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/buy' component={Buy} />
        <Route path='/cart' component={Cart} />
        <Route path='/sell' component={Sell} />
        <Route path='/trade' component={Trade} />
    </Switch>
)