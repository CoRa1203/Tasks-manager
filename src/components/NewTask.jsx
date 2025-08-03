import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import Subtasks from "./Subtasks";



export default function NewTask({ onAddTask, onCancel }) {
  // const [newTask, setNewTask] = useState(
  //   {
  //     title: "",
  //     dueDate: new Date(),
  //     description: "",
  //     subTasks: [
  //       {
  //         title: "",
  //         description: "",
  //       },
  //       {
  //         title: "",
  //         description: "",
  //       },
  //     ],
  //   },
  // );
  const [newTask, setNewTask] = useState({
     id: Math.random(),
    title: "",
    dueDate: "",
    description: "",
    subtasks: [{
           id: Math.random(),
           description:''
    }],
  });

  function createNewTask() {
    
    if (newTask.title.trim() !== "") {
      onAddTask(newTask),
        setNewTask({
           id: Math.random(),
          title: "",
          dueDate: "",
          description: "",
          subtasks: [{
           id: Math.random(),
           description:''
    }],
        });
    }
  }

  

  // const handleAddSubtask = (subTask: {description: string}) => {
  // const handleAddSubtask = (subTask) => {
  //   /*добвить подзадачу*/
  //    setNewTask(prev => ({
  //     ...prev,
  //     subtasks: [...prev.subtasks, subTask]
  //   }));
  // };

  // const handleDeleteSubtask = (index) => {
  //   /*удалить подзадачу*/
  //   setNewTask(prev => ({
  //     ...prev,
  //     subtasks: prev.subtasks.filter((_, i) => i !== index)
  //   }));
  // };

  return (
    <section className="pt-12">
      <h2 className="h1 text-emerald-950">Добавить задачи</h2>
      <div className="mt-8 ">
        <div className="px-8 py-10 ">
          <div className="space-y-6">
            <Input
              type="text"
            
              label="Задача"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
            <Input
          
              label="Описание"
              textarea
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
            <Input
              type="date"

              label="Дата"
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({ ...newTask, dueDate: e.target.value })
              }
            />
            {/* <Subtasks
              title="Подзадачи"
              SubtasksBtnText="Добавить"
              subtasks={newTask.subtasks}
              onAddSubTask={handleAddSubtask}
              onDeleteSubTask={handleDeleteSubtask}
            />  */}
         
            <div className="flex gap-2 justify-end">
              <Button
                btnText="Сохранить"
                onClick={createNewTask}
              />
              <Button btnText="Отмена" onClick={onCancel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
