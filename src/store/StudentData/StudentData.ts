import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Student} from '../../types';
import {PayloadAction} from '@reduxjs/toolkit';
import {getStudentList} from '../apiActions';

type StudentData = {
    students: Student[],
    isStudentsLoading: boolean,
    hasError: boolean,
};

const initialState: StudentData = {
    students: [],
    isStudentsLoading: false,
    hasError: false,
}
export const studentData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        deleteStudent(state, action: PayloadAction<{ id: number }>) {
            const {id} = action.payload;
            let index = null;
            for (let i = 0; i < state.students.length; i++) {
                if (state.students[i].id === id) {
                    index = i;
                    break;
                }
            }
            if (index) {
                state.students = state.students.splice(index, 1);
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getStudentList.pending, (state) => {
                state.isStudentsLoading = true;
                state.hasError = false;
            })
            .addCase(getStudentList.fulfilled, (state, action) => {
                const data = action.payload;
                if (data) {
                    state.students = data;
                } else {
                    state.hasError = true;
                }
                state.isStudentsLoading = false;
            })
            .addCase(getStudentList.rejected, (state) => {
                state.isStudentsLoading = false;
                state.hasError = true;
            })
    }
});

export const {
    deleteStudent,
} = studentData.actions;