import { Children, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function TaskContent({
  title,
  placeholder,
  taskBtnText,
  className,
  onAddSubTask,
  children,
}) {
  const [newSubTask, setNewSubTask] = useState("");

  function createSubTask() {
    if (newSubTask.trim() !== "") {
      onAddSubTask(newSubTask);
      setNewSubTask("");
    }
  }

  return (
    <div
      className={`flex flex-col gap-5 pt-5 border-t-2 border-gray-300  ${className}`} 
    >
      <div>
        <h2 className="h2 pb-2">{title}</h2> {/*Подзадача*/}
        <div className="flex items-center gap-4">
          {/* подзадачи */}
          <div className="w-[100%] ">
            <Input
              placeholder={placeholder}
              value={newSubTask}
              onChange={(e) => setNewSubTask(e.target.value)}
            />
          </div>
          <div>
            <Button
              btnText={taskBtnText}
              className="w-auto"
              onClick={createSubTask}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
