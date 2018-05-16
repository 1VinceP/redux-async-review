import React, { Component } from 'react';
import { connect } from 'react-redux';

function Sell(props) {

    // Because we have nested the arrays, we now have to flatten them into a single array
    // I used a reduce method, but those can be complicated, so here's a for loop if you prefer that
        // let goats = []
        // for( let i = 0; i < props.ownedGoats.length; i++ ) {
        //     props.ownedGoats[i].map( goat => {
        //         goats.push( goat )
        //     } )
        // }
    let goats = props.ownedGoats.reduce( (acc, val) => acc.concat(val), [] )

    // Now that we have our flattened array, we can map over it to display our goats
    let mappedGoats = goats.map( (goat, i) => {
        return (
            <div key={i}>
                <img src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
                <div>${goat.price}</div>
            </div>
        )
    } )

    return (
        <div className='main'>
            {mappedGoats}
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

export default connect( mapStateToProps, null )(Sell);