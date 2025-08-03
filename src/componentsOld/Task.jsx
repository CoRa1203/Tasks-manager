export default function Task({
  title,
  date,
  description,
  children,
  className,
}) {
  return (
    <section className="flex flex-col">
      <div className={`flex flex-col`}>
        <h1 className={`h1 text-start ${className}`}>{title}</h1>{" "}
        {/*название задачи*/}
        <p>{date}</p>
        <p>{description}</p> {/*задача*/}
      </div>
      {children}
    </section>
  );
}
