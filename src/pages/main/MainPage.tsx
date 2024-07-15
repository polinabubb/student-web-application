import styles from './MainPage.module.css';
import StudentList from "../../components/StudentList/StudentList";
import Search from "../../components/Search/Search";


export function MainPage(): JSX.Element {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Студенты</h1>
            <div className={styles.container}>
                <Search/>
                <StudentList/>
            </div>
        </div>
    );
}

export default MainPage;