import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

const SignupForm = () => {
  const initialValues = {
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    phoneNumber: Yup.string().required('Required').matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
  });

  const onSubmit = values => {
    console.log('Form data', values);
  };

  return (
    <div className="form-container">
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
        <h2>Signup</h2>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" className="error" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>
          <button type="submit">Signup</button>
          <p>
        Already have an account? <Link to="/">Signin</Link>
          </p>
        </Form>
      </Formik>
      
    </div>
  );
};

export default SignupForm;
