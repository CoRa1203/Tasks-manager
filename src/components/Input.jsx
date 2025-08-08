export default function Input({
  label,
  textarea,
  value = "",
  errorValue,
  onChange,
  id,
  type,
  className,
}) {
  return (
    <div>
      <label id={id} className={`block text-sm font-medium text-gray-700 ${className}`}>
        {label}
      </label>

      {textarea ? (
        <textarea id={id} value={value} onChange={onChange} className="input" />
      ) : (
        <div>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`input placeholder-gray-400 ${className}`}
        />
        {/* <p value={false}>Введите задачу</p> */}
        </div>
      )}
    </div>
  );
}
