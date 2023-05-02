import * as views from '../views'
import * as ROUTES from '../constants/Routers'
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import { Navigation } from '../components/common'

import React from 'react';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
const AppRouter = () => {
    // console.log(">>>>>>>>>>>>>>>>>>>>>> AppRouter",history);
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route
                    path='/'
                    element={<views.Home />}
                />
                <Route
                path='/signin'
                element={<views.SignIn/>}
                />

            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;