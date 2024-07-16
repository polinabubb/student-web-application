import styles from './StudentSnippet.module.css';
import {Student} from "../../types";
import cn from "classnames";
import Avatar from "../Avatar/Avatar";
import {useAppDispatch} from "../../hooks";
import {deleteStudent} from '../../store/StudentData/StudentData';

type StudentSnippetProps = {
    student: Student;
}

function countAge(date: string): number {
    const birthday = new Date(date).getTime();
    const dayCoef = 24 * 3600 * 365.25 * 1000;
    return ((new Date().getTime() - birthday) / dayCoef) | 0;
}

export function StudentSnippet({student}: StudentSnippetProps): JSX.Element {
    const dispatch = useAppDispatch();
    const deleteHandler = (id: number) => () => {
        dispatch(deleteStudent({id: id}));
    }
    return (
        <li className={styles.student}>
            <Avatar src={student.avatar}/>
            {[{className: styles.name, name: student.name},
                {className: styles.specialty, name: student.specialty},
                {className: styles.group, name: student.group},
                {className: styles.birthday, name: student.birthday},
                {className: styles.rating, name: student.rating},
            ].map(elem =>
                <div className={elem.className}>
                    {elem.name}
                </div>
            )}
            <div className={styles.color} style={{backgroundColor: student.color}}>
            </div>
            <button className={cn(
                styles.buttonDelete,
                styles['button-delete']
            )} onClick={deleteHandler(student.id)}>
            </button>
        </li>

    );
}

export default StudentSnippet;