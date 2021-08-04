// Componentes com estado controlado
// 1. faça de um deles um componente controlado,
// ou seja, elementos do formulário controlados pelo Estado
// import React, { Component } from 'react'
// import '../Form.css'

// export default class Form extends Component {
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this)
//     this.state = {
//       name: '',
//     };
//   }

//   handleChange ({ target }) {
//     this.setState({
//       name: target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//         <label> Please select your favorite tech:
//         <select >
//            <option >Python</option>
//            <option >React</option>
//            <option >JavaScript</option>
//            <option >SQL</option>
//          </select>
//          </label>
//         <label> What's your name?
//         <input type='text' name="name" value={this.state.name} onChange={this.handleChange}/>
//         </label>
//         <label> What's is your age?
//         <input />
//         </label>
//         <label> What dream are you battling to conquist this year?
//         <textarea />
//         </label>
//         </form>
//       </div>
//     );
//   }
// }

// event handlers genéricos
// 2. faça todos componentes serem controlados
// import React, { Component } from 'react'
// import '../Form.css'

// export default class Form extends Component {
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this)
//     this.state = {
//       favoriteTech: 'Python',
//       name: '',
//       age: 1,
//       goToEvent: false,
//       dreamBattlingFor: '',
//     };
//   }

//   handleChange ({ target }) {
//     const { name } = target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     const { name, age, favoriteTech, goToEvent, dreamBattlingFor } = this.state;
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//         <label> Please select your favorite tech:
//         <select name='favoriteTech' value={favoriteTech} onChange={this.handleChange}>
//            <option >Python</option>
//            <option >React</option>
//            <option >JavaScript</option>
//            <option >SQL</option>
//          </select>
//          </label>
//          <fieldset>
//           <legend> About you: </legend>
//         <label> What's your name?
//         <input type='text' name="name" value={name} onChange={this.handleChange}/>
//         </label>
//         <label> What's is your age?
//         <input type="number" name='age' value={age} onChange={this.handleChange}/>
//         </label>
//         </fieldset>
//         <label >Will you go to the event?
//           <input type="checkbox" name="goToEvent" value={goToEvent} onChange={this.handleChange}/>
//         </label>
//         <label> Put the ticket here: <i>*.pdf </i>
//           <input type="file" accept='image/*, .pdf' />
//         </label>
//         <label> What dream are you battling to conquist this year?
//         <textarea name="dreamBattlingFor" value={dreamBattlingFor} onChange={this.handleChange}/>
//         </label>
//         </form>
//       </div>
//     );
//   }
// }

// Trasmitindo informações do componente filho para o pai
// import React from 'react';

// class Button extends React.Component {
//   render() {
//     /* A função que altera o estado do componente pai chega
//        ao componente filho via `props`! */
//     const { handleClick } = this.props;

//     return (<button type="button" onClick={handleClick} >Contar clique!</button>);
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();

//     this.handleClick = this.handleClick.bind(this);

//     // O componente pai é o dono do estado!
//     this.state = {
//       numeroDeCliques: 0,
//     };
//   }

//   /* A função de alterar o estado é definida no componente pai*/
//   handleClick() {
//     this.setState((estadoAnterior) => ({
//       numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
//     }));
//   }

//   /* O componente filho recebe a função de alterar estado do pai via `props`,
//      na forma de uma callback */
//   render() {
//     return (
//       <div>
//         <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
//         <Button handleClick={this.handleClick} />
//       </div>
//     );
//   }
// }

// export default App 

// Para Fixar 
// Dois dos meus campos serem componentes filhos do componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
import React, { Component } from 'react'
import '../Form.css'
import GoToEvent from './GoToEvent';
import Dream from './Dream';

export default class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      favoriteTech: 'Python',
      name: '',
      age: 1,
      goToEvent: false,
      dreamBattlingFor: '',
      formularioComErros: true,
    };
  }

  handleError () {
    const {name, goToEvent, dreamBattlingFor} = this.state;
    
    const errorCases = [
      !name.length,
      dreamBattlingFor.length <= 6,
      !goToEvent,
    ];
    
    const formularioPreenchido = errorCases.every((error) => error === false);    
    
    this.setState({
      formularioComErros: !formularioPreenchido,
    })
  }
  
  handleChange ({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { name, age, favoriteTech, goToEvent, dreamBattlingFor, formularioComErros } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
        <label> Please select your favorite tech:
        <select name='favoriteTech' value={favoriteTech} onChange={this.handleChange}>
           <option >Python</option>
           <option >React</option>
           <option >JavaScript</option>
           <option >SQL</option>
         </select>
         </label>
         <fieldset>
          <legend> About you: </legend>
        <label> What's your name?
        <input type='text' name="name" value={name} onChange={this.handleChange}/>
        { !name.length ? 'Invalid Name' : 'Great!' }
        </label>
        <label> What's is your age?
        <input type="number" name='age' value={age} onChange={this.handleChange}/>
        </label>
        </fieldset>
        <label> Put the ticket here: <i>*.pdf </i>
          <input type="file" accept='image/*, .pdf' />
        </label>
        <GoToEvent value={ goToEvent } handleChange={this.handleChange} />
        <Dream value={ dreamBattlingFor } handleChange={this.handleChange} />
        </form>
        { formularioComErros ? <span style={ { color: 'yellow' } }>Please fill all the fields</span>
        : <span style={ { color: 'green' } }>Todos os campos foram preenchido!</span>
        }
      </div>
    );
  }
}

