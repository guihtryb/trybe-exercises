import './App.css';
import React from 'react';


const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
      {console.log(props.children)}
      {console.log(props)}
    </div>
  )
}
class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <p id="Adress" className="adrees-container">Tworoolsbang 0 Tworools bag 0</p>
          <h3> This is my third child </h3>
          <h1> This is my fourth child </h1>
        </ComponentePai>
      </div>
    )
  }
}


export default App;
