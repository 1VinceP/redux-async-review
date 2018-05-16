import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='home-main'>
                <div>Welcome to the Goat Black Market</div>
                <Link to='/buy'><button>Buy Illegal Goats</button></Link>
                <Link to='/sell'><button>Sell Illegal Goats</button></Link>
                <Link to='/trade'><button>Trade Illegal Goats</button></Link>
            </div>
        )
    }
}

export default Home;