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
        <div className='main'>
            {cart}
            {/* We now have to pass the current cart to redux to save to the
                ownedGoats array */}
            <button onClick={() => props.purchaseCart(props.cart, props.ownedGoats)}>Purchase Cart</button>
        </div>
    )
}

function mapStateToProps( state ) {
    const { cart, ownedGoats } = state
    return {
        cart,
        ownedGoats
    }
}

export default connect( mapStateToProps, { purchaseCart } )(Cart);