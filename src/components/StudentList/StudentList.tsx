import styles from './StudentList.module.css';
import {Student} from "../../types";
import {StudentSnippet} from '../StudentSnippet/StudentSnippet';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getStudentDataLoadingStatus, getStudents} from "../../store/StudentData/selectors";
import cn from "classnames";
import {useEffect} from 'react';
import {fetchStudentList} from '../../store/apiActions'

export function StudentList(): JSX.Element {
    const dispatch = useAppDispatch();
    const students = useAppSelector(getStudents);
    const isStudentDataLoading = useAppSelector(getStudentDataLoadingStatus);
    useEffect(() => {
        dispatch(fetchStudentList(''));
    }, [dispatch]);
    if (isStudentDataLoading) {
        return <>Загрузка...</>
    }
    return (
        <div className={styles.students}>
            <ul className={styles.title}>
                {[{name: 'ФИО', className: "name"},
                    {name: 'Специальность', className: "specialty"},
                    {name: 'Группа', className: "group"},
                    {name: 'Возраст', className: "age"},
                    {name: 'Рейтинг', className: "rating"}].map(titleItem => {
                    return (
                        <li className={cn(
                            styles.title__item,
                            styles['title__item'],
                            styles[`title__item-${titleItem.className}`],
                        )} key={titleItem.className}>
                            {titleItem.name}
                        </li>
                    );
                })}


            </ul>
            <ul className={styles.list}>
                {students.map((student) => {
                    return <StudentSnippet student={student} key={student.id}/>
                })}
            </ul>

        </div>
    );
}

export default StudentList;