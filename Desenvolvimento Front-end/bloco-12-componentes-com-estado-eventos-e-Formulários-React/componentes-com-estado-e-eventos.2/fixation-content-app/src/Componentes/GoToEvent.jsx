import React, { Component } from 'react';

export default class GoToEvent extends Component {
    render() {
        const {value, handleChange} = this.props;
        return (
        <label >Will you go to the event?
            <input type="checkbox" name="goToEvent" value={value} onChange={handleChange}/>
            {!value ? 'please confirm' : 'Thanks!'}
        </label>
        );
    }
}
