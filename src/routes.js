import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Cart from './components/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/buy' component={Buy} />
        <Route path='/cart' component={Cart} />
    </Switch>
)