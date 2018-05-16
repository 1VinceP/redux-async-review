import React from 'react';
import { connect } from 'react-redux';
import { purchaseCart } from '../redux/reducer';

function Cart( props ) {
    let cart = props.cart.map( (goat, i) => {
        return (
            <div key={i}>
                <img src={goat.img} alt='goat'/>
                <div>{goat.name}</div>
                <div>${goat.price}</div>
            </div>
        )
    } )

    return (
        <div>
            {cart}
            <button onClick={() => props.purchaseCart()}>Purchase Cart</button>
        </div>
    )
}

function mapStateToProps( state ) {
    return { cart: state.cart }
}

export default connect( mapStateToProps, { purchaseCart } )(Cart);