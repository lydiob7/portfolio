import { getRandomId } from 'utils/helpers';
import chapati from 'data/chapati';
import gabiPortfolio from 'data/gabiPortfolio';
import tierraRoja from 'data/tierraRoja';

import tomiScattiniMainImage from 'assets/images/tomiscattini-main.png';
import tomiScattiniOldMainImage from 'assets/images/tomiscattini-old-main.png';
import templateUIMainImage from 'assets/images/template-ui-main.png';
import vaikunthaMainImage from 'assets/images/vaikuntha-main.png';
import bandaEspeciaMainImage from 'assets/images/banda-especia-main.png';

class Projects {
    rawData = [
        gabiPortfolio,
        chapati,
        tierraRoja,
        {
            id: getRandomId(),
            skills: ['javascript', 'react', 'redux', 'materialui', 'html', 'css', 'tailwind'],
            mainImage: tomiScattiniMainImage,
            websiteUrl: 'https://www.tomiscattini.com/',
            githubRepo: 'https://github.com/lydiob7/portfolio',
            en: {
                title: 'Tomi Scattini - Portfolio',
                about: [
                    'Full Stack Developer Personal portfolio.',
                    'The portfolio you are currently in... Inception! 🤯'
                ]
            },
            es: {
                title: 'Tomi Scattini - Portfolio',
                about: [
                    'Portfolio personal de Full Stack Developer.',
                    'El portfolio donde te encuentras en este momento... Inception! 🤯'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['javascript', 'react', 'styled-components', 'html', 'css', 'heroku', 'node', 'express', 'api'],
            mainImage: tomiScattiniOldMainImage,
            websiteUrl: 'https://www.tomiscattini.com/v1/',
            githubRepo: 'https://github.com/lydiob7/portfolio_old',
            en: {
                title: 'Tomi Scattini - Old Portfolio',
                about: [
                    'Full Stack Developer Personal portfolio.',
                    'Before the website you are currently in, this was my face to the world.'
                ]
            },
            es: {
                title: 'Tomi Scattini - Portfolio viejo',
                about: [
                    'Portfolio personal de Full Stack Developer.',
                    'Antes del portfolio en donde te encuentras ahora, esta era la cara que mostraba al mundo.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['javascript', 'react', 'redux', 'materialui', 'html', 'css', 'firebase'],
            mainImage: templateUIMainImage,
            websiteUrl: 'https://tstemplateui.netlify.app',
            githubRepo: 'https://github.com/lydiob7/project-template',
            en: {
                title: 'Personal Template UI',
                about: [
                    'UI kit created on top of Material UI.',
                    'Multiple pages, authentication, firebase connection, multilanguage, color themes.'
                ]
            },
            es: {
                title: 'Template UI personal',
                about: [
                    'Kit UI creado sobre Material UI.',
                    'Múltiples páginas, autenticación, conexión con firebase, multiples lenguajes, diferentes esquemas de colores.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['javascript', 'react', 'redux', 'tailwind', 'html', 'css', 'contentful'],
            mainImage: vaikunthaMainImage,
            websiteUrl: 'https://vaikuntha.com.ar/',
            githubRepo: 'https://github.com/lydiob7/vaikuntha',
            en: {
                title: 'Vaikuntha',
                about: [
                    'Ceramist portfolio.',
                    'More than 5 internal pages with dynamic data.',
                    'Blog integrated with Contentful.',
                    'Instagram feed for different projects.'
                ]
            },
            es: {
                title: 'Vaikuntha',
                about: [
                    'Portfolio de ceramista',
                    'Más de 5 páginas internas con data dinámica.',
                    'Blog integrado con Contentful.',
                    'Feed de Instagram para diferentes proyectos.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['javascript', 'html', 'css', 'jquery'],
            mainImage: bandaEspeciaMainImage,
            websiteUrl: 'https://bandaespecia.netlify.app/',
            githubRepo: 'https://github.com/lydiob7/bandaespecia',
            en: {
                title: 'Banda Especia',
                about: ['Argentinian music band website.', "One of my firsts developer projects I'm still proud of."]
            },
            es: {
                title: 'Banda Especia',
                about: [
                    'Página web de banda de música argentina.',
                    'Una de mis primeros proyectos como desarrollador del cual todavía estoy orgulloso.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['sing', 'guitar'],
            mainVideo: 'https://www.youtube.com/embed/s5Htqr1oqIs',
            websiteUrl: 'https://youtu.be/s5Htqr1oqIs',
            en: {
                title: 'Canción de la marea - Gracias por las flores',
                about: [
                    'Beautiful song from Gracias por las flores, music group from La Plata, Argentina that used to delight us with their music a long time ago.'
                ]
            },
            es: {
                title: 'Canción de la marea - Gracias por las flores',
                about: ['Canción hermosa de Gracias por las flores, banda platense que supo existir hace tiempo.']
            }
        },
        {
            id: getRandomId(),
            skills: ['sing', 'guitar'],
            mainVideo: 'https://www.youtube.com/embed/z9mDYTBicXE',
            websiteUrl: 'https://youtu.be/z9mDYTBicXE',
            en: {
                title: 'El tiempo está después - Fernando Cabrera (versión Tomi Scattini)',
                about: [
                    'Beautiful song from uruguayan song-writer Fernando Cabrera.',
                    'Played in the gardens of "La fuente retreat" in the valley of Lecrin, Granada, Spain.'
                ]
            },
            es: {
                title: 'El tiempo está después - Fernando Cabrera (versión Tomi Scattini)',
                about: [
                    'Canción hermosísima del cantautor uruguayo Fernando Cabrera.',
                    'Interpretada en los jardines de la finca "La fuente retreat" en el valle de Lecrín, Granada, España.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['sing', 'guitar'],
            mainVideo: 'https://www.youtube.com/embed/WLwVUKd_Kyc',
            websiteUrl: 'https://youtu.be/WLwVUKd_Kyc',
            en: {
                title: 'Desaprender - Adrián Berra',
                about: [
                    'I recorded this song from Adrian Berra at the back of the house I used to live in Woodford, Queensland, Australia.'
                ]
            },
            es: {
                title: 'Desaprender - Adrián Berra',
                about: ['Este tema de Adrián Berra lo grabé en el fondo de mi casa en Woodford, Queensland, Australia.']
            }
        },
        {
            id: getRandomId(),
            skills: ['sing', 'guitar'],
            mainVideo: 'https://www.youtube.com/embed/6ckyv5cCE-8',
            websiteUrl: 'https://youtu.be/6ckyv5cCE-8',
            en: {
                title: 'Si no llego a mañana - Interactivo',
                about: [
                    'Song from the great cuban band "Interactivo" interpreted at the shores of a lake in Ninh Binh, Vietnam.'
                ]
            },
            es: {
                title: 'Si no llego a mañana - Interactivo',
                about: [
                    'Canción de la gran banda cubana "Interactivo" interpretada a las orillas del lago en Ninh Binh, Vietnam.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['sing', 'bass'],
            mainVideo: 'https://www.youtube.com/embed/LaNqHHI74ZE',
            websiteUrl: 'https://youtu.be/LaNqHHI74ZE',
            en: {
                title: 'Dosis de Anormal - Malena Canta el Funk, Ciclo Mira! FBA',
                about: [
                    'Ciclo Mirá! Open sessions is a project of the secretary of institutional relationships and the Sound Laboratory, recording studio of the FBA. The goal is to develop an audio-visual product to show and foster music productions from the students and graduated of the diverse degrees in music of the School of Arts.'
                ]
            },
            es: {
                title: 'Dosis de Anormal - Malena Canta el Funk en Ciclo Mira! FBA',
                about: [
                    'El Ciclo “Mirá! Sesiones Abiertas” es un proyecto de la Secretaría de Relaciones Institucionales en conjunto con el Laboratorio de Sonido, estudio de grabación de la FBA. El objetivo es desarrollar un producto audiovisual que muestre y fomente las producciones musicales de alumnos/as y graduados/as de las carreras de música de la Facultad de Bellas Artes.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['bass', 'composition'],
            mainVideo: 'https://www.youtube.com/embed/L4RxS8-EEJ8',
            websiteUrl: 'https://youtu.be/L4RxS8-EEJ8',
            en: {
                title: 'Pero la Realidad - Malena Canta el Funk, Ciclo Mira! FBA',
                about: [
                    'Ciclo Mirá! Open sessions is a project of the secretary of institutional relationships and the Sound Laboratory, recording studio of the FBA. The goal is to develop an audio-visual product to show and foster music productions from the students and graduated of the diverse degrees in music of the School of Arts.'
                ]
            },
            es: {
                title: 'Pero la Realidad - Malena Canta el Funk en Ciclo Mira! FBA',
                about: [
                    'El Ciclo “Mirá! Sesiones Abiertas” es un proyecto de la Secretaría de Relaciones Institucionales en conjunto con el Laboratorio de Sonido, estudio de grabación de la FBA. El objetivo es desarrollar un producto audiovisual que muestre y fomente las producciones musicales de alumnos/as y graduados/as de las carreras de música de la Facultad de Bellas Artes.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['bass'],
            mainVideo: 'https://www.youtube.com/embed/8nEd4k689gI',
            websiteUrl: 'https://youtu.be/8nEd4k689gI',
            en: {
                title: 'Entre a mi pago sin golpear - Chango Farias Gomez',
                about: [
                    'Great chacarera from Carlos Carabajal in the version of Chango Farías Gómez in Encuentro en el estudio of 2012.',
                    'The bass player on this arrangement is Omar Gómez, the best of the best.'
                ]
            },
            es: {
                title: 'Entre a mi pago sin golpear - Chango Farias Gomez',
                about: [
                    'Gran chacarera de Carlos Carabajal en la versión del Chango Farías Gómez en Encuentro en el estudio del año 2012.',
                    'El bajista de este arreglo es Omar Gómez, genio de la vida.'
                ]
            }
        },
        {
            id: getRandomId(),
            skills: ['bass'],
            mainVideo: 'https://www.youtube.com/embed/x0YCm4ZvM28',
            websiteUrl: 'https://youtu.be/x0YCm4ZvM28',
            en: {
                title: 'Samurai - Djavan',
                about: ['Song from brazilian song-writer Djavan.', 'Played with 4 string bass and envelope effect.']
            },
            es: {
                title: 'Samurai - Djavan',
                about: [
                    'Canción del cantautor brasileño Djavan.',
                    'Interpretado con bajo de 4 cuerdas y efecto envelope.'
                ]
            }
        }
    ];

    getAll() {
        return this.rawData;
    }

    getFeatured() {
        return this.rawData.filter((project) => project?.featured);
    }

    getById(id) {
        return this.rawData.filter((project) => project.id === id)?.[0];
    }

    getBySkills(skills) {
        const matchingProjects = [];
        skills?.split(',').forEach((skill) => {
            this.rawData.forEach((project) => {
                if (project?.skills?.includes(skill)) matchingProjects.push(project);
            });
        });
        const removedDuplicates = [...matchingProjects?.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];
        return removedDuplicates;
    }
}

const instance = new Projects();

export default instance;
