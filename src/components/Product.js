import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product__details">
    <div className="product__detail--col-1">
      <h3 className="product__title">{title}</h3>
      <p className="product__inventory">{inventory} REMAINING</p>
    </div>
    <div className="product__detail--col-2">
      <div className="product__price">${price}</div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
