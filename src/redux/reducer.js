let initialState = {
    cart: [],
    ownedGoats: [],
    pendingTrades: []
}

const ADD_TO_CART = 'ADD_TO_CART'
    , PURCHASE_CART = 'PURCHASE_CART'

export default function reducer( state = initialState, action ) {
    switch( action.type ) {
        case ADD_TO_CART:
            return Object.assign( {}, state, { cart: [...state.cart, action.payload] } )
        case PURCHASE_CART:
            return Object.assign( {}, state, { cart: action.payload } )

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