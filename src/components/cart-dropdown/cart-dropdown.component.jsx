import React from 'react'

import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => {
    console.log('cart-dropdown component is being called')
    return { cartItems: selectCartItems(state) }
}

// We could also do this
/*const mapStateToProps = (state) => {
    console.log('cart-dropdown component is being called')
    return { cartItems: state.cart.cartItems }
}
*/

export default connect(mapStateToProps)(CartDropDown)