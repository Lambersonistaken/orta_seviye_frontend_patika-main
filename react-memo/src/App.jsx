import { useCallback, useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0)

  const increment = useCallback(() => { 
    setNumber((prevNumber) => prevNumber + 1)
  }, []) // useCallback ile sarmaladık. useCallback ile sarmaladığımız componentler sadece kendi state'leri değiştiğinde re-render olur.

    return (
    <>

      <Header increment={increment}/> {/* header componenti number 5 olana kadar re-render edilmez 5 olduktan sonra edilir. içindeki proplar değişince re-render edilir. */}

      <hr />
      <h1>{number}</h1>
      
    </>
  );
}


export default App
