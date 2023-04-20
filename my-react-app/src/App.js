
// import Header from './components/Header';
import User from './components/User';

const friends = [{
  id: 1,
  name: "John",
  surname: "Doe",
  age: 25,
}, {
  id: 2,
  name: "Jane",
  surname: "Doe",
  age: 24,
}, {
  id: 3,
  name: "Jack",
  surname: "Doe",
  age: 23,
}, {
  id: 4,
  name: "Jill",
  surname: "Doe",
  age: 22,
}, {
  id: 5,
  name: "Joe",
  surname: "Doe",
  age: 21,
}];
function App() {
  return (
    <div className="App">
      <User name="İsmail Emir" surname="Lambacıoğlu"  email="lamberson@gmail.com" /*isLoggedIn = {true}*/ age={22} friends={friends} address = {{
        city: "İstanbul",
        country: "Türkiye", 
        zipCode: 34000,
      }}/>
    </div>
  );
}


export default App;