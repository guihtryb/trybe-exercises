import './App.css'

const Task = (value) => {
  return (
    <li className="task-content">{value}</li>
  );
}

const appointments = ['Organize my GitHub', 'Refactor To-do list projec', 'Refactor pixel art project', 'Build a portfolio based in React'];

function App() {
  return (
    <ul>
      {Task('Buy bread')}
      {appointments.map((appointment) => (Task(appointment)))}
    </ul>
  );
}

export default App;
