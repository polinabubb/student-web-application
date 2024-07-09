import styles from './StudentSnippet.module.css';
import {Student} from "../../types";

type StudentSnippetProps = {
    student: Student;
}

export function StudentSnippet({student}: StudentSnippetProps): JSX.Element {

    return (
        <>{student.id}</>
    );
}

export default StudentSnippet;