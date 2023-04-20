
// import Header from './components/Header';
import User from './components/User';
function App() {
  return (
    <div className="App">
      <User name="İsmail Emir" surname="Lambacıoğlu"  email="lamberson@gmail.com" isLoggedIn = {true} age={22} friends={["Ali","Veli","Ahmet","İsmail","Tuğçe"]}/>
    </div>
  );
}


export default App;