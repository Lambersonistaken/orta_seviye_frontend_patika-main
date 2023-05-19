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
        gender: 'male',
        hobbies: [],
        country: 'Turkey'
      }}
      onSubmit={async (values) => {
        alert(values.firstName + " " + values.lastName + " " + values.email + " " + values.gender)
      }}
    >
      {
        ({handleSubmit, handleChange, values}) => (
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

        <br />
        <br />
          <span>Male</span>
          <input type='radio' name='gender' value="male" onChange={handleChange} checked={values.gender === "male"}/>
          <span>Female</span>
          <input type='radio' name='gender' value="female" onChange={handleChange} />
          <br />
          <br />

          <div>
            Football
            <input type="checkbox" name='hobbies' value='Play Football' onChange={handleChange} />
          </div>

          <div>
            Cinema
            <input type="checkbox" name='hobbies' value='Cinema' onChange={handleChange} />
          </div>

          <div>
            Hiking
            <input type="checkbox" name='hobbies' value='Hiking' onChange={handleChange} />
          </div>
          <br />


          <select name="country" id="" onChange={handleChange}>
            <option value="Turkey">Turkey</option>
            <option value="Italy">Italy</option>
            <option value="Germany">Germany</option>
          </select>

          <br />

          <br />
          

        <button type="submit">Submit</button>
        <br />
        <br />

          <code>
            {JSON.stringify(values, null, 2)}
          </code>

      </form> 
        )
      }
    </Formik>
    </div>
  );
}

export default App;
