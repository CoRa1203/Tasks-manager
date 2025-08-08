import Button from "./Button";
import Subtasks from "./Subtasks";

export default function Task({
  task,
  onAddSubTask,
  onDeleteSubTask,
  onDeleteTask,
}) {
  function onAddSubTask2(newSubtask) {
    onAddSubTask(newSubtask, task.id);
  }

  function onDeleteSubtask2(subtaskId) {
    onDeleteSubTask(subtaskId, task.id);
  }

  console.log(task);
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-between pb-5 gap-3">
        <div className="flex flex-col">
          <h1 className="h1 text-start">{task.title}</h1> {/*название задачи*/}
          <p className="greyText text-sm">{task.dueDate}</p>
          <p className="whitespace-pre-wrap ">{task.description}</p>{" "}
          {/*задача*/}
        </div>
        <div></div>
      </div>

      <Subtasks
        SubtasksBtnText="Добавить"
        subtasks={task.subtasks}
        onAddSubTask={onAddSubTask2}
        onDeleteSubTask={onDeleteSubtask2}
      />
      <div className="flex justify-end pt-5 border-t-2 border-gray-300 mt-5">
        {" "}
        <Button
          btnText="Удалить задачу"
          onClick={() => onDeleteTask(task.id)}
        />
      </div>
    </section>
  );
}
