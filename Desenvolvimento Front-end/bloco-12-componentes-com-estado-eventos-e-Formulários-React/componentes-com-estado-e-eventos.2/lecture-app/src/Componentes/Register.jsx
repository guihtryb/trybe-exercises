import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    const { NameRValue, EmailRValue, PasswordVRegister, handleSubmit, handleChange} = this.props;
    return (
    <section className='register'>
      <h1> Register </h1>
      <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name-register">Name:
            <input name="nameRegister" type="text" id='name-register' value={NameRValue} onChange={handleChange}/>
          </label>          
          <label htmlFor="email-register">Email:
            <input name="emailRegister" type="email" id='email-register' value={EmailRValue} onChange={handleChange}/>
          </label>
          <label htmlFor="password-register">Password:
            <input name="passwordRegister" type="password" id='password-register' value={PasswordVRegister} onChange={handleChange}/>
          </label>
          <button type="submit">Sign Up</button>
      </form>
    </section>
    );
  }
}