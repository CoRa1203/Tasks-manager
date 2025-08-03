import Button from "./Button";
import Subtasks from "./Subtasks";

export default function Task({ task, onAddSubTask, onDeleteSubTask }) {

  function onAddSubTask2(newSubtask){
    onAddSubTask(newSubtask, task.id)
  }

function onDeleteSubtask2(subtaskId){
  onDeleteSubTask(subtaskId, task.id)
}

console.log(task)
  return (
    <section className="flex flex-col">
      <div className="flex justify-between pb-5">
        <div className={`flex flex-col`}>
        <h1 className={`h1 text-start`}>{task.title}</h1>{" "}
        {/*название задачи*/}
        <p>{task.dueDate}</p>
        <p>{task.description}</p> {/*задача*/}
      </div>
      <div>
        <Button btnText="Удалить задачу" />
        </div>
      </div>
      
      <Subtasks
        SubtasksBtnText="Добавить"
        subtasks={task.subtasks}
        onAddSubTask={onAddSubTask2}
        onDeleteSubTask={onDeleteSubtask2}
      />

    </section>
  );
}
