import { GrVolume, GrVolumeMute } from "react-icons/gr";
import { FC, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import s from "./WordCardSm.module.scss";


interface WordCardSmProps {
  // null - серый, studyStarted - красный, studyMiddle - жёлтый, studyCompleted - зелёный
  status?: null | "studyStarted" | "studyMiddle" | "studyCompleted",
  firstWord: string,
  secondWord: string,
  transcriptions: {
    british: string,
    american: string
  }
}

export const WordCardSm: FC<WordCardSmProps> = ({ status, firstWord, secondWord, transcriptions }) => {
  const [toggleVolume, setToggleVolume] = useState(true);
  const onToggleVolume = () => {
    setToggleVolume(prevState => !prevState);
  };

  return (
    <div className={s.card}>
      <div className={s.btn_left}>
        <div
          className={`${s.status} ${(status === "studyStarted") ? s.status_started : (status === "studyMiddle") ? s.status_middle : (status === "studyCompleted") ? s.status_completed : ""}`}></div>

        {toggleVolume ? <button onClick={onToggleVolume} className={s.btn}><GrVolume /></button> :
          <button onClick={onToggleVolume} className={`${s.btn} ${s.btn_mute}`}><GrVolumeMute />
          </button>}
      </div>
      <div className={s.translate_1}>{firstWord}</div>
      <div className={s.translate_2}>{secondWord}</div>
      <div className={s.btn_right}>
        <div className={s.transcription}>
          <div>{transcriptions?.american}<span></span></div>
          <div>{transcriptions?.british}<span></span></div>
        </div>
        <button className={s.btn}><MdOutlineClose /></button>
      </div>
    </div>
  );
};