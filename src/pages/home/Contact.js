import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
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
        </div>
    );
};

export default Contact;
