import Button from "./Button";

export default function Modal({ref, onDeleteTaskModal}) {
  return (
    <dialog ref={ref} className="p-4 rounded-lg" >
      <div className="flex flex-col gap-5">
        <p className="text-center">Удалить задачу?</p>
        <div className="flex gap-2">
          <Button btnText="Удалить" onClick={onDeleteTaskModal} />
         <form method="dialog">
             <Button btnText="Отмена"/>
        </form>
        </div>
       
      </div>
    </dialog>
  );
}
