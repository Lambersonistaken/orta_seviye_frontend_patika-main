import Header from './components/Header';
import Product from './components/Product';
import { useState, useEffect } from 'react';
import products from './products.json';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  return (
    <>
    <Header money={money}/>
    {
      products.map(product => (
        <Product basket={basket} setBasket={setBasket} product={product}/>  
      ))
    }
    </>
  );
}

export default App;
