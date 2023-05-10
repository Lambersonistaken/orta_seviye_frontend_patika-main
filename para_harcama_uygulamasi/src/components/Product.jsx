import React from 'react'
import styles from '../styles/product.module.css'

function Product({product, basket, setBasket}) {
  return (
    <>
    <div className={styles.product}>
    <h6>{product.title}</h6>
    <div className="price">$ {product.price}</div>
    <div className="actions">
        <button>Sat</button>
        <span className="amount">0</span>
        <button>Satın Al</button>
    </div>
    </div>
    
    </>
  )
}

export default Product
