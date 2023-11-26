import React, { useState } from 'react';
import axios from 'axios';
import "../home/styles/register.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const userData = { name, email, password };

    axios.post('http://localhost:3001/register', { name, email, password })
    .then(result => {
      console.log(result);
      // Navigate to the 'main' page when registration is successful
      navigate('/');
    })
    .catch(err => console.error("Registration error: ", err));
};

  return (
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
      <div className="register">
        <h2 className='mb-3 title'>New User Registration</h2>
        <form className='needs-validation' onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="name" className='lb form-label'>Name</label>
            <input
              type="text"
              className='form-control'
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter your name
            </div>
          </div>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="email" className='lb form-label'>Email Address</label>
            <input
              type="email"
              className='form-control'
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter your email
            </div>
          </div>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="password" className='lb form-label'>Password</label>
            <input
              type="password"
              className='form-control'
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter password
            </div>
          </div>
          <button type='submit' className='reg btn btn-success w-50 mt-2'>REGISTER</button>
        </form>
      </div>
    </div>
  );
}
