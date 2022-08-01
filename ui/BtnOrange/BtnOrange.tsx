import React, { FC } from "react";
import s from "./BtnOrange.module.scss";

interface BtnOrangeProps {
  children: React.ReactNode,
  icon?: React.ReactNode,
  setTogglePopup: (SetStateAction: boolean) => void
}

const BtnOrange: FC<BtnOrangeProps> = ({ children, icon, setTogglePopup }) => {
  return (
    <button
      onClick={() => setTogglePopup(true)}
      className={s.btn}
      type="submit">
      {icon}{children}
    </button>
  );
};

export default BtnOrange;