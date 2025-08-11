import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function NewTask({ initialData, onAddTask, onCancel }) {
  const [newTask, setNewTask] = useState({
    id: initialData?.id || Math.random(),
    title: initialData?.title || "",
    dueDate: initialData?.dueDate || "",
    description: initialData?.description || "",
    subtasks: [],
  });
  const [error, setError] = useState(false);

  function createNewTask() {
    if (newTask.title.trim() !== "") {
      onAddTask(newTask);
      // (onAddTask(newTask),
      //   setNewTask({
      //     id: Math.random(),
      //     title: "",
      //     dueDate: "",
      //     description: "",
      //     subtasks: [],
      //   }));
    } else {
      setError(true);
    }
  }

  return (
    <section className="pt-12">
      <h2 className="h1 text-emerald-950">
        {initialData ? "Редактировать задачу" : "Добавить задачу"}
      </h2>
      <div className="mt-8 ">
        <div className="px-8 py-10 ">
          <div className="space-y-6">
            <div>
              <Input
                type="text"
                label="Задача"
                value={newTask.title}
                onChange={(e) => {
                  setNewTask({ ...newTask, title: e.target.value });
                  // убираем ошибку, когда начинаем вводить в ин
                  if (error) setError(null);
                }}
                className={
                  error ? "border-red-800 focus:ring-offset-red-800" : ""
                }
              />{" "}
              {error && <p className="text-sm text-red-800">Введите задачу</p>}
            </div>

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

            <div className="flex gap-2 justify-end">
              <Button btnText="Сохранить" onClick={createNewTask} />
              <Button btnText="Отмена" onClick={onCancel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
