import { useState, useMemo } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0)

  const data = useMemo(() => {
    return {
      name: "Emir",
    }
  }, [])

    return (
    <>

      <Header number={number < 5 ? 0 : number} data={data}/> {/* header componenti number 5 olana kadar re-render edilmez 5 olduktan sonra edilir. içindeki proplar değişince re-render edilir. */}

      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>ARTTIR</button>
    </>
  );
}


export default App
