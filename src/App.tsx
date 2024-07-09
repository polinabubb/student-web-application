import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {StudentList} from './components/StudentList/StudentList';
import {useAppDispatch} from './hooks';
import {
    getStudentList
} from './store/apiActions';
import Header from "./components/Header/Header";


const router = createBrowserRouter([
    {
        path: '/',
        element: <StudentList/>,
    },

]);

function App() {
    const dispatch = useAppDispatch();
    dispatch(getStudentList(''));
    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
        </>
    );
}

//<RouterProvider router={router}/>
export default App;
