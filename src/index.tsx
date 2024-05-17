import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Route, Routes} from 'react-router-dom';

import {store} from '@redux/configure-store';
import {MainPage} from './pages';

import 'normalize.css';
import './index.css';
import {Test} from "@pages/main-page/mainContent/sidebar/Test.tsx";
import {Blogs} from "@pages/main-page/mainContent/blogs/blogs.tsx";

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}>
                        <Route path={'/posts'} element={<Test/>}></Route>
                        <Route path={'/blogs'} element={<Blogs/>}></Route>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
