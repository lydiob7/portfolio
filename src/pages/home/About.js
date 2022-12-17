import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Button, Container, makeStyles } from '@material-ui/core';
import { GetApp as GetAppIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    bio: {
        fontSize: '1rem',
        lineHeight: '1.4rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
            lineHeight: '2rem'
        }
    },
    downloadButton: {
        padding: '6px 10px',
        minWidth: 'auto',
        marginLeft: '2rem'
    },
    pageTitle: {
        textTransform: 'uppercase',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
            width: '100%',
            margin: '0 auto 2rem auto'
        }
    },
    resumeWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem auto',
        [theme.breakpoints.up('md')]: {
            margin: '3rem auto'
        }
    },
    root: {
        color: theme.palette.primary.main,
        paddingTop: '8rem',
        paddingBottom: '4rem',
        [theme.breakpoints.up('md')]: {
            minHeight: '100vh',
            paddingTop: '30vh',
            paddingBottom: 0
        }
    }
}));

const About = forwardRef(({ classes, ...props }, ref) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.aboutPage);

    return (
        <div ref={ref} className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Container maxWidth="md">
                <h2 className={clsx(internalClasses.pageTitle, 'font-primary')}>{textProvider?.pageTitle}</h2>

                <p className={internalClasses.bio}>
                    {textProvider?.bio?.[0]}{' '}
                    <a href="https://www.cubehub.co/" target="_blank" rel="noreferrer">
                        Cube Hub
                    </a>
                </p>

                <div className={internalClasses.resumeWrapper}>
                    <a href="/resume.pdf" download="Resume Tomas Scattini">
                        {textProvider?.resumeLink}
                        <Button className={internalClasses.downloadButton}>
                            <GetAppIcon />
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    );
});

export default About;
