import styles from './Search.module.css';
import {useRef} from "react";
import {useAppDispatch} from "../../hooks";
import {filterStudents} from '../../store/StudentData/StudentData';


export function Search(): JSX.Element {
    const search = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    const onSubmitHandler = (env: { preventDefault: () => void; }) => {
        env.preventDefault();
        if (search.current) {
            dispatch(filterStudents({name: search.current.value}));
        } else {
            dispatch(filterStudents({name: ''}));
        }
    }
    const onChangeHandler = () => {
        if (!search.current || search.current.value === '') {
            dispatch(filterStudents({name: ''}));
        }
    }
    return (
        <form action="" method="get" className={styles.search} onSubmit={onSubmitHandler}>
            <button type="submit" className={styles.button} aria-label="Искать"></button>
            <input className={styles.input} name="s" placeholder="Поиск по имени" type="search" ref={search}
                   onChange={onChangeHandler}/>
        </form>
    );
}

export default Search;