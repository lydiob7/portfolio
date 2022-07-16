import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    credits: {
        position: 'absolute',
        bottom: '2rem',
        fontSize: '.7rem',
        textAlign: 'center',
        width: '100%',
        left: 0,
        padding: '0 1rem',
        '&>p': {
            margin: '.5rem 0',
            '&>a': {
                textDecoration: 'underline'
            }
        }
    },
    mail: {
        margin: '3rem 0 3.5rem 0',
        fontSize: '1.2rem',
        textDecoration: 'underline',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        }
    },
    message: {
        fontSize: '1.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        color: theme.palette.primary.contrastText
    },
    socialWrapper: {
        '&>a': {
            margin: '0 1rem'
        }
    }
}));

const Contact = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.contact);

    return (
        <div id="contact" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <p className={internalClasses.message}>{textProvider?.message}</p>
            <a className={internalClasses.mail} href="mailto:tomasscattini@gmail.com" target="_blank" rel="noreferrer">
                tomasscattini@gmail.com
            </a>
            <div className={internalClasses.socialWrapper}>
                <a href="https://www.linkedin.com/in/tomas-scattini/" target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://github.com/lydiob7" target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize="large" />
                </a>
            </div>

            <div className={internalClasses.credits}>
                <p>
                    {textProvider?.designBy}{' '}
                    <a href="https://gabrielapolancoferreyra.com/" target="_blank" rel="noreferrer">
                        Gabi Polanco
                    </a>
                </p>
                <p>
                    {textProvider?.secondPictureCredits}{' '}
                    <a href="https://www.linkedin.com/in/javierlomont/" target="_blank" rel="noreferrer">
                        Javier Lopez Montoya
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
