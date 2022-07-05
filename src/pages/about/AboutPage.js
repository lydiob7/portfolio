import React, { useLayoutEffect } from 'react';
import { setInvertedHeader } from 'store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Button, Container, makeStyles } from '@material-ui/core';

import { GetApp as GetAppIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    bottomWrapper: {
        margin: '2rem 0'
    },
    contentWrapper: {
        display: 'grid',
        gap: '2rem',
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        '& p': {
            fontSize: '.8rem'
        }
    },
    downloadButton: {
        padding: '6px 10px',
        minWidth: 'auto',
        marginLeft: '2rem'
    },
    eventRow: {
        display: 'grid',
        gridTemplateColumns: '2fr 5fr 2fr',
        width: '100%'
    },
    eventsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        flexBasis: '70%',
        alignItems: 'center',
        '& h3': {
            width: '100%',
            textAlign: 'center',
            paddingBottom: '1rem',
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            [theme.breakpoints.up('md')]: {
                fontSize: '1.5rem'
            }
        }
    },
    pageTitle: {
        fontSize: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    resumeWrapper: {
        margin: '0 3rem'
    },
    root: {
        paddingTop: '5vh',
        color: theme.palette.primary.main
    }
}));

const AboutPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    const textProvider = useSelector(({ ui }) => ui.textContent?.aboutPage);

    useLayoutEffect(() => {
        dispatch(setInvertedHeader());
    }, [dispatch]);

    return (
        <Container maxWidth="lg" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <h2 className={clsx(internalClasses.pageTitle, 'font-primary')}>{textProvider?.pageTitle}</h2>
            <div className={internalClasses.contentWrapper}>
                {textProvider?.bio?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <div className={clsx(internalClasses.bottomWrapper, 'flex items-center justify-between')}>
                <div className={internalClasses.resumeWrapper}>
                    <a href="/resume.pdf" download="Resume Tomas Scattini">
                        {textProvider?.resumeLink}
                        <Button className={internalClasses.downloadButton}>
                            <GetAppIcon />
                        </Button>
                    </a>
                </div>
                <div className={internalClasses.eventsWrapper}>
                    <h3>{textProvider?.eventsTitle}</h3>

                    {textProvider?.eventList?.map((event) => (
                        <div key={event?.content} className={internalClasses.eventRow}>
                            <p>{event?.year}</p>
                            <p>{event?.content}</p>
                            <p>{event?.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AboutPage;
