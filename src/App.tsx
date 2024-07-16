import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from "./layouts/layout";
import MainPage from './pages/main/MainPage';
import NotFoundPage from './pages/notFound/NotFoundPage';

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <Layout>
                <MainPage/>
            </Layout>,
    },
    {
        path: '*',
        element:
            <NotFoundPage/>
        ,
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
