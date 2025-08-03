import { Children } from "react";

export default function Button({ btnImg, btnText, children, onClick }) {
  return (
    <button className="flex gap-1 py-2 px-4 text-emerald-50 rounded-xl bg-emerald-600  hover:bg-emerald-500 transition-colors duration-300" onClick={onClick}>
      <img src={btnImg} />
      {btnText}
      {children}
    </button>
  );
}
