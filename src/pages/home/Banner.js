import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageChanged } from 'store/uiSlice';
import clsx from 'clsx';

import banner1 from 'assets/images/banner1.JPG';
import banner2 from 'assets/images/banner2.jpg';

import { Button, Container, Divider, makeStyles } from '@material-ui/core';

import { Email as EmailIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    description: {
        display: 'block',
        minHeight: '175px',
        fontSize: '1.5rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        lineHeight: '1.2',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
            lineHeight: '1'
        }
    },
    image: {
        height: 'auto',
        width: '50%',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            height: '300px',
            width: 'auto'
        },
        '& img': {
            height: '100%'
        }
    },
    imageTwo: {
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            zIndex: 20,
            right: '6rem'
        }
    },
    languagesSwitch: {
        top: '30%',
        [theme.breakpoints.up('sm')]: {
            top: '25%'
        },
        right: '10vw',
        [theme.breakpoints.up('md')]: {
            top: '30vh'
        }
    },
    root: {
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        minHeight: 'calc(100vh - 80px)',
        color: theme.palette.primary.contrastText,
        padding: '8vh 0'
    }
}));

const Banner = ({ classes, ...props }) => {
    const dispatch = useDispatch();
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.banner);
    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Container maxWidth="md">
                <p className={internalClasses.description}>
                    {textProvider?.descriptionOne}
                    {textProvider?.descriptionTwo}
                </p>
                <div
                    className={clsx(
                        'relative flex w-full sm:justify-center mt-24 sm:mt-auto',
                        currentLanguage === 'es' && 'sm:mt-16'
                    )}
                >
                    <div className={clsx(internalClasses.image, internalClasses.imageOne, 'translate-y-[-2rem]')}>
                        <img src={banner1} alt="Tomi on a cafe in Catania" />
                    </div>
                    <div className={clsx(internalClasses.image, internalClasses.imageTwo)}>
                        <img src={banner2} alt="Tomi playing bass in NYC" />
                    </div>
                </div>
            </Container>
            <ul className="md:absolute flex md:flex-col justify-center md:justify-between gap-5 md:left-32 md:bottom-40 mt-16 md:mt-auto">
                <li>
                    <a href="https://github.com/lydiob7" target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tomas-scattini/" target="_blank" rel="noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="mailto:tomasscattini@gmail.com" target="_blank" rel="noreferrer">
                        <EmailIcon fontSize="large" />
                    </a>
                </li>
            </ul>

            <div className={clsx(internalClasses.languagesSwitch, 'absolute flex flex-col justify-between w-20')}>
                <Button
                    onClick={() => dispatch(languageChanged('en'))}
                    variant="text"
                    color="inherit"
                    className="grow-0 self-start"
                >
                    EN
                </Button>
                <Divider style={{ background: '#FFFFFF' }} />
                <Button
                    onClick={() => dispatch(languageChanged('es'))}
                    variant="text"
                    color="inherit"
                    className="grow-0 self-end"
                >
                    ESP
                </Button>
            </div>
        </div>
    );
};

export default Banner;
