import './App.css';
import {ThemeProvider}from './context/ThemeContext';
import Container from './components/Container';
function App() {
  return (
    <div className="App">
      <ThemeProvider> {/* 1. Wrap the components with the provider */}
        <Container/>
      </ThemeProvider>
    </div>
  );
}

export default App;