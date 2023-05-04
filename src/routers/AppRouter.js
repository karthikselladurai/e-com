import * as views from "../views";
import * as ROUTES from "../constants/RouteConstant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "../components/common";
import Main from './../components/main';
import ClientRoute from '../routers/ClientRouting'

import React from "react";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path={ROUTES.DEMO} element={<views.Demo />} />
        <Route path={ROUTES.HOME} element={<views.Home />}>
          <Route index element={<Main/> }/> 
          <Route path={ROUTES.CHAT} element={<views.chat />}></Route>
          <Route path={ROUTES.CHAT} element={<views.chat />}></Route>
          <Route path={ROUTES.ACTIVITIES} element={<views.Activities />}></Route>
        </Route>
        {/* <ClientRoute path={ROUTES.HOME} element={views.Home}></ClientRoute> */}
        <Route path={ROUTES.SIGNIN} element={<views.SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<views.SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;