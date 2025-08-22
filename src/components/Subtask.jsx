import Button from "./Button";
import deleteImg from './../assets/delete.svg'
import editImg from './../assets/edit.svg'

export default function Subtask({
  onDelete,
  subtask,
}) {
  return (
    <div className="flex items-center gap-2">
      <p className="w-[100%]">{subtask.description}</p>
       <Button btnImg={editImg}></Button>
      <Button onClick={onDelete} btnImg={deleteImg}></Button>
     
    </div>
  );
}


