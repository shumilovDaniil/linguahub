import s from "./footer.module.scss";
import Link from "next/link";
import globalStyles from "../../styles/Global.module.scss";

export const Footer: React.FC<{}> = () => {
  return (
    <footer className={s.footer}>
      <div className={globalStyles.container}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <li>
              <Link href="/"><a className={globalStyles.logo}>Lingua<span>Hub</span></a></Link>
            </li>
            <li>
              <p>Какая то супер важная инфа и бла-бла-бла</p>
            </li>
          </ul>
          <ul className={s.list}>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Слова</a></Link></li>
            <li><Link href="/"><a className={s.item}>Раз</a></Link></li>
            <li><Link href="/"><a className={s.item}>Два</a></Link></li>
          </ul>
          <ul className={s.list}>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Слова</a></Link></li>
            <li><Link href="/"><a className={s.item}>Раз</a></Link></li>
          </ul>
          <ul className={s.list}>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Слова</a></Link></li>
            <li><Link href="/"><a className={s.item}>Раз</a></Link></li>
            <li><Link href="/"><a className={s.item}>Два</a></Link></li>
          </ul>
          <ul className={s.list}>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Запоминание</a></Link></li>
            <li><Link href="/"><a className={s.item}>Слова</a></Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};