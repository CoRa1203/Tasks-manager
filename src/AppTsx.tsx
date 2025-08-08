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
// const Tasks = [
//   {
//     id: 1,
//     title: "title 1",
//     dueDate: "23.07.2025",
//     description: "description",
//     subtasks: [
//       {
//         id: 1,
//         description: "description1",
//       },
//       {
//         id: 2,
//         description: "description2",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "title 2",
//     dueDate: "12.03.25",
//     description: "description",
//     subtasks: [
//       {
//         id: 3,
//         description: "description2-1",
//       },
//       {
//         id: 4,
//         description: "description2-2",
//       },
//     ],
//   },
// ];

import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import {useState, useReducer} from 'react'


const defaultTasks = [
  {
    title: 'task 1'
  }
]


function reducer(state, {type, payload}){
  // alert(JSON.stringify({type, payload}))
  // console.log({type, payload})

  switch (type) {
    case 'delete' : 
      console.log('delete')
      console.log(payload)
      return [...state]
    default :
      alert('error')
      return state 
  }
}

export default function Test(){
  const [newTask, setNewTask] = useState('')
  const [tasks , dispatch] = useReducer(reducer, defaultTasks)

  return (
  <>
    <p>Test</p>
    {tasks?.map((task, index: number) => <Task key={index} task={task} />)}


    <Input name='new_task' value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}/>
    <Button 
      onPress={()=>{
        dispatch({type: 'ADD_TASK', payload: {id: Math.random()}});
        setNewTask('')
      }} 
    >
      + Задача
    </Button> 


    {/* <Button onPress={()=>{dispatch({type: 'delete', payload: {id: 2}})}} >x</Button>  */}
  </>
)
}


function Task({task}){
  return <>
    <p>
      {task.title}
    </p>
  </>
}
