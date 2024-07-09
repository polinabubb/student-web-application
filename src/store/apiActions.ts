import {createAsyncThunk} from '@reduxjs/toolkit';
import {Student, AppDispatch, State} from '../types';
import {AxiosInstance} from 'axios';

export const getStudentList = createAsyncThunk<
    Student[],string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('getStudentList', async (id,{extra: api}) => {
    const {data} = await api.get<{
        students: Student[]
    }>('https://front-assignment-api.2tapp.cc/api/persons');
    return data.students;
});
