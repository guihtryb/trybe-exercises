const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {Task('Buy bread')}
    </ul>
  );
}

export default App;
