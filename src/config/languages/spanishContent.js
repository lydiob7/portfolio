const spanishContent = {
    errorPage: {
        pageTitle: 'Ups! Página no encontrada.',
        message:
            'La página que estás buscando puede haber sido removida, cambió de nombre, o está temporalmente fuera de servicio.',
        homeButton: 'Volver al inicio'
    },
    footer: {
        copyright: 'Todos los derechos reservados',
        menuItems: {
            terms: 'Términos y Condiciones',
            privacyPolicy: 'Política de privacidad'
        }
    },
    general: {
        skipNavigationAnchor: 'Saltar navegación'
    },
    aboutPage: {
        pageTitle: 'Sobre mí',
        bio: [
            'Soy Desarrollador Full Stack Italo-Argentino (internacional) con un background en Música Popular. Entusiasta de las tecnologías web, aprender nuevas habilidades, y encontrar nuevas maneras creativas de solucionar problemas.',
            'Trabajé como profesor de música en mi país natal por cinco años hasta que mis ansias de aventura me hicieron decidir abrir nuevos caminor y viajar alrededor del mundo. Trabajando como profesor aprendí a ser parte de un equipo interdisciplinar. Viajar me ayudó a adquirir la confianza necesaria para adaptarme rápidamente a diferentes situaciones. ',
            'Tengo conocimientos sólidos de ReactJs, Redux, HTML5, CSS (con pre-procesadores y librerías como Sass o Tailwind) y un extenso conocimiento de React Native y tecnologías backend (NodeJS, Express, MongoDB)'
        ],
        resumeLink: 'Curriculum',
        eventsTitle: 'Eventos importantes',
        eventList: [
            {
                year: '1991',
                content: 'Nací',
                status: 'Niño feliz'
            },
            {
                year: '2017',
                content: 'Licenciatura musica popular',
                status: 'Graduado'
            },
            {
                year: '2018-2019',
                content: 'Trabajo y vacaciones en Australia',
                status: 'Viajero'
            },
            {
                year: '2020',
                content: 'Ironhack',
                status: 'Estudiante'
            },
            {
                year: '2021',
                content: 'Smart Studios',
                status: 'Front-end'
            }
        ]
    },
    homePage: {
        banner: {
            descriptionOne: 'Hola, Soy Tomi Scattini, Desarrollador Full Stack de día',
            descriptionTwo: ', y músico el resto del día.'
        },
        contact: {
            message: 'Hablemos',
            designBy: 'Diseñado por',
            secondPictureCredits: 'La segunda foto de la portada fue tomada por'
        },
        projects: {
            pageTitle: 'Proyectos',
            subtitle: 'Algunos proyectos de los que me siento orgulloso'
        },
        skills: {
            pageTitle: 'Algunas de las cosas que sé hacer',
            viewResults: 'Ver resultados',
            resetAll: 'Reiniciar todo'
        }
    },
    landingPage: {
        descriptionTitle: 'Alguna descripción pertinente para esta plataforma',
        steps: [],
        authCard: {
            loginTitle: 'Inicio de Sesión',
            registerTitle: 'Registro',
            forgotPwdTitle: 'Recupera contraseña',
            goBackToLoginLink: 'Volver al Login',
            alreadyHaveAccountText: 'Ya tienes una cuenta?',
            alreadyHaveAccountLink: 'Inicia sesión',
            forgotPwdText: 'Has olvidado tu contraseña?',
            forgotPwdLink: 'Recupera contraseña',
            dontHaveAccountText: 'No tienes una cuenta?',
            dontHaveAccountLink: 'Registrate',
            loginForm: {
                emailLabel: 'Email',
                passwordLabel: 'Contraseña',
                submitBtn: 'Iniciar sesión',
                emailRequired: 'Debes introducir un email',
                validEmail: 'Debes introducir una dirección válida de email',
                passwordRequired: 'Debes introducir una contraseña'
            },
            forgotPwdForm: {
                emailLabel: 'Email',
                submitBtn: 'Enviar link',
                emailRequired: 'Debes introducir un email',
                validEmail: 'Debes introducir una dirección válida de email'
            },
            registerForm: {
                fullNameLabel: 'Nombre completo',
                emailLabel: 'Email',
                passwordLabel: 'Contraseña',
                confirmPwdLabel: 'Confirmar Contraseña',
                termsText: 'Acepto los',
                termsLink: 'Términos y Condiciones',
                submitBtn: 'Registrarse',
                nameRequired: 'Debes introducir tu nombre completo',
                emailRequired: 'Debes introducir un email',
                validEmail: 'Debes introducir una dirección válida de email',
                passwordRequired: 'Debes introducir una contraseña',
                validPassword: 'Contraseña demasiado corta - debe tener mínimo 8 caracteres',
                passwordMatch: 'Las contraseñas tienen que coincidir',
                termsRequired: 'Por favor acepta nuestros Términos y Condiciones'
            },
            mailConfirmationMessage: {
                title: 'Te enviamos un E-mail!',
                sentLinkTo: 'Enviamos un link a',
                yourEmailDefault: 'tu E-mail.',
                checkInbox:
                    'Chequea tu casilla de entrada y haz click en el link "Resetear contraseña" link to update your credentials.',
                didntReceiveEmailText: 'No recibiste el E-mail?',
                didntReceiveEmailLink: 'Re-enviar',
                goBackToLoginLink: 'Volver al Inicio de Sesión',
                mailResentMessage: 'El E-mail ha sido enviado nuevamente'
            }
        }
    },
    mantainancePage: {
        pageTitle: 'Este sitio está bajo mantenimiento.',
        message:
            'Estamos haciendo algunas actualizaciones para ofrecerle una mejor experiencia. Perdón por los inconvenientes, estaremos de vuelta muy pronto!',
        visitWebsiteButton: 'Visita nuestra página web'
    },
    navigationMenu: {
        work: 'Trabajos',
        about: 'Sobre mí',
        contact: 'Contacto',
        letsTalk: 'Hablemos'
    },
    privacyPolicy: {
        title: 'Política de Privacidad',
        content: 'Acá es donde van a ir las políticas de privacidad',
        actionButton: 'Inicio'
    },
    profilePage: {
        editBtn: 'Editar',
        cancelBtn: 'Cancelar',
        saveBtn: 'Guardar',
        unsavedChangesMessage: 'Hay cambios sin guardar. Quieres abandonar la página?',
        unsavedChangesActionBtn: 'Abandonar',
        generalTab: {
            title: 'General',
            keyInformation: {
                title: 'Información principal',
                firstNameLabel: 'Nombre(s)',
                firstNamePlaceholder: 'Ej: Juan',
                lastNameLabel: 'Apellido(s)',
                lastNamePlaceholder: 'Ej: Perez',
                emailLabel: 'Email',
                emailPlaceholder: 'Ej: juan@perez.com',
                phoneLabel: 'Teléfono',
                phonePlaceholder: '+54 (221) 485 1875',
                countryLabel: 'País de residencia',
                countryPlaceholder: 'Ej: Argentina'
            },
            otherInformation: {
                title: 'Otros',
                professionLabel: 'Profesión/Rol',
                professionPlaceholder: 'Ej: Productor Musical'
            }
        },
        workTab: {
            title: 'Trabajo',
            workInformation: {
                workLabel: 'Profesión/Rol',
                workPlaceholder: 'Ej: Productor Musical'
            }
        },
        otherTab: {
            title: 'Otros',
            generalInformation: {
                title: 'General'
            },
            moreInformation: {
                title: 'Más'
            }
        }
    },
    projectPage: {
        aboutTitle: 'Acerca del proyecto',
        technologiesTitle: 'Tecnologías',
        codeTitle: 'Mirá el código',
        liveTitle: 'Proyecto en vivo',
        repoLink: 'Link github',
        seeAll: 'Ver Todo',
        websiteLink: 'Link website'
    },
    resultsPage: {
        pageTitle: 'Resultados',
        repoLink: 'Repositorio'
    },
    settingsPage: {
        menu: {
            title: 'Configuración',
            profileLink: 'Editar Perfil',
            changePwdLink: 'Cambiar contraseña',
            deleteAccountLink: 'Eliminar cuenta'
        },
        changePasswordCard: {
            title: 'Cambiar tu contraseña',
            newPasswordLabel: 'Nueva contraseña',
            passwordConfirmLabel: 'Contraseña (Confirmar)',
            submitBtn: 'Cambiar mi contraseña',
            newPasswordRequired: 'Debes introducir una nueva contraseña',
            validPassword: 'Contraseña demasiado corta - debe tener mínimo 8 caracteres',
            passwordMatch: 'Las contraseñas tienen que coincidir'
        },
        deleteAccountCard: {
            title: 'Eliminar tu cuenta',
            deleteLabel: 'Escribí "Eliminar"',
            submitBtn: 'Eliminar cuenta',
            confirmRequired: 'Por favor escribí exactamente la palabra "Eliminar"',
            confirmationWord: ['eliminar']
        }
    },
    supportedLanguages: {
        en: 'Inglés',
        es: 'Español'
    },
    termsAndConditions: {
        title: 'Términos y Condiciones',
        content: 'Acá es dónde van a ir los términos y condiciones',
        actionButton: 'Inicio'
    }
};

export default spanishContent;
