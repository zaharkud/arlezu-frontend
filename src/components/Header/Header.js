import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>Arlezu</Link>
      </h1>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to='/CardRepeater'>Учить</Link>
          </li>
          <li>
            <Link to='/'>Словарь</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}