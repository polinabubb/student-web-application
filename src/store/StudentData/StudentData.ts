import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {SortingType, Student} from '../../types';
import {PayloadAction} from '@reduxjs/toolkit';
import {fetchStudentList} from '../apiActions';

type StudentData = {
    sortingStudents: Student[],
    displayedStudents: Student[],
    students: Student[],
    isStudentsLoading: boolean,
    hasError: boolean,
};

const initialState: StudentData = {
    sortingStudents: [],
    displayedStudents: [],
    students: [],
    isStudentsLoading: false,
    hasError: false,
}

function FindStudentIndex(id: number, students: Student[]) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return i;
        }
    }
    return -1;
}

function DeleteStudentById(id: number, students: Student[]) {
    let index = FindStudentIndex(id, students);
    let result = students;
    if (index !== -1) {
        if (index === 0) {
            result = students.slice(index + 1, students.length);
        } else {
            result = students.slice(0, index).concat(students.slice(index + 1, students.length));
        }
    }
    return result;
}

export const studentData = createSlice({
        name: NameSpace.Data,
        initialState,
        reducers: {
            deleteStudent(state, action: PayloadAction<{ id: number }>) {
                const {id} = action.payload;
                state.students = DeleteStudentById(id, state.students);
                state.displayedStudents = DeleteStudentById(id, state.displayedStudents);
                state.sortingStudents = DeleteStudentById(id, state.sortingStudents);
            },
            sortingStudents(state, action: PayloadAction<{ sorting: SortingType }>) {
                const {sorting} = action.payload;
                let sortingFunction;
                if (sorting.byName) {
                    sortingFunction = (a: Student, b: Student) => a.name.localeCompare(b.name);
                } else if (sorting.byNameReverse) {
                    sortingFunction = (a: Student, b: Student) => -a.name.localeCompare(b.name);
                } else if (sorting.byAge) {
                    sortingFunction = (a: Student, b: Student) => new Date(b.birthday).getTime() - new Date(a.birthday).getTime();
                } else if (sorting.byAgeReverse) {
                    sortingFunction = (a: Student, b: Student) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime();
                } else if (sorting.byRating) {
                    sortingFunction = (a: Student, b: Student) => a.rating - b.rating;
                } else if (sorting.byRatingReverse) {
                    sortingFunction = (a: Student, b: Student) => b.rating - a.rating;
                } else {
                    state.displayedStudents = state.students;
                    return;
                }
                state.sortingStudents = state.sortingStudents.sort(sortingFunction);
                state.displayedStudents = state.displayedStudents.sort(sortingFunction);
            },
            filterStudents(state, action: PayloadAction<{ name: string }>) {
                const {name} = action.payload;
                if (name === '') {
                    state.displayedStudents = state.sortingStudents;
                } else {
                    state.displayedStudents = state.sortingStudents.filter((student) => student.name.toLowerCase().includes(name.toLowerCase()));
                }
            },
        },
        extraReducers(builder) {
            builder
                .addCase(fetchStudentList.pending, (state) => {
                    state.isStudentsLoading = true;
                    state.hasError = false;
                })
                .addCase(fetchStudentList.fulfilled, (state, action) => {
                    const data = action.payload;
                    if (data) {
                        state.students = data;
                        state.displayedStudents = data;
                        state.sortingStudents = data;
                    } else {
                        state.hasError = true;
                    }
                    state.isStudentsLoading = false;
                })
                .addCase(fetchStudentList.rejected, (state) => {
                    state.isStudentsLoading = false;
                    state.hasError = true;
                })
        }
    })
;

export const {
    deleteStudent, sortingStudents, filterStudents,
} = studentData.actions;