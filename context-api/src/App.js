import './App.css';
import {ThemeProvider}from './context/ThemeContext';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Button/>
      </ThemeProvider>
    </div>
  );
}

export default App;