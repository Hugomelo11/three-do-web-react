import TodoList from './components/TodoList'
import { useState } from 'react';
import './App.css';

function App() {
  const [tasklist, setTaskList] = useState();
  return (
    <>
      <h1>Three-do</h1>
      <TodoList tasklist={tasklist} setTaskList={setTaskList}/>
    </>
  );
}

export default App;
