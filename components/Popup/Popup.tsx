import Link from "next/link";
import globalStyles from "../../styles/Global.module.scss";
import s from "./Popup.module.scss";
import { MdOutlineClose } from "react-icons/md";

interface PopupProps {
  setTogglePopup: (toggle: boolean) => void;
}


export const Popup: React.FC<PopupProps> = ({ setTogglePopup }) => {
  return (
    <div className={s.popup}>
      <div className={s.window}>
        <div className={s.top}>
          <button className={s.top_close} onClick={() => setTogglePopup(false)}><MdOutlineClose /></button>
        </div>
        <div className={s.content}>
          <Link href="/"><a className={`${globalStyles.logo} ${s.logo}`}>Lingua<span>Hub</span></a></Link>
          <h4 className={s.title}>Войти</h4>
          <input className={s.input} type="text" placeholder="Логин" />
          <input className={s.input} type="text" placeholder="Пароль" />
          <span>Забыли пароль?</span>
          <button className={s.btn}>Войти</button>
          <span>Или</span>
          <button className={`${s.btn} ${s.btn_google}`}>Через Google</button>
          <button className={`${s.btn} ${s.btn_fb}`}>Через Facebook</button>
          <span>Нету аккаунта? <Link href={"/"}><a>Зарегистрироваться</a></Link></span>
        </div>
      </div>
    </div>
  );
};