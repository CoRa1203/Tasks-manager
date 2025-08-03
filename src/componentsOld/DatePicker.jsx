import { useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function DatePicker({ value, onChange }) {
  const [date, setDate] = useState(value || new Date());

  return (
    <div className="mt-2">
      <input
        type="date"
        value={format(date, "yyyy-MM-dd")}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          setDate(newDate);
          onChange(newDate);
        }}
        className="input"
      />
      <p className="text-sm text-gray-500 mt-1">
        {format(date, "d MMMM yyyy", { locale: ru })}
      </p>
    </div>
  );
}
