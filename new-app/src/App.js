import './App.css';
import {useState} from "react";

function App() {

  const [info,setInfo] = useState([{name:"",surname:"",number:""}]);
 

  return (
    <div className="App">
    <h1>Contact List</h1>

    <label htmlFor="name">Name</label>
    <input id='name' type="text"  />
    <br />
    <br />
    
    <label htmlFor="surname">Surname</label>
    <input id='surname' type="text"  />
    <br />
    <br />

    <label htmlFor="number">Phone Number</label>
    <input id='number' type="text"  />
    <br />
    <br />

    <button onClick={() => {
      setInfo([...info, {name:document.getElementById("name").value, surname:document.getElementById("surname").value, number:document.getElementById("number").value}])
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("number").value = "";
    }} >Add Contact</button>

    <br />
    <br />
    <hr />
  

    {
      info.map((item,index) => (
        <div key={index}>
          <h3>{item.name} {item.surname} {item.number}</h3>

          {item.number && <button onClick={() => {
            setInfo(info.filter((item2) => item2 !== item))
          }}>Delete</button>}
        </div>
      ))
    }
      


    
    </div>
  );
}

export default App;
