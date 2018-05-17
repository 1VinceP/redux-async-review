import React, { Component } from 'react';
import { sellGoat } from '../../redux/reducer';
import { connect } from 'react-redux';

function Sell(props) {
    const { sellGoat, ownedGoats } = props
    // map over the owned goats
    let goats = ownedGoats.map( (goat, i) => {
        return (
            <div key={i}>
                <img src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
                <div>${goat.price}</div>
                {/* We have spread over these goats when we pass them in, otherwise redux gets updated with itself, breaking immutability. We do the same thing when trading goats */} 
                <button onClick={() => sellGoat([...ownedGoats], i)}>Sell Goat</button>
            </div>
        )
    } )

    return (
        <div className='main'>
            {goats}
        </div>
    )
}

function mapStateToProps( state ) {
    // Destructuring off of state
    const { ownedGoats } = state;

    return {
        ownedGoats
    };
}

export default connect( mapStateToProps, { sellGoat } )(Sell);