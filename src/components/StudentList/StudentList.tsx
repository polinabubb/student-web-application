import styles from './StudentList.module.css';
import {Student} from "../../types";
import {StudentSnippet} from '../StudentSnippet/StudentSnippet';
import {useAppSelector} from "../../hooks";
import {getStudentDataLoadingStatus, getStudents} from "../../store/StudentData/selectors";


export function StudentList(): JSX.Element {
    const students = useAppSelector(getStudents);
    const isStudentDataLoading = useAppSelector(getStudentDataLoadingStatus);
    if (isStudentDataLoading) {
        return <>Loading...</>
    }
    return (
        <>
            {students.map((student) => {
                return <StudentSnippet student={student} key={student.id}/>
            })}
        </>
    );
}

export default StudentList;