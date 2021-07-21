import React, { Component } from 'react';

const task = (value) =>{ 
  return (
    <li>{value}</li>
  );
}

class Task extends Component {
    render () {
        return task("Tomar Banho");
    }
}

export default Task;
