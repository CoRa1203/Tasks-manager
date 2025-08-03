import { useState } from "react";
import Button from "./Button";
import Input from "./Input";


export default function NewTask({ onCancel, onAddTask }) {
  const [newTask, setNewTask] = useState({
    title: "",
    dueDate: new Date(),
    description: "",
  });

  function createTask(newTask) {
    if (newTask.title.trim() !== "") {
      onAddTask(newTask);
      setNewTask({ title: "", date: "", description: "" });
    }
  }

  return (
    <section className="pt-12">
      <h2 className="h1 text-emerald-950">Добавить задачи</h2>
      <div className="mt-8 ">
        <div className="px-8 py-10 ">
          <div className="space-y-6">
            <div>
              <Input
              title='Задача'
                id="title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Описание
              </label>
             
              <textarea
                id="description"
                className="input"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button btnText="Сохранить" onClick={() => createTask(newTask)} />
              <Button btnText="Отмена" onClick={onCancel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
