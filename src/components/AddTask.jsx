import { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function AddTask({ setTasklist }) {
  const [task, setTask] = useState("");
  const addTask = (value) => {
    fetch("https://three-do-api-hs.web.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    return <Search 
    value={task}
    enterButton="Add"
     size="Large" 
     onSearch={addTask} 
     onChange={e => setTask(e.target.value)}
     />;
}
