import {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { text: "Todo 1", completed: false },
    { text: "Todo 2", completed: false },
    { text: "Todo 3", completed: false }
  ]);
  
  const [isActived, setIsActived] = useState(false);
  const input = document.querySelector('.enter-input');

  const handleClicked = () => {
    setIsActived(!isActived);
  }

  

  return (
    <div className="App">
      <h1 className='main-title'>Todos</h1>

      <div className='todo-header'>
      <button className='toggleAll' onClick={handleClicked}>Toggle All</button >
      <input className='enter-input' onSubmit={() => setTodos([...todos,{text:input.value,completed:false}])} type="text" placeholder="What's needs to be done ?" />
          
      </div>

      


      <section className='todo-section'>

        <ul className='todo-list'>
          {
            todos.map((todo,index) => (
              <li key={index} className='todo-item'>
                <input className='toggle' type="checkbox"  />
                <span className='todo-text' style={{textDecoration: isActived ? 'line-through' : ''}}>{todo}</span>
                <button className='delete'>Delete</button>
              </li>
            ))
          }
        </ul>
        
        
      </section>
      
      <footer>
        
      </footer>

    </div>
  );
}

export default App;
