import { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Emir");

  useEffect(() => {
    console.log("Component Mount Edildi");
  }, []);
  
  useEffect(() => {
    console.log("number State Güncellendi");
  },[number]);
  
  useEffect(() => {
    console.log("name State Güncellendi");
  },[name]);





  return (
    <div className="App">
    <h1>{number}</h1>
    <button onClick={() => setNumber(number+1)} >+</button>

    <hr />

    <h1>{name}</h1>
    <button onClick={() => setName("İsmail")} >Change Name</button>
    </div>
  );
}

export default App;
