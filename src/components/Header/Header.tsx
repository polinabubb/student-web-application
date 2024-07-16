import styles from "./Header.module.css";
import cn from "classnames";

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <svg className={styles.logo} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M29.4309 34.0148C35.0325 31.0599 37.1428 23.9996 34.1466 18.2991C31.1504 12.5986 24.168 10.3759 18.5664 13.3308C12.9648 16.2856 10.8545 23.3459 13.8507 29.0464C16.8469 34.7469 23.8293 36.9696 29.4309 34.0148Z"
              stroke="#49C2E8" stroke-width="5" stroke-miterlimit="10"/>
          <path
              d="M42.2247 34.5381C36.4668 44.5533 23.6222 47.9788 13.5654 42.1737C3.50866 36.3686 0.0174377 23.477 5.77534 13.4619C11.5332 3.44675 24.3778 0.0212038 34.4346 5.82632C44.4913 11.6314 47.9826 24.523 42.2247 34.5381Z"
              stroke="#49C2E8" stroke-width="5" stroke-miterlimit="10"/>
        </svg>
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
