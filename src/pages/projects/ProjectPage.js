import React, { useEffect, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { setInvertedHeader } from 'store/uiSlice';
import { resetState, setProject } from 'store/entities/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, IconButton, makeStyles } from '@material-ui/core';

import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    arrow: {
        position: 'absolute',
        bottom: '5vh',
        '& .MuiIconButton-root': {
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main
        }
    },
    image: {
        display: 'block',
        cursor: 'pointer',
        position: 'relative',
        '&:hover::after': {
            opacity: 0
        },
        '&:hover img': {
            filter: 'none'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.primary.main,
            opacity: 0.15,
            transition: 'all .3s ease'
        },
        '& img': {
            filter: 'grayscale(100%)',
            transition: 'all .3s ease'
        }
    },
    next: {
        right: 0
    },
    previous: {
        left: 0
    },
    root: {
        position: 'relative',
        color: theme.palette.primary.main,
        display: 'flex',
        gap: '3rem',
        padding: '5vh 0',
        minHeight: 'calc(100vh - 80px)',
        '& .left-side': {
            flexBasis: '40%',
            '& h2': {
                textTransform: 'uppercase',
                marginBottom: '8rem',
                [theme.breakpoints.up('md')]: {
                    fontSize: '2rem'
                }
            }
        },
        '& .right-side': {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            flexBasis: '60%',
            '& .section': {
                '& .number': {
                    fontFamily: theme.typography.h1.fontFamily,
                    fontSize: '2rem',
                    color: theme.palette.primary.contrastText,
                    textShadow: `-1px 1px 0 ${theme.palette.primary.main}, 1px 1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px -1px 0 ${theme.palette.primary.main}`,
                    [theme.breakpoints.up('md')]: {
                        fontSize: '4rem'
                    }
                },
                '& .title': {
                    fontFamily: theme.typography.h1.fontFamily,
                    [theme.breakpoints.up('md')]: {
                        fontSize: '1.2rem'
                    }
                },
                '& .content': {
                    '& li': {
                        margin: '.5rem 0',
                        listStyle: 'disc'
                    }
                }
            }
        }
    }
}));

const ProjectPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();

    const currentProject = useSelector(({ entities }) => entities?.projects?.currentProject);
    const textProvider = useSelector(({ ui }) => ui.textContent?.projectPage);

    useLayoutEffect(() => {
        dispatch(setInvertedHeader());
    }, [dispatch]);

    useEffect(() => {
        dispatch(resetState());

        return () => dispatch(resetState());
    }, [dispatch]);

    useEffect(() => {
        if (id) dispatch(setProject(id));
    }, [dispatch, id]);

    return (
        <Container maxWidth="lg" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <div className="left-side">
                <h2>{currentProject?.data?.title}</h2>
                <a href={currentProject?.websiteUrl} target="_blank" rel="noreferrer" className={internalClasses.image}>
                    <img src={currentProject?.mainImage} alt={currentProject?.data?.title} />
                </a>
            </div>
            <div className="right-side">
                <div className="section">
                    <p className="number">01</p>
                    <h3 className="title">{textProvider?.aboutTitle}</h3>
                    <ul className="content">
                        {currentProject?.data?.about?.map((paragraph) => (
                            <li key={paragraph}>{paragraph}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <p className="number">02</p>
                    <h3 className="title">{textProvider?.technologiesTitle}</h3>
                    <ul className="content">
                        {currentProject?.data?.technologies?.map((paragraph) => (
                            <li key={paragraph}>{paragraph}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <p className="number">03</p>
                    <h3 className="title">{textProvider?.codeTitle}</h3>
                    <a href={currentProject?.githubRepo} target="_blank" rel="noreferrer">
                        {textProvider?.repoLink}
                    </a>
                </div>
                <div className="section">
                    <p className="number">04</p>
                    <h3 className="title">{textProvider?.liveTitle}</h3>
                    <a href={currentProject?.websiteUrl} target="_blank" rel="noreferrer">
                        {textProvider?.websiteLink}
                    </a>
                </div>
            </div>

            {currentProject?.previous ? (
                <Link
                    to={`/projects/${currentProject?.previous}`}
                    className={clsx(internalClasses.arrow, internalClasses.previous)}
                >
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
            ) : (
                <HashLink to="/#work" className={clsx(internalClasses.arrow, internalClasses.previous)}>
                    See All
                </HashLink>
            )}
            {currentProject?.next ? (
                <Link
                    to={`/projects/${currentProject?.next}`}
                    className={clsx(internalClasses.arrow, internalClasses.next)}
                >
                    <IconButton>
                        <ArrowForwardIcon />
                    </IconButton>
                </Link>
            ) : (
                <HashLink to="/#work" className={clsx(internalClasses.arrow, internalClasses.next)}>
                    See All
                </HashLink>
            )}
        </Container>
    );
};

export default ProjectPage;
