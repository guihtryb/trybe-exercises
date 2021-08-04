import React, { Component } from 'react';

export default class Dream extends Component {
    render() {
        const {value, handleChange} = this.props;
        return (
        <label> What dream are you battling to conquist this year?
          <textarea name='dreamBattlingFor' value={value} maxLength='50' onChange={handleChange}/>
          {value.length <= 6 ? 'Invalid Dream' : "Let's do it!"}
        </label>
        );
    }
}
