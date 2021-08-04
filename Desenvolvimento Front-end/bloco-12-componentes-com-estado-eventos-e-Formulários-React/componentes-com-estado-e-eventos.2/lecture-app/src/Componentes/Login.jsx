import React, { Component }from "react";

export default class Login extends Component {
  render() {
    const { Evalue, Pvalue, handleChange, handleSubmit} = this.props;
      return (
      <section className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email-login">Email:
            <input
              type="email"
              id='email-login'
              name="email"
              value={Evalue}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password-login">Password:
            <input
              type="password"
              id='password-login'
              name="password"
              value={Pvalue}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
      );
    }
} 