import React from 'react'
import ProductsContainer from './ProductsContainer'
import Modal from './Modal'

const App = () => (
  <div>
    <header>
      <h1>Acme Store</h1>
      <Modal />
    </header>
    <hr/>
    <ProductsContainer />
  </div>
)

export default App
