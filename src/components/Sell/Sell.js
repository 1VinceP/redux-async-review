/**
 * GETTING STARTED ON THE SELL PAGE
 * 1. Display 'owned goats' from Redux
 *   1.1 Get goats into 'owned goats' list on Redux
 *      1.1.1 On purchase, add cart to 'owned goats list' then clear cart
 * 
 * 2. Sell goats
 *   2.1 Remove goat from 'owned goats' list on Redux
 *      2.1.1 Redux.purchaseCart( cart ) {
 *              return {
 *                  type: PURCHASE_CART,
 *                  payload: cart
 *              }
 *            }
 * 
 *            Redux.reducer( ... ) {
 *              ...
 *              case PURCHASE_CART:
 *                  return Object.assign({}, state, {cart: [], ownedGoats: [...state.ownedGoats,                                    action.payload] })
 *              ...
 *            }
 * 
 *  //////// REMEMBER TO PASS props.cart IN onCLICK ////////
 */

import React, { Component } from 'react';

class Sell extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                Sell Page
            </div>
        )
    }
}

export default Sell;