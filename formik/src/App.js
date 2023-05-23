import React from 'react';
import { useFormik } from 'formik';
import './App.css';

function App() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      console.log(values)
    },
  });


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
