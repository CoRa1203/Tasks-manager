import { useState } from "react";
import SideBar from "./components/SideBar";
import DefaultPage from "./components/DefaultPage";
import Button from "./components/Button";
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import { id } from "date-fns/locale";

const Tasks = [
  {
    id: 1,
    title: "title 1",
    dueDate: new Date(),
    description: "description",
    subtasks: [
      {
           id:1,
        description: "description1",
      },
      {
         id: 2,
        description: "description2",
      },
    ],
  },
  {
    id: 2,
    title: "title 2",
    dueDate: new Date(),
    description: "description",
    subtasks: [
      {
           id: 3,
        description: "description2-1",
      },
      {
           id: 4,
        description: "description2-2",
      },
    ],
  },
];

function App() {
  const [showPage, setShowPage] = useState(false); /*показывает/скрывает форму*/
  // const [tasks, setTasks] = useState([{
  //   title: "",
  //   dueDate: new Date(),
  //   description: "",
  //   subTasks: [
  //     {
  //       title: "",
  //       description: "",
  //     },
  //     {
  //       title: "",
  //       description: "",
  //     },
  //   ],
  // }]); /*Массив задач*/
  const [tasks, setTasks] = useState(Tasks); /*Массив задач*/
  // const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
    setShowPage(false);
  }


  // function handleAddSubtask (newSubtask: {decription: subtask}){
  function handleAddSubtask (newSubtask, taskId){
    setTasks((tasks) => tasks.map((task, _) => {
      if (task.id === taskId){
        task.subtasks.push(newSubtask)
      }
      return task
    } ))
    setShowPage(false);
  }

  function handleDeleteSubtask (subtaskId, taskId){
    console.log("handleDeleteSubtask")
     console.log(subtaskId, taskId)
    setTasks((tasks) => tasks.map((task, _) => {
      
      if (task.id === taskId){
           console.log( task, subtaskId, taskId, 'ggg')
        task.subtasks = task.subtasks.filter((subtask) => subtask.id !== subtaskId)
      }
      return task
    } ))
  }

  // function handleAddSubTask(newSubTask) {
  //   setSubTasks((subTasks) => [...subTasks, newSubTask]);
  // }

  // function deleteSubTask(index) {
  //   const updatedSubTasks = subTasks.filter((_, i) => i !== index);
  //   setSubTasks(updatedSubTasks);
  // }
console.log(tasks)
  return (
    <>
    <p>{JSON.stringify(tasks)}</p>
      <SideBar
        tasks={tasks}
        onAdd={() => {
          setSelectedTask(null);
          setShowPage(true);
        }}
        onSelectTask={(task) => {
          // alert(JSON.stringify(task));
          setShowPage(false);
          setSelectedTask(task);
        }}
      />
      <main className="pl-[20%]">
        {selectedTask ? (
          <div className="p-8">
            <div className="flex justify-between">
              <button
                onClick={() => setSelectedTask(null)}
                className="mb-4 text-emerald-600 hover:text-emerald-400 transition duration-300"
              >
                ← Назад
              </button>
            
            </div>
            <Task task={selectedTask} onAddSubTask={handleAddSubtask} onDeleteSubTask={handleDeleteSubtask}></Task>
          </div>
        ) : showPage ? (
          <NewTask
            onCancel={() => setShowPage(false)}
            onAddTask={handleAddTask}
          />
        ) : (
          <DefaultPage />
        )}{" "}
        {/* пеердаем функцию добавления onAddTask={handleAddTask} */}
      </main>
    </>
  );
}

export default App;
