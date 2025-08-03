import Button from "./Button";

export default function Subtask({
  onDelete,
  subtask,
}) {
  return (
    <div className="flex items-center gap-4">
      <p className="w-[100%]">{subtask.description}</p>
      <Button onClick={onDelete} >Удалить</Button>
    </div>
  );
}


