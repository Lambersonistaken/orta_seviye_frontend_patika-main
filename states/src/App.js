import {useState} from 'react';


function App() {

  const [name,setName] = useState("Mehmet");
  const [age,setAge] = useState(22);
  const [friends,setFriends] = useState(["Ahmet","Mehmet","Ali","Fatma","Hayriye"]);

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


    </div>
  );
}

export default App;
