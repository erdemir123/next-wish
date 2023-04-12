import Image from "next/image";
import React from "react";
interface Iprops {
  name: string;
  icon: JSX.Element;
  text: string;
  func: () => void;
}

const Button = ({ name, icon, text, func }: Iprops) => {
  return (
    <button
      className={`${
        name === "google" ? "bg-white" : "bg-black text-white"
      } flex border border-slate-500 items-center shadow-lg shadow-slate-500 py-1 px-2 gap-2 font-bold text-sm rounded-md`} onClick={() => func()}
    >
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Button;
