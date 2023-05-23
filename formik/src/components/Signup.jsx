import React from 'react';
import { useFormik } from 'formik';
import './App.css';

function Signup() {
  return (
    <div>
       <h1>Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>

        <label>Email </label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <br />
        <br />

        <label>Password </label>
        <input value={formik.values.password} name='password' type='password' placeholder='password' onChange={formik.handleChange} />

        <br />
        <br />

        <label>Confirm Password </label>
        <input value={formik.values.confirmPassword} name='confirmPassword' type='password' placeholder='confirm password' onChange={formik.handleChange} />

        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />

          <code>
            {JSON.stringify(formik.values, null, 2)}
          </code>

      </form>
    </div>
  )
}

export default Signup
