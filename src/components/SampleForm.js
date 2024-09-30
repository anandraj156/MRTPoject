import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import './LoginSignup.css';
const SampleForm = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
  });

  const onSubmit = values => {
    console.log('Form data', values);
  };

  return (
    <div className="form-container">
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
        <h2>Login</h2>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
          <p>
        Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </Form>
      </Formik>
      
    </div>
  );
};

export default SampleForm;
