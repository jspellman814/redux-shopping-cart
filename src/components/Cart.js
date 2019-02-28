import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Icon from './SVGIcon'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className="cart__no-products">
      <Icon width={70} /><br/>
      Please add some products<br/>
      to your cart.</div>
  )

  return (
    <div className={hasProducts ? 'cart' : 'cart cart--empty'}>
      <h3>Your Cart</h3>
      <hr />
      <div className="cart__nodes">{nodes}</div>
      { hasProducts ? (
        <div className="cart__total">
          <div className="label">Total</div>
            <div className="price">&#36;{total}</div>
        </div>
      ) : '' }
      { hasProducts ? (
        <button className="cart__checkout" onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      ) : '' }
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
