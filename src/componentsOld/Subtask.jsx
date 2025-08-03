import Button from "./Button";

export default function Subtask({subDescription, subDescriptionBtnText, onClick}){

    return(
        <div className="flex items-center gap-4">
            <p className="w-[100%]">{subDescription}</p>
            <Button btnText={subDescriptionBtnText} onClick={onClick}/>
        </div>
    )
}