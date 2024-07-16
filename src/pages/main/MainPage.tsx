import styles from './MainPage.module.css';
import StudentList from "../../components/StudentList/StudentList";
import Search from "../../components/Search/Search";
import {Sorting} from "../../components/Sorting/Sorting";


export function MainPage(): JSX.Element {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Студенты</h1>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Search/>
                    <Sorting/>
                </div>
                <StudentList/>
            </div>
        </div>
    );
}

export default MainPage;