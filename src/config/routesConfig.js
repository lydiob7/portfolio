//* Import components here 👇👇
import ErrorPage from 'pages/others/ErrorPage';
import { HomePage } from 'pages';

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
        component: ErrorPage,
        layout: false,
        noLayoutFooter: true,
        noLayoutBtn: true
    }
];
