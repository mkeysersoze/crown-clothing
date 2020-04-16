import React from 'react'
import './checkout.styles.scss'

import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'


const CheckoutPage = ({ carItems, total }) => (
    <div className='checkout-page' >
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {carItems.map(item => (
            <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <div className='total'>
            TOTAL: {total}€
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    carItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)