import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWanted, setGiving } from '../../redux/reducer';
import data from '../../data';

function Trade(props) {

    let tradeableGoats = data.map( (goat, i) => {
        return (
            <div key={i}>
                <img onClick={() => props.setWanted(goat)} src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
            </div>
        )
    } )

    // Same logic as in the sell component
    let goats = props.ownedGoats.reduce( (acc, val) => acc.concat(val), [] )
    let mappedGoats = goats.map( (goat, i) => {
        return (
            <div key={i}>
                <img onClick={() => props.setGiving(goat)} src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
            </div>
        )
    } )
    
    return (
        <div className='trade-main'>
            <div>Goats for trade</div>
            <section className='trade-goats'>{tradeableGoats}</section>

            <div>Your goats</div>
            <section className='trade-goats'>{mappedGoats}</section>

            <section className='trade-manager'>
                <div>Wanted goat: </div>
                <img src={props.wantedGoat.img} />
                <div>Giving goat: </div>
                <img src={props.givingGoat.img} />
                <button>Complete trade</button>
            </section>
            
        </div>
    )
}

function mapStateToProps( state ) {
    const { ownedGoats, wantedGoat, givingGoat } = state;

    return {
        ownedGoats,
        wantedGoat,
        givingGoat
    };
}

export default connect( mapStateToProps, { setWanted, setGiving } )(Trade);