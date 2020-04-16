import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => {
    console.log('I am being called')
    return {
        itemCount: selectCartItemsCount(state)
    }
}

/* We could keep it like this : 

const mapStateToProps = ({ cart: { cartItems } }) => {
    console.log('I am being called')
    return {
        itemCount: cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
            0
        )
    }
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)