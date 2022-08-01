import s from "./header.module.scss";
import globalStyle from "../../styles/Global.module.scss";
import globalStyles from "../../styles/Global.module.scss";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

export const Header: React.FC<{}> = props => {
  return (
    <header className={s.header}>
      <div className={globalStyle.container}>
        <div className={s.wrapper}>
          <Link href="/"><a className={globalStyles.logo}>Lingua<span>Hub</span></a></Link>
          <nav>
            <ul className={s.nav_list}>
              <li><Link href="/"><a className={s.nav_item}>Запоминание</a></Link></li>
              <li><Link href="/"><a className={`${s.nav_item} active`}>Карточки</a></Link></li>
              <li><Link href="/"><a className={s.nav_item}>Слова</a></Link></li>
              <li><Link href="/"><a className={s.nav_item}>Раз</a></Link></li>
              <li><Link href="/"><a className={s.nav_item}>Два</a></Link></li>
              <li><Link href="/"><a className={s.nav_item}>Три</a></Link></li>
              <li><Link href="/"><a className={s.nav_item}>Четыре</a></Link></li>
            </ul>
          </nav>
          <ul className={s.user_list}>
            <li><Link href="/"><a className={s.user_item}><BiSearch /></a></Link></li>
            <li><Link href="/"><a className={s.user_item}><MdOutlineNotificationsNone /></a></Link></li>
            <li><Link href="/"><a className={s.user_item}><AiOutlineUser /></a></Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};