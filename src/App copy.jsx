import { useState, useEffect, useRef, useReducer } from "react";
import SideBar from "./components/SideBar";
import DefaultPage from "./components/DefaultPage";
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import Modal from "./components/Modal";

  function reducer(state, action){

  }

function App() {
  const [showPage, setShowPage] = useState(false); /*показывает/скрывает форму*/
  // const [tasks, setTasks] = useState(() => {
  //   const saved = localStorage.getItem("tasks");
  //   return JSON.parse(saved);
  // }); /*Массив задач*/
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const defaultTasks = [
    {
      id: Math.random(),
      title: "",
      dueDate: "",
      description: "",
      subtasks: [
        {
          id: Math.random(),
          description: "",
        },
      ],
    },
  ];



  const [tasks, dispatch] = useReducer(reducer, defaultTasks);
  //state — текущее состояние
  // dispatch — функция, чтобы послать команду
  const modal = useRef();

  useEffect(() => {
    /*useEffect срабатывает каждый раз, когда происходят изменения tasks (добавили, удалили)*/
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    ); /*JSON.stringify(tasks) — превращает массив задач в строку
  localStorage.setItem(...) — сохраняет её под ключом "tasks"
  */
  }, [tasks]);

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
    setShowPage(false);
  }

  function handleAddSubtask(newSubtask, taskId) {
    setTasks((tasks) =>
      tasks.map((task, _) => {
        if (task.id === taskId) {
          return { ...task, subtasks: [...task.subtasks, newSubtask] };
          // task.subtasks.push(newSubtask);
        }
        return task;
      })
    );
    setShowPage(false);
  }

  function handleSelectTaskToDelete(taskId) {
    setTaskToDelete(taskId);
    modal.current.showModal();
  }

  function handleDeleteTask() {
    if (taskToDelete) {
      setTasks((tasks) => tasks.filter((task) => task.id !== taskToDelete));
      setSelectedTask(false);
      setTaskToDelete(null);
    }

    modal.current.close();
  }

  function handleDeleteSubtask(subtaskId, taskId) {
    setTasks((tasks) =>
      tasks.map((task, _) => {
        if (task.id === taskId) {
          task.subtasks = task.subtasks.filter(
            (subtask) => subtask.id !== subtaskId
          );
        }
        return task;
      })
    );
  }

  return (
    <>
      {/* <p>{JSON.stringify(tasks)}</p> */}
      <SideBar
        tasks={tasks}
        onAdd={() => {
          setSelectedTask(null);
          setShowPage(true);
        }}
        onSelectTask={(task) => {
          setShowPage(false);
          setSelectedTask(task);
        }}
      />
      <main className="pl-[20%]">
        <Modal ref={modal} onDeleteTaskModal={handleDeleteTask}></Modal>
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
            <Task
              task={selectedTask}
              // onAddSubTask={handleAddSubtask}
              // onDeleteTask={handleSelectTaskToDelete}
              // onDeleteSubTask={handleDeleteSubtask}
              onAddSubTask={() => dispatch()}
              onDeleteTask={() => dispatch()}
              onDeleteSubTask={() => dispatch()}
            ></Task>
          </div>
        ) : showPage ? (
          <NewTask
            onCancel={() => setShowPage(false)}
            onAddTask={handleAddTask}
          />
        ) : (
          <DefaultPage />
        )}
      </main>
    </>
  );
}

export default App;
