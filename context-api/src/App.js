import './App.css';
import {ThemeProvider}from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Container from './components/Container';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <ThemeProvider> {/* 1. Wrap the components with the provider */}
        <UserProvider>
          <Container/>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;