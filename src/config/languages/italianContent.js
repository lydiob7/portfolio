const italianContent = {
    errorPage: {
        pageTile: 'Ops! Pagina non trovata.',
        message:
            'La pagina che sta cercando potrebbe essere stata rimossa, il suo nome è stato modificato o è temporaneamente non disponibile.',
        homeButton: 'Torna alla home page'
    },
    footer: {
        copyright: 'Tutti i diritti riservati',
        menuItems: {
            terms: 'Termini e Condizioni',
            privacyPolicy: 'Informativa sulla privacy'
        }
    },
    general: {
        skipNavigationAnchor: 'salta la navigazione'
    },
    aboutPage: {
        pageTitle: 'Su di me',
        bio: [
            'Sono uno Sviluppatore Front End italo-argentino (basato sul mondo) con un background nella Musica popolare. Appassionato di tecnologie web, apprendimento di nuove competenze e ricerca di nuovi modi creativi di risolvere i problemi.',
            "Ho lavorato come insegnante di musica nel mio paese d'origine per cinque anni fino a quando la mia voglia di avventura mi ha fatto decidere di mettermi in viaggio e viaggiare in tutto il mondo. Lavorando come insegnante ho imparato a lavorare come parte di un team interdisciplinare. Il viaggio mi ha aiutato ad acquisire la sicurezza di adattarmi rapidamente alle varie situazioni.",
            'Ho una solida conoscenza di ReactJs, Redux, HTML5, CSS (con preprocessori e librerie come Sass o Tailwind) e una vasta conoscenza de React Native e tecnologie backend (NodeJS, Express, MongoDB)'
        ],
        resumeLink: 'Curriculum vitae',
        eventsTitle: 'Eventi importanti',
        eventList: [
            {
                year: '1991',
                content: 'Sono nato',
                status: 'Bambino felice'
            },
            {
                year: '2017',
                content: 'Laurea specialistica in Musica Popolare',
                status: 'Laureato'
            },
            {
                year: '2018-2019',
                content: 'Lavoro e vacanze in Australia',
                status: 'Viaggiatore'
            },
            {
                year: '2020',
                content: 'Ironhack',
                status: 'Studente'
            },
            {
                year: '2021',
                content: 'Smart Studios',
                status: 'Sviluppatore Front-end'
            }
        ]
    },
    homePage: {
        banner: {
            descriptionOne: 'Ciao a tutti, Io sono Tomi Scattini, Sviluppatore Front End di giorno',
            descriptionTwo: ', e musicista il resto della giornata.'
        },
        contact: {
            message: 'Dì ciao',
            designBy: 'disegnato da',
            secondPictureCredits: 'La seconda fotografia della copertina è stata scattata da'
        },
        projects: {
            pageTitle: 'Progetti',
            subtitle: 'Alcuni progetti di cui sono orgoglioso'
        },
        skills: {
            pageTitle: 'Alcune delle cose che so fare',
            viewResults: 'Visualizza i risultati',
            resetAll: 'Ripristina tutto'
        }
    },
    landingPage: {
        descriptionTitle: 'Some description for the platform',
        steps: [],
        authCard: {
            loginTitle: 'Login',
            registerTitle: 'Register',
            forgotPwdTitle: 'Reset Password',
            goBackToLoginLink: 'Go back to Login',
            alreadyHaveAccountText: 'Already have an account?',
            alreadyHaveAccountLink: 'Login',
            forgotPwdText: 'Have you forgotten your password?',
            forgotPwdLink: 'Reset Password',
            dontHaveAccountText: "Don't have an account?",
            dontHaveAccountLink: 'Register',
            loginForm: {
                emailLabel: 'Email',
                passwordLabel: 'Password',
                submitBtn: 'Log in',
                emailRequired: 'You must enter an email',
                validEmail: 'You must enter a valid email',
                passwordRequired: 'Please enter your password.'
            },
            forgotPwdForm: {
                emailLabel: 'Email',
                submitBtn: 'Send reset link',
                emailRequired: 'You must enter an email',
                validEmail: 'You must enter a valid email'
            },
            registerForm: {
                fullNameLabel: 'Full name',
                emailLabel: 'Email',
                passwordLabel: 'Password',
                confirmPwdLabel: 'Confirm Password',
                termsText: 'I Accept the',
                termsLink: 'Terms & Conditions',
                submitBtn: 'Register',
                nameRequired: 'You must enter display name',
                emailRequired: 'You must enter an email',
                validEmail: 'You must enter a valid email',
                passwordRequired: 'Please enter your password.',
                validPassword: 'Password is too short - should be 8 chars minimum.',
                passwordMatch: 'Passwords must match',
                termsRequired: 'Please accept our Terms & Conditions'
            },
            mailConfirmationMessage: {
                title: 'We sent you an E-mail!',
                sentLinkTo: 'We have sent a link to',
                yourEmailDefault: 'your E-mail.',
                checkInbox: 'Check your inbox and click on the "Reset password" link to update your credentials.',
                didntReceiveEmailText: "Didn't receive the E-mail?",
                didntReceiveEmailLink: 'Re-send',
                goBackToLoginLink: 'Go back to Login',
                mailResentMessage: 'The E-mail has been re-sent'
            }
        }
    },
    mantainancePage: {
        pageTitle: 'This site is under mantainance.',
        message:
            "We are making some updates to bring you the best experience. Sorry for the inconvenience, we'll be back very soon!",
        visitWebsiteButton: 'Visit our Website'
    },
    navigationMenu: {
        work: 'Lavoro',
        about: 'Su di me',
        contact: 'Contatto',
        letsTalk: 'Parliamo'
    },
    privacyPolicy: {
        title: 'Privacy Policy',
        content: 'This is where the privacy policy will go',
        actionButton: 'Home'
    },
    profilePage: {
        editBtn: 'Edit',
        cancelBtn: 'Cancel',
        saveBtn: 'Save',
        unsavedChangesMessage: 'There are Some Unsaved Changes. Do you want to go Away?',
        unsavedChangesActionBtn: 'Leave',
        generalTab: {
            title: 'General',
            keyInformation: {
                title: 'Key Information',
                firstNameLabel: 'First Name(s)',
                firstNamePlaceholder: 'Eg: John',
                lastNameLabel: 'Last Name(s)',
                lastNamePlaceholder: 'Eg: Doe',
                emailLabel: 'Email',
                emailPlaceholder: 'Eg: john@doe.com',
                phoneLabel: 'Phone number',
                phonePlaceholder: '+39 (351) 548 1875',
                countryLabel: 'Country of residence',
                countryPlaceholder: 'Eg: Malta'
            },
            otherInformation: {
                title: 'Other',
                professionLabel: 'Profession/Role',
                professionPlaceholder: 'Eg: Product Manager'
            }
        },
        workTab: {
            title: 'Work',
            workInformation: {
                workLabel: 'Profession/Role',
                workPlaceholder: 'Eg: Product Manager'
            }
        },
        otherTab: {
            title: 'Other',
            generalInformation: {
                title: 'General'
            },
            moreInformation: {
                title: 'More'
            }
        }
    },
    projectPage: {
        aboutTitle: 'Sul progetto',
        technologiesTitle: 'Tecnologie',
        codeTitle: 'Guarda il codice',
        liveTitle: 'Progetto live',
        repoLink: 'Link Github',
        seeAll: 'Guarda Tutto',
        websiteLink: 'Link Sito Web'
    },
    resultsPage: {
        pageTitle: 'Risultati',
        repoLink: 'Repository'
    },
    settingsPage: {
        menu: {
            title: 'Settings',
            profileLink: 'Edit Profile',
            changePwdLink: 'Change Password',
            deleteAccountLink: 'Delete Account'
        },
        changePasswordCard: {
            title: 'Change your password',
            newPasswordLabel: 'New Password',
            passwordConfirmLabel: 'Password (Confirm)',
            submitBtn: 'Change my password',
            newPasswordRequired: 'Please enter your new password.',
            validPassword: 'Password is too short - should be 8 chars minimum.',
            passwordMatch: 'Passwords must match.'
        },
        deleteAccountCard: {
            title: 'Delete your account',
            deleteLabel: 'Write "Delete"',
            submitBtn: 'Delete Account',
            confirmRequired: 'Please write exactly the word "Delete".',
            confirmationWord: ['delete']
        }
    },
    supportedLanguages: {
        en: 'Inglese',
        es: 'Spagnolo',
        it: 'Italiano'
    },
    termsAndConditions: {
        title: 'Terms & Conditions',
        content: 'This is where the terms and conditions will go',
        actionButton: 'Home'
    }
};

export default italianContent;
