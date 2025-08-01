import React from "react";
import "../../assets/styles/button.css";
import Icon from "./Icon";

interface ButtonProps {
  variant: "small" | "medium";
  children: React.ReactNode;
}

const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button className={`btn ${variant}`}>
      <Icon.rightArrowIcon />
    </button>
  );
};

export default Button;
