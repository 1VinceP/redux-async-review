import axios from 'axios';
import data from '../data';

let initialState = {
    goatsForTrade: data,
    cart: [],
    ownedGoats: [],
    wantedGoat: {},
    givingGoat: {},
    swapi: {}
}

const ADD_TO_CART = 'ADD_TO_CART'
    , PURCHASE_CART = 'PURCHASE_CART'
    , SELL_GOAT = 'SELL_GOAT'
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
            return Object.assign( {}, state, { cart: [], ownedGoats: action.payload } )
        case SELL_GOAT:
            return Object.assign( {}, state, { ownedGoats: action.payload } )
        case GET_SWAPI + '_FULFILLED':
            return Object.assign( {}, state, { swapi: action.payload } )
        case GET_SWAPI + '_REJECTED':
            return Object.assign( {}, state, { swapi: 'Could not get swapi' } )
        case SET_WANTED:
            return Object.assign( {}, state, { wantedGoat: action.payload } )
        case SET_GIVING:
            return Object.assign( {}, state, { givingGoat: action.payload } )
        case HANDLE_TRADE:
            const { forTrade: goatsForTrade, owned: ownedGoats } = action.payload
            return Object.assign( {}, state, { goatsForTrade, ownedGoats, wantedGoat: {}, givingGoat: {} } )

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

export function purchaseCart( cart, ownedGoats ) {
    // Instead of setting the payload to an empty array, we handle that in the reducer
    // Now we are passing the current cart so that we can save it to the ownedGoats array
    for( let i = 0; i < cart.length; i++ ) {
        ownedGoats.push( cart[i] )
    }

    return {
        type: PURCHASE_CART,
        payload: ownedGoats
    }
}

export function sellGoat( ownedGoats, i ) {

    ownedGoats.splice( i, 1 )

    return {
        type: SELL_GOAT,
        payload: ownedGoats
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

export function setWanted( goat, i ) {

    goat.index = i

    return {
        type: SET_WANTED,
        payload: goat
    }
}

export function setGiving( goat, i ) {

    goat.index = i

    return {
        type: SET_GIVING,
        payload: goat
    }
}

export function handleTrade( forTrade, owned, wanted, giving ) {
    forTrade.splice( wanted.index, 1, giving )
    owned.splice( giving.index, 1, wanted )

    return {
        type: HANDLE_TRADE,
        payload: { forTrade, owned }
    }
}