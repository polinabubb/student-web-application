import styles from "./NotFoundPage.module.css";
import cn from "classnames";

export function NotFoundPage(): JSX.Element {
  return (
    <div className={cn(styles.notFound, styles["not-found"])}>
      Страница не найдена
    </div>
  );
}

export default NotFoundPage;
