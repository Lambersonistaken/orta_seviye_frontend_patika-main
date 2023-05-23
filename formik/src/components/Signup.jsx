import React from 'react';
import { useFormik } from 'formik';
import '../App.css'
import validationSchema from './Validations';

function Signup() {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        onSubmit: values => {
          console.log(values)
        },
        validationSchema 
      });

      console.log(formik.errors)

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

        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <br />
        <br />

        <label>Password </label>
        <input value={formik.values.password} name='password' type='password' placeholder='password' onChange={formik.handleChange} />

        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

        <br />
        <br />

        <label>Confirm Password </label>
        <input value={formik.values.confirmPassword} name='confirmPassword' type='password' placeholder='confirm password' onChange={formik.handleChange} />

        {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}

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
