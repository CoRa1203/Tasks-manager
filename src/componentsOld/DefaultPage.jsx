import logo from './../assets/no-projects.png'
import Button from './Button';

export default function DefaultPage() {
  return (
    <section className="flex flex-col gap-5 justify-center items-center h-screen ">
        <img className='w-12' src={logo}/>
      <h1 className="h1 text-emerald-950">Нет задач</h1>
      <p className='greyText'>Выбери задачу или создай новую</p>
      <Button btnText="Создать новый проект"/>
    </section>
  );
}
