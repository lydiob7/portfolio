import mainImage from 'assets/images/tierraroja-main.png';

const tierraRoja = {
    number: '03',
    id: 'tierra-roja',
    featured: true,
    skills: [
        'javascript',
        'react',
        'html',
        'css',
        'node',
        'mongodb',
        'antd',
        'styled-components',
        'heroku',
        'express',
        'api'
    ],
    mainImage,
    websiteUrl: 'https://tierra-roja.herokuapp.com/',
    githubRepo: 'https://github.com/lydiob7/tierra-roja',
    previous: 'chapati',
    en: {
        title: 'Tierra Roja',
        about: [
            '4 different user roles from administrator to end-user and guest.',
            'More than 15 screens with different functionalities.',
            'Deployed from scratch in 10 days.',
            'Fully working API connected to a SPA on the frontend and a cloud MongoDB database.'
        ],
        technologies: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'Styled Components']
    },
    es: {
        title: 'Tierra Roja',
        about: [
            '4 roles diferentes de usuario desde administrador hasta usuario final y visitante.',
            'Más de 15 pantallas con diferentes funcionalidades.',
            'Desarrollado desde cero en 10 días.',
            'API completamente funcional conectada a una SPA en el lado del cliente y una base de datos de MongoDB en la nube.'
        ],
        technologies: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'Styled Components']
    }
};

export default tierraRoja;
