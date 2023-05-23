import React from 'react';
import { useFormik } from 'formik';
import './App.css';
import './components/Signup'
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
     <Signup />
    </div>
  );
}

export default App;
