import { useState, useEffect, useRef, useReducer } from "react";
import SideBar from "./components/SideBar";
import DefaultPage from "./components/DefaultPage";
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import Modal from "./components/Modal";

function reducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];
    case "ADD_SUBTASK":
      return tasks.map((task, _) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            subtasks: [...task.subtasks, action.payload.newSubtask],
          };
          // task.subtasks.push(newSubtask);
        }
        return task;
      });

    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload);

    case "DELETE_SUBTASK":
      return tasks.map((task, _) => {
        if (task.id === action.payload.taskId) {
          task.subtasks = task.subtasks.filter(
            (subtask) => subtask.id !== action.payload.subtaskId
          );
        }
        return task;
      });
    case "EDIT_TASK":
      return tasks.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, ...action.payload.updatedTask };
        }
        return task;
      });
  }
}

function App() {
  const [showPage, setShowPage] = useState(false); /*показывает/скрывает форму*/
  // const [tasks, setTasks] = useState(() => {
  //   const saved = localStorage.getItem("tasks");
  //   return JSON.parse(saved);
  // }); /*Массив задач*/
  const [selectedTaskId, setSelectedTaskId] =
    useState(
      null
    ); /*мб можно оставить один стейт taskToDelete или selectedTaskId*/
  // const defaultTasks = [
  //   {
  //     id: Math.random(),
  //     title: "",
  //     dueDate: "",
  //     description: "",
  //     subtasks: [
  //       {
  //         id: Math.random(),
  //         description: "",
  //       },
  //     ],
  //   },
  // ];

  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : []; // Пустой массив, если нет сохранённых
  });
  //state — текущее состояние
  // dispatch — функция, чтобы послать команду
  const [taskToEdit, setTaskToEdit] = useState(null);
  const selectedTask = selectedTaskId
    ? tasks.find((task) => task.id === selectedTaskId)
    : null;

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
    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
    setShowPage(false);
  }

  function handleAddSubtask(newSubtask, taskId) {
    dispatch({
      type: "ADD_SUBTASK",
      payload: { newSubtask, taskId },
    });
    setShowPage(false);
  }

  function handleSelectTaskToDelete(taskId) {
    setSelectedTaskId(taskId);
    modal.current.showModal();
  }

  function handleDeleteTask() {
    if (selectedTaskId) {
      dispatch({
        type: "DELETE_TASK",
        payload: selectedTaskId,
      });
      setSelectedTaskId(null);
      setSelectedTaskId(null);
    }

    modal.current.close();
  }

  function handleDeleteSubtask(subtaskId, taskId) {
    dispatch({
      type: "DELETE_SUBTASK",
      payload: { subtaskId, taskId },
    });
  }

  function handleEditTask(taskId, updatedTask) {
    dispatch({
      type: "EDIT_TASK",
      payload: { taskId, updatedTask },
    });
    setShowPage(false);
    setTaskToEdit(null);
  }

  
  function handleEditSubtask(subtaskId, updatedSubtask){
selectedTask.map((subtask) => {
  if(subtask.id === subtaskId){
    return {...subtask, ...updatedSubtask}
  }
  return subtask
})  }

  return (
    <>
      {/* <p>{JSON.stringify(tasks)}</p> */}
      <SideBar
        tasks={tasks}
        onAdd={() => {
          setSelectedTaskId(null);
          setShowPage(true);
        }}
        onSelectTask={(task) => {
          setShowPage(false);
          setSelectedTaskId(task.id);
        }}
      />
      <main className="pl-[20%]">
        <Modal ref={modal} onDeleteTaskModal={handleDeleteTask}></Modal>
        {selectedTask ? (
          <div className="p-8">
            <div className="flex justify-between">
              <button
                onClick={() => setSelectedTaskId(null)}
                className="mb-4 text-emerald-600 hover:text-emerald-400 transition duration-300"
              >
                ← Назад
              </button>
            </div>
            <Task
              task={selectedTask}
              onAddSubTask={handleAddSubtask}
              onDeleteTask={handleSelectTaskToDelete}
              onDeleteSubTask={handleDeleteSubtask}
              onStartEdit={() => {
                // Закрываем просмотр текущей задачи
                setSelectedTaskId(null);
                // Сохраняем задачу, которую будем редактировать
                setTaskToEdit(selectedTask);
                // Показываем форму (NewTask)
                setShowPage(true);
              }}
            ></Task>
          </div>
        ) : taskToEdit ? (
          <NewTask
            initialData={taskToEdit}
            onCancel={() => {
              setShowPage(false);
              setTaskToEdit(null);
            }}
            onAddTask={(updatedTask) => {
              handleEditTask(updatedTask.id, updatedTask);
            }}
          />
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
