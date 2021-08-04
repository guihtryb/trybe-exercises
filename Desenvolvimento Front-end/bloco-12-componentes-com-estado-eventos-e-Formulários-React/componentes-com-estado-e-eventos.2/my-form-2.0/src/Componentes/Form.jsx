import React, { Component} from 'react';
import '../forms.css'
import Name from './Name';

export default class Form extends Component {
  constructor() {
    super() 
    this.handleChange = this.handleChange.bind(this);
    this.removeNum = this.removeNum.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      town: '',
      residence: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  removeNum({target}) {
    let { name, value } = target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
   this.setState({
     [name]: value
   })
  };

  render() {
    const { name, email, cpf, adress, city, town, residence } = this.state
    return(
      <form className='forms'>
        <fieldset>
          <legend>Personal Info:</legend>
        <Name value={name} handleChange={this.handleChange} />
        <label>Email:{' '}
        <input
          name='email'
          type="texto" 
          value={email} 
          onChange={this.handleChange} 
          maxLength='50' 
          required
        />
          {email.match(/@gmail.com/g) ? ' Ok!' : ` Email inválido!`}
        </label>
        <label>CPF:{' '}
        <input name='cpf' 
          type="texto" 
          value={cpf} 
          onChange={this.handleChange} 
          maxLength='11' 
          required={true}
        />
          {cpf.length <= 10 ? ' CPF inválido!' : `Great! `}
        </label>
        <label>Adress:{' '}
        <input 
          name='adress' 
          type="texto" 
          value={adress.replace(/[^a-zA-Z0-9{ }]/g, '')} 
          onChange={this.handleChange} 
          maxLength='200' 
          required={true}/>
        {adress.length <= 10 ? 'Endereço inválido!' : 'Ok!'}
        </label>
        <label>City:{' '}
        <input 
          name='city' 
          type="texto" 
          value={city} 
          onChange={this.handleChange} 
          onBlur={this.removeNum} 
          maxLength='28' required={true}
        />
        </label>
        <label>State:{' '}
        <select name='town'  
          value={town} 
          onChange={this.handleChange} 
          required={true}
        >
          <option value="AC">AC</option>
          <option value="AP">AP</option>
          <option value="AL">AL</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MG">MG</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PE">PE</option>
          <option value="PR">PR</option>
          <option value="PI">PI</option>
          <option value="RN">RN</option>    
          <option value="RS">RS</option>
          <option value="RO">RO</option>
        </select>
        </label>
        <label htmlFor="residence" value={residence} onChange={this.handleChange}> Type:
        <input type='radio' id='House' value='Casa' name='residence' /> 
        <label htmlFor="House">Casa</label>
        <input type='radio' id='apartament' value='Apartamento' name='residence' /> 
        <label htmlFor="apartament">Apartamento</label>
        </label>
        </fieldset>
      </form>
    );
  }
}
