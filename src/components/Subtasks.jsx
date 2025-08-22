import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Subtask from "./Subtask";

export default function Subtasks({
  placeholder,
  SubtasksBtnText,
  className,
  subtasks ,
  onAddSubTask,
  onDeleteSubTask,
  initialDataSubtask,
}) {
  const [newSubTask, setNewSubTask] = useState("");

  function createSubTask() {
    if (newSubTask.trim() !== "") {
      const newObjSubtask = {id: initialDataSubtask?.id || Math.random(), description: initialDataSubtask?.description || newSubTask}
      onAddSubTask(newObjSubtask);
      // setNewSubTask("");
    }
  }
  return (
    <div
      className={`flex flex-col gap-5 pt-5 border-t-2 border-gray-300  ${className}`}
    >
      <div>
        <h2 className="h2 pb-2">Подзадачи</h2>
        <div className="flex items-center gap-4">
    
          <div className="w-[100%] ">
            <Input
              placeholder={placeholder}
              value={newSubTask}
              onChange={(e) => setNewSubTask(e.target.value)}
            />
          </div>
          <div>
            <Button
              btnText={SubtasksBtnText}
              className="w-auto"
              onClick={createSubTask}
            />
          </div>
        </div>
      </div>
      {subtasks?.map((subtask, i) => (
        <Subtask
          key={i}
          subtask={subtask}
          onDelete={() => {onDeleteSubTask(subtask.id)}}
        />
      ))}
    </div>
  );
}
