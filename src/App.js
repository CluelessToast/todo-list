import './App.css';
import Todo from './components/To-do.js';



function App() {
  return (
    <div>
      <h1>My To-dos</h1>
      <Todo text="Learn React" />
      <Todo text="Study React" />
      <Todo text="Absorb React" />

    </div>
  );
}

export default App;
