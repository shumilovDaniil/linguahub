import s from "./Homepage.module.scss";
import globalStyles from "../../styles/Global.module.scss";
import { Popup } from "../Popup/Popup";
import React, { FC, useState } from "react";
import BtnOrange from "../../ui/BtnOrange/BtnOrange";
import { WordsList } from "../WordsList/WordsList";

export const Homepage: FC = () => {
  const [togglePopup, setTogglePopup] = useState(false);

  return (
    <main className={s.main}>
      <div className={globalStyles.container}>
        home <br />
        <BtnOrange setTogglePopup={setTogglePopup}>Register</BtnOrange>
        {togglePopup ? <Popup setTogglePopup={setTogglePopup} /> : ""}
        <WordsList />
      </div>
    </main>
  );
};
