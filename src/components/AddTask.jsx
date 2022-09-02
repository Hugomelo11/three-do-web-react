import { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function AddTask({ setTasklist, token }) {
  const [task, setTask] = useState("");
  const addTask = (value) => {
    // fetch("https://three-do-api-hs.web.app/tasks", {
    fetch("http://localhost:5560/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ task, done: false }),
    })
      .then((results) => results.json())
      .then((data) => {
        setTasklist(data);
        setTask('')
      })
      .catch(console.error);
  };
    return (
    <div className='add-task'>
    <Search 
    value={task}
    enterButton="Add"
     size="Large" 
     onSearch={addTask} 
     onChange={e => setTask(e.target.value)}
     />
     </div>
    )
     
}
