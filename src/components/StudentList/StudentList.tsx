import styles from "./StudentList.module.css";
import { StudentSnippet } from "../StudentSnippet/StudentSnippet";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getStudentDataLoadingStatus,
  getStudents,
} from "../../store/StudentData/selectors";
import cn from "classnames";
import { useEffect } from "react";
import { fetchStudentList } from "../../store/apiActions";
import { useResize } from "../../hooks/useResize";

export function StudentList(): JSX.Element {
  const dispatch = useAppDispatch();
  const students = useAppSelector(getStudents);
  const isStudentDataLoading = useAppSelector(getStudentDataLoadingStatus);
  const { width, isMobile } = useResize();
  useEffect(() => {
    dispatch(fetchStudentList(""));
  }, [dispatch]);
  if (isStudentDataLoading) {
    return <>Загрузка...</>;
  }
  const list: JSX.Element = (
    <>
      {students.length === 0 ? (
        <div className={cn(styles.notFound, styles["not-found"])}>
          {" "}
          Ничего не найдено{" "}
        </div>
      ) : (
        <div className={styles.list}>
          {students.map((student) => {
            return <StudentSnippet student={student} key={student.id} />;
          })}
        </div>
      )}
    </>
  );
  if (isMobile) {
    return list;
  } else {
    return (
      <div className={styles.students}>
        <ul className={styles.titles}>
          {[
            { name: "ФИО", className: "name" },
            { name: "Специальность", className: "specialty" },
            { name: "Группа", className: "group" },
            { name: "Возраст", className: "age" },
            { name: "Рейтинг", className: "rating" },
          ].map((titleItem) => {
            return (
              <li
                className={cn(
                  styles.title__item,
                  styles["title__item"],
                  styles[`title__item-${titleItem.className}`]
                )}
                key={titleItem.className}
              >
                {titleItem.name}
              </li>
            );
          })}
        </ul>
        {list}
      </div>
    );
  }
}

export default StudentList;
