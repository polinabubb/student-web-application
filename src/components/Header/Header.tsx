import styles from "./Header.module.css";
import cn from "classnames";

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} alt="logo" src="/logo.svg" />
        <div className={styles.title}>
          STUDENTS
          <span className={styles.author}>
            {" "}
            by{" "}
            <span className={cn(styles.button, styles["author-highlighted"])}>
              polinabubb
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
