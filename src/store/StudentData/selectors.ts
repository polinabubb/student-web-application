import {NameSpace} from '../../const';
import {State, Student} from '../../types';

export const getStudents = (state: Pick<State, NameSpace.Data>): Student[] =>
    state[NameSpace.Data].displayedStudents;

export const getStudentDataLoadingStatus = (
    state: Pick<State, NameSpace.Data>
): boolean => state[NameSpace.Data].isStudentsLoading;
