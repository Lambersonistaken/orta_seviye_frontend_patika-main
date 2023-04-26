import {useState} from 'react';


function App() {

  const [name,setName] = useState("Mehmet");
  const [age,setAge] = useState(22);

  return (
    <div className="App">
     <h1>{name}, {age}</h1>
     <button onClick={() => setName("İsmail")}>Click!</button>
     <button onClick={() => setAge(31)} >Set Age</button>
    </div>
  );
}

export default App;
