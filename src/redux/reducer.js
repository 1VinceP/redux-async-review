import axios from 'axios';

let initialState = {
    cart: [],
    ownedGoats: [],
    pendingTrades: [],
    swapi: {}
}

const ADD_TO_CART = 'ADD_TO_CART'
    , PURCHASE_CART = 'PURCHASE_CART'
    , GET_SWAPI = 'GET_SWAPI'

export default function reducer( state = initialState, action ) {
    switch( action.type ) {
        case ADD_TO_CART:
            return Object.assign( {}, state, { cart: [...state.cart, action.payload] } )
        case PURCHASE_CART:
            return Object.assign( {}, state, { cart: action.payload } )
        case GET_SWAPI + '_FULFILLED':
            return Object.assign( {}, state, {swapi: action.payload} )
        case GET_SWAPI + '_REJECTED':
            return Object.assign( {}, state, {swapi: 'Could not get swapi'} )

        default:
            return state
    }
}

export function addToCart( goat ) {

    return {
        type: ADD_TO_CART,
        payload: goat
    }
}

export function purchaseCart() {

    return {
        type: PURCHASE_CART,
        payload: []
    }
}

export function getSwapi() {
    let character = axios.get( 'https://swapi.co/api/people/1' )
        .then( response => response.data )
        .catch( err => console.log( err ) )

    return {
        type: GET_SWAPI,
        payload: character
    }
}