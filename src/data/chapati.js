import mainImage from 'assets/images/chapati-main.png';

const chapati = {
    number: '02',
    id: 'chapati',
    featured: false,
    skills: ['javascript', 'react', 'html', 'css', 'typescript', 'gsap'],
    mainImage,
    websiteUrl: 'https://www.chapati-delta.com.ar/',
    githubRepo: 'https://github.com/lydiob7/chapati',
    next: 'migue-bruno',
    previous: 'gabi-portfolio',
    en: {
        title: 'Chapati',
        about: [
            'Up to 10 animations (including scroll-based) thoroughly selected in a one-page website',
            'Fully type-safe, ensuring fewer errors throughout the code.'
        ],
        technologies: ['React', 'Typescript', 'GSAP', 'Styled Components']
    },
    es: {
        title: 'Chapati',
        about: [
            'Más de 10 animaciones (incluídas basadas en el scroll) cuidadosamente seleccionadas en un sitio web de una sola página',
            'Fuertemente tipado, asegurando la menor cantidad de errores en el código.'
        ],
        technologies: ['React', 'Typescript', 'GSAP', 'Styled Components']
    }
};

export default chapati;
