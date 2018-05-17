import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWanted, setGiving, handleTrade } from '../../redux/reducer';
import data from '../../data';

function Trade(props) {
    const { goatsForTrade, setWanted, ownedGoats, setGiving, wantedGoat, givingGoat } = props

    let tradeGoats = goatsForTrade.map( (goat, i) => {
        return (
            <div key={i}>
                <img onClick={() => setWanted(goat, i)} src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
            </div>
        )
    } )

    let goats = ownedGoats.map( (goat, i) => {
        return (
            <div key={i}>
                <img onClick={() => setGiving(goat, i)} src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
            </div>
        )
    } )
    
    return (
        <div className='trade-main'>
            <div>Goats for trade</div>
            <section className='trade-goats'>{tradeGoats}</section>

            <div>Your goats</div>
            <section className='trade-goats'>{goats}</section>

            <section className='trade-manager'>
                <div>Wanted goat: </div>
                <img src={wantedGoat.img} />
                <div>Giving goat: </div>
                <img src={givingGoat.img} />
                {/* We have spread over these goats when we pass them in, otherwise redux gets updated with itself, breaking immutability. We do the same thing when selling goats */}
                <button onClick={() => props.handleTrade([...goatsForTrade], [...ownedGoats], wantedGoat, givingGoat)}>Complete trade</button>
            </section>
            
        </div>
    )
}

function mapStateToProps( state ) {
    const { goatsForTrade, ownedGoats, wantedGoat, givingGoat } = state;

    return {
        goatsForTrade,
        ownedGoats,
        wantedGoat,
        givingGoat
    };
}

export default connect( mapStateToProps, { setWanted, setGiving, handleTrade } )(Trade);