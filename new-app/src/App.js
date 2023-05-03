import './App.css';
import {useState} from "react";

function App() {

  const [info,setInfo] = useState([{name:"",surname:"",number:""}]);
 

  return (
    <div className="App">
    <h1>Contact List</h1>

    <input id='name' type="text" placeholder='Name' />
    <br />
    <br />
    
    <input id='surname' type="text" placeholder='Surname'  />
    <br />
    <br />


    <input id='number' type="text" placeholder='Phone Number' />
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
