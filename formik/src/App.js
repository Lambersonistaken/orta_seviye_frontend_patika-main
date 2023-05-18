import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

function App() {



  return (
    <div className="App">
      <h1>Sign Up</h1>
        <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        alert(values.firstName + " " + values.lastName + " " + values.email)
      }}
    >
      {
        ({handleSubmit, handleChange}) => (
          <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane"
        onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe"
        onChange={handleChange} />

        <br />
        <br />


        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form> 
        )
      }
    </Formik>
    </div>
  );
}

export default App;
