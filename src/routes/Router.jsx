import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routePaths from './routePaths';

import { UsersListPage, UserProfilePage } from '../view/pages';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={routePaths.usersListPage()} component={UsersListPage} />
            <Route exact path={routePaths.userProfilePage(':username')} component={UserProfilePage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
