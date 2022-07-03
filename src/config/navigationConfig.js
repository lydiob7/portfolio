import { parsePath } from 'utils/helpers';

const navigationConfig = (language) => ({
    headermenu: [
        {
            title: language?.navigationMenu?.about,
            icon: 'home_outlined',
            path: parsePath('/about')
        },
        {
            title: language?.navigationMenu?.work,
            icon: 'home_outlined',
            path: parsePath('/#work')
        },
        {
            title: language?.navigationMenu?.contact,
            icon: 'home_outlined',
            path: parsePath('/#contact')
        }
    ],
    footermenu: []
});

export default navigationConfig;
