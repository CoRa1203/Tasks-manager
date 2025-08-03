export default function Input({ id, value, onChange, title, placeholder, className}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>

      <input id={id} className={`input placeholder-gray-400 ${className}`} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}
