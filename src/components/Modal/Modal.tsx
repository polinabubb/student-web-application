import styles from "./Modal.module.css";
import { SortingMap } from "../../const";
import cn from "classnames";

type ModalProps = {
  onClickHandler: (key: string) => () => void;
  activeSorting: string;
};

export function Modal({
  onClickHandler,
  activeSorting,
}: ModalProps): JSX.Element {
  return (
    <div className={styles.modal}>
      <div className={styles.sorting__list}>
        {Object.entries(SortingMap).map(([key, name]) => (
          <button
            key={key}
            className={
              key === activeSorting
                ? cn(styles.sorting__nameActive, styles["sorting__name-active"])
                : styles.sorting__name
            }
            onClick={onClickHandler(key)}
            aria-label="Выбрать сортировку"
          >
            {name}
            {key === activeSorting && (
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49373 0.758435C8.83831 0.413855 9.39698 0.413855 9.74156 0.758435C10.0861 1.10302 10.0861 1.66169 9.74156 2.00627L4.44745 7.30039C4.10287 7.64497 3.54419 7.64497 3.19961 7.30039L0.258435 4.35921C-0.0861451 4.01463 -0.0861451 3.45596 0.258435 3.11138C0.603015 2.7668 1.16169 2.7668 1.50627 3.11138L3.82353 5.42863L8.49373 0.758435Z"
                  fill="#49C2E8"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Modal;
