import React, { Component } from 'react';

const task = (value) =>{ 
    return (
        <li>_{value}</li>
        );
    }

const tasks = ['tomar Banho', 'Por ração para cachorros', 'trabalhar nos projetos'];

class Task extends Component {
    render () {
        return (
            <ol>{ tasks.map((tarefa) => task(tarefa))}</ol>
        );
    }
}

export default Task;
