//* Import components here 👇👇
import ErrorPage from 'pages/others/ErrorPage';
import { AboutPage, HomePage, ProjectPage, ResultsPage } from 'pages';

import { parsePath } from 'utils/helpers';
import authRoles from 'auth/authRoles';

export const defaultRedirects = {
    notAuthenticated: '/login',
    [authRoles.admin]: '/profile',
    [authRoles.user]: '/home',
    [authRoles.onlyGuest]: '/profile',
    default: '/home'
};

export const routes = [
    {
        path: parsePath('/'),
        component: HomePage,
        exact: true
    },
    {
        path: parsePath('/about'),
        component: AboutPage,
        exact: true
    },
    {
        path: parsePath('/projects/:id'),
        component: ProjectPage
    },
    {
        path: parsePath('/results'),
        component: ResultsPage
    },
    {
        component: ErrorPage,
        layout: false
    }
];
