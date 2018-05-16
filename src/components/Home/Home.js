import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {

    return (
        <div className='home-main'>
            <div>Welcome to the Goat Black Market</div>
            {/* NOTE, I moved the links to the App component for better flow */}
        </div>
    )
}

export default Home;