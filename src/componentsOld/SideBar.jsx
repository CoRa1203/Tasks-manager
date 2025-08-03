import Button from "./Button";
import plus from "./../assets/plus.svg";
import Task from "./Task";


export default function SideBar({ tasks, onAdd, onSelectTask }) {
  return (
    <aside className="flex flex-col items-center gap-12 fixed mt-12  bg-emerald-950 w-1/5 h-screen rounded-e-3xl overflow-hidden">
      <div className="flex flex-col items-center gap-6">
        <h1 className="h1 pt-6 text-emerald-50">Твои задачи</h1>
        <Button btnText="Добавить" btnImg={plus} onClick={onAdd} />{" "}
        {/* при клике на "Добавить" вызывается переданный пропс onAdd - в App меняется состояние: setShowNewTask(true)открывается стр для создания задачи*/}
      </div>
      <ul className="flex flex-col w-[100%] ">
        {tasks.map((task, i) => (
          <button
            key={i}
            onClick={() => onSelectTask(task)}
            className="py-2 px-4 hover:bg-emerald-900 transition-colors duration-300 "
          >
            <Task key={i} title={task.title}  className="text-emerald-50 hover:text-white border-none" />
          </button>
        ))}
      </ul>
    </aside>
  );
}
