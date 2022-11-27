import styles from './Header.module.scss';

export default function() {
  return (
    <header className={styles.header}>
          <h1 className={styles.title}>
            <a href='#'>Arlezu</a>
          </h1>
          <nav>
            <ul className={styles.menu}>
              <li>
                <a href='#'>Учить</a>
              </li>
              <li>
                <a href='#'>Словарь</a>
              </li>
            </ul>
          </nav>        
    </header>
  );
}