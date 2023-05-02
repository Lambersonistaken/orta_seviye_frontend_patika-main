import {useState} from 'react';


function App() {

  const [name,setName] = useState("Mehmet");
  const [age,setAge] = useState(22);
  const [friends,setFriends] = useState(["Ahmet","Mehmet","Ali","Fatma","Hayriye"]);
  const [address,setAddress] = useState({title:"İstanbul",zip:34});
  let [counter,setCounter] = useState(0);
  const increase = () => {
    setCounter(counter+1);
  }

  const decrease = () => {
    setCounter(counter-1);
  }

  return (
    <div className="App">
     <h1>{name}, {age}</h1>
     <button onClick={() => setName("İsmail")}>Click!</button>
     <button onClick={() => setAge(31)} >Set Age</button>

     <hr />

     {
        friends.map((friend,index) => (
          <div key={index}>
            <h3>{friend}</h3>
            <button onClick={() => setFriends(friends.filter((friend2) => friend2 !== friend))}>Delete</button>
          </div>
        ))
     }

     <hr />

     <button onClick={() => setFriends([...friends, "Ayşe"])} >Add Ayşe as a Friend</button>


      <hr />
      <br />

      <h2>Address</h2>

      <div>{address.title} --------- {address.zip}-------- {address.region}</div>

      <br />
      <hr />

      <button onClick={() => setAddress({...address, region:"Marmara"})} >Address Update</button>

      <h1>Counter App</h1>
      <p>{counter}</p>

      

      <button onClick={increase}>+</button>
      <button onClick={decrease} >-</button>


    </div>
  );
}

export default App;
