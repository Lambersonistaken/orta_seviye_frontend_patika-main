import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <Header number={number < 5 ? 0 : number}/> {/* header componenti number 5 olana kadar re-render edilmez 5 olduktan sonra edilir. içindeki proplar değişince re-render edilir. */}

      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>ARTTIR</button>
    </>
  )
}

export default App
