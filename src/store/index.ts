import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {NameSpace} from '../const';
import {studentData} from './StudentData/StudentData';
import { combineReducers } from '@reduxjs/toolkit';

export const api = createAPI();

export const store = configureStore({
    reducer: combineReducers({
        [NameSpace.Data]: studentData.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
        }),
});