export default function Input({
  label,
  textarea,
  value = "",
  onChange,
  id,
  type,
}) {
  return (
    <div>
      <label id={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {textarea ? (
        <textarea id={id} value={value} onChange={onChange} className="input" />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="input placeholder-gray-400"
        />
      )}
    </div>
  );
}
