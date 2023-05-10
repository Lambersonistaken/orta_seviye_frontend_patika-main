import React from 'react'
import styles from '../styles/product.module.css'

function Product({product, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id) // ürün daha önce eklenmiş mi

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // ürün daha önce eklenmiş
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
           
        }else{
           setBasket([...basket,{
                id:product.id,
                amount:1
           }])
        }

    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id) // ürün daha önce eklenmiş mi
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    }


  return (
    <>
    <div className={styles.product}>
    <h6>{product.title}</h6>
    <div className="price">$ {product.price}</div>
    <div className="actions">
        <button onClick={removeBasket} disabled={!basketItem}>Sat</button>
        <span className="amount">{basketItem && basketItem.amount || 0 }</span>
        <button onClick={addBasket}>Satın Al</button>
    </div>
    </div>
    
    </>
  )
}

export default Product
