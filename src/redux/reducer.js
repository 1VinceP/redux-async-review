import axios from 'axios';

let initialState = {
    cart: [],
    ownedGoats: [],
    wantedGoat: {},
    givingGoat: {},
    swapi: {}
}

const ADD_TO_CART = 'ADD_TO_CART'
    , PURCHASE_CART = 'PURCHASE_CART'
    , GET_SWAPI = 'GET_SWAPI'
    , SET_WANTED = 'SET_WANTED'
    , SET_GIVING = 'SET_GIVING'
    , HANDLE_TRADE = 'HANDLE_TRADE'

export default function reducer( state = initialState, action ) {
    switch( action.type ) {
        case ADD_TO_CART:
            return Object.assign( {}, state, { cart: [...state.cart, action.payload] } )
        case PURCHASE_CART:
            // Set the cart to be empty, and add the purchased goats to your collection of owned goats
            // In order to keep this as a simple reference for redux, we will be nesting arrays into ownedGoats
            return Object.assign( {}, state, { cart: [], ownedGoats: [...state.ownedGoats, action.payload]} )
        case GET_SWAPI + '_FULFILLED':
            return Object.assign( {}, state, { swapi: action.payload } )
        case GET_SWAPI + '_REJECTED':
            return Object.assign( {}, state, { swapi: 'Could not get swapi' } )
        case SET_WANTED:
            return Object.assign( {}, state, { wantedGoat: action.payload } )
        case SET_GIVING:
            return Object.assign( {}, state, { givingGoat: action.payload } )

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

export function purchaseCart( cart ) {
    // Instead of setting the payload to an empty array, we handle that in the reducer
    // Now we are passing the current cart so that we can save it to the ownedGoats array
    return {
        type: PURCHASE_CART,
        payload: cart
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

export function setWanted( goat ) {

    return {
        type: SET_WANTED,
        payload: goat
    }
}

export function setGiving( goat ) {

    return {
        type: SET_GIVING,
        payload: goat
    }
}