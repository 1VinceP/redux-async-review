import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/buy'><button>Buy Illegal Goats</button></Link>
        <Link to='/sell'><button>Sell Illegal Goats</button></Link>
        <Link to='/trade'><button>Trade Illegal Goats</button></Link>
        <Link to='/cart'><button>View Illegal Cart</button></Link>
        {routes}
      </div>
    );
  }
}

export default App;