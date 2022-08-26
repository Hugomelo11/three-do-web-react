import { useEffect } from "react";

export default function TodoList({ tasklist, setTasklist }) {
  // call the api and use setTaskList to fill in state
  useEffect(() => {
    fetch('https://three-do-api-hs.web.app/tasks')
     .then(results => results.json())
     .then(setTasklist)
     .catch(console.error);
  }, [setTasklist]);
  if (!tasklist) {
    return <h2>No tasks to complete!</h2>;
  }

  return (
    <ul>
      {tasklist.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
}
