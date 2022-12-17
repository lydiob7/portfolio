import mainImage from 'assets/images/gabipolanco-main.png';

const gabiPortfolio = {
    number: '01',
    id: 'gabi-portfolio',
    featured: true,
    skills: ['javascript', 'react', 'redux', 'materialui', 'html', 'css', 'tailwind', 'gsap'],
    mainImage,
    websiteUrl: 'https://gabrielapolancoferreyra.com/',
    githubRepo: 'https://github.com/lydiob7/gabi-portfolio',
    next: 'creativa',
    en: {
        title: 'UX UI Designer Portfolio',
        about: [
            'Structured to display any number of future projects.',
            'Based on a personal template (https://tstemplateui.netlify.app/)',
            'Developed a system to cater for posts with different media types and text styles.'
        ],
        technologies: ['React', 'MaterialUI', 'Redux', 'GSAP']
    },
    es: {
        title: 'Portfolio de diseñadora UX UI',
        about: [
            'Estructurado para mostrar cualquier número de futuros proyectos.',
            'Basado en un template personal (https://tstemplateui.netlify.app/)',
            'Desarrollado un sistema para aceptar posts con diferentes tipos de media y estilos de texto.'
        ],
        technologies: ['React', 'MaterialUI', 'Redux', 'GSAP']
    }
};

export default gabiPortfolio;
