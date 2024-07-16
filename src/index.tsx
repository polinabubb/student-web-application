import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import './fonts/Geometria/Geometria-Regular.woff2';
import './fonts/Geometria/Geometria-Medium.woff2';
import './fonts/Geometria/Geometria-Bold.woff2';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
