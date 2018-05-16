import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, getSwapi } from '../../redux/reducer';
import data from '../../data';

class Buy extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {

        let goats = data.map( (goat, i) => {
            return (
                <div key={i}>
                    <img src={goat.img} alt='goat'/>
                    <div>{goat.name}</div>
                    <div>${goat.price}</div>
                    <button onClick={() => this.props.addToCart(goat)}>Add to Cart</button>
                </div>
            )
        } )

        return (
            <div className='buy-main'>
                <button onClick={() => this.props.getSwapi()}>Get Swapi</button>
                {goats}
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return { cart: state.cart }
}

export default connect( mapStateToProps, { addToCart, getSwapi } )(Buy);

