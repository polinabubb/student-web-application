import styles from './Sorting.module.css';
import {useState} from "react";
import {useAppDispatch} from "../../hooks";
import {sortingStudents} from '../../store/StudentData/StudentData';
import {SortingType} from '../../types';
import {InitialSorting, SortingKeys, SortingMap} from "../../const";
import Modal from "../Modal/Modal";

export function Sorting(): JSX.Element {
    const [needShowModal, setNeedShowModal] = useState<boolean>(false);
    const [sortingName, setSortingName] = useState<string>('');
    const [isSortingActive, setIsSortingActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const sortingHandler = (sorting: SortingType) => () => {
        dispatch(sortingStudents({sorting: sorting}));
    }
    const showModalHandler = () => {
        setNeedShowModal(!needShowModal);
    }
    const onClickHandler = (key: string) => () => {
        setNeedShowModal(false);
        if (sortingName === key) {
            setIsSortingActive(false);
            setSortingName('');
            dispatch(sortingStudents({sorting: InitialSorting}));
        } else {
            setIsSortingActive(true);
            dispatch(sortingStudents({sorting: {...InitialSorting, [key]: true}}));
            setSortingName(key);
        }
    }
    return (
        <div className={styles.sorting}>
            {needShowModal && <Modal onClickHandler={onClickHandler} activeSorting={sortingName}/>}
            {isSortingActive &&
                <div className={styles.name}>
                    {SortingMap[sortingName as SortingKeys]}
                </div>
            }
            <button className={styles.button} onClick={showModalHandler}>
            </button>
        </div>
    );
}

export default Sorting;