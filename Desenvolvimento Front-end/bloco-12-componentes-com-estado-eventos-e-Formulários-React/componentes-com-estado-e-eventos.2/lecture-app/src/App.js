import React, { Component } from 'react';
import './App.css';

import Login from './Componentes/Login';
import Register from './Componentes/Register';

class App extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        name: '',
        nameRegister: '',
        emailRegister: '',
        passwordRegister: '',  
      }
  
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      const { email } = this.state;
      alert(`Sucesso no Login ${email}!`);
    };

    handleSubmitRegister = (event) => {
      event.preventDefault();
      const { emailRegister } = this.state;
      alert(`Sucesso no Registro ${emailRegister}!`)
    } 

    handleChange({target}) {
      const {name, value} = target;
      this.setState({
        [name]: value,
      })
    }
    render() {
      const {email, password, emailRegister, passwordRegister, nameRegister} = this.state;
    return (
    <main className='App'>
      <Login email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      <Register nameRegister={nameRegister} emailRegister={emailRegister} passwordRegister={passwordRegister} handleChange={this.handleChange} handleSubmit={this.handleSubmitRegister} /> 
    </main>
    );
  }
}

export default App;
