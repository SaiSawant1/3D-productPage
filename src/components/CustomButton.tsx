import { title } from "process";
import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";
interface CustomButtonProps {
  type: string;
  title: string;
  handleClick: () => void;
  customStyles: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  customStyles,
  title,
  handleClick,
  type,
}) => {
  const snap = useSnapshot(state);
  const generateStyle = (type: string) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
