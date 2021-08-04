import React, {Component} from 'react';
import { capitalize, toUpper } from 'lodash';

export default class Name extends Component {
  render() {
    const { value, handleChange } = this.props
      return(<label>Name:{' '}
      <input
        name='name' 
        type="text" 
        value={toUpper(value)} 
        onChange={handleChange} 
        maxLength='40' 
        required={true}
      />
        {value.length < 5 ? ' Nome inválido!' : ` Nice to meet you ${capitalize(value).split(' ', 1)}!`}
      </label>);
  }

}