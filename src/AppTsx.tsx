import { useState } from "react";
import { Tasks } from "./data";

function App() {
  // const [showPage, setShowPage] = useState(false); /*показывает/скрывает форму*/

  const [tasks, setTasks] = useState(Tasks); /*Массив задач*/
  const [selectedTask, setSelectedTask] = useState(Tasks[0]);

  return (
    <>
      App
      <Task task={selectedTask} />
    </>
  );
}

function Task({ task }) {
  return (
    <div>
      task
      <p>{JSON.stringify(task)}</p>
      <p>{task.title}</p>
      <p>{task.description}</p>
      {/* <p>{task.dueDate}</p> */}
      <Subtasks subTasks={task.subTasks} />
    </div>
  );
}

// function Subtasks({ subTasks }) {
//   return (
//     <>
//       {subTasks.map((subtask, i) => (
//         <div>
//           <p>{subtask.title}</p>
//           <p>{subtask.description}</p>
//         </div>
//       ))}
//     </>
//   );
// }
function Subtasks({
  subTasks,
}: {
  subTasks: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <>
      {subTasks.map((subtask, i) => (
        <div>
          <p>{subtask.title}</p>
          <p>{subtask.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
