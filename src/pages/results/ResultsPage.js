import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setInvertedHeader } from 'store/uiSlice';
import { filterResultsBySkills, resetState } from 'store/entities/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, makeStyles } from '@material-ui/core';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        textAlign: 'center',
        fontSize: '1.3rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        }
    },
    project: {
        display: 'flex',
        gap: '2rem',
        '& .image': {
            position: 'relative',
            flexShrink: 0,
            width: '200px',
            height: '200px',
            overflow: 'hidden',
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
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                transition: 'all .3s ease'
            }
        },
        '& .video': {
            filter: 'grayscale(100%)',
            transition: 'all .3s ease',
            '&:hover': {
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
            '&:hover::after': {
                opacity: 0
            }
        },
        '&>div': {
            '& .title': {
                fontSize: '1rem',
                marginBottom: '1rem',
                fontFamily: 'MonumentExtended-Bold',
                [theme.breakpoints.up('md')]: {
                    fontSize: '1.2rem'
                }
            },
            '& .content': {
                fontSize: '.8rem'
            },
            '& .arrow': {
                display: 'flex',
                alignItems: 'center',
                fontSize: '.8rem',
                margin: '1rem 0',
                '& span': {
                    height: '1rem',
                    marginLeft: '1rem',
                    '& svg line': {
                        stroke: theme.palette.primary.main
                    }
                }
            }
        }
    },
    projectsWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem',
        margin: '4rem 0',
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    },
    root: {
        color: theme.palette.primary.main,
        padding: '5vh 0'
    }
}));

const ResultsPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();

    const skillsFromParams = query.get('skills');

    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);
    const matchingProjects = useSelector(({ entities }) => entities.projects?.matchingProjects);
    const textProvider = useSelector(({ ui }) => ui.textContent?.resultsPage);
    const skills = useSelector(({ entities }) => entities.skills?.list);

    useLayoutEffect(() => {
        dispatch(setInvertedHeader());
        dispatch(resetState());

        return () => dispatch(resetState());
    }, [dispatch]);

    useEffect(() => {
        if (skillsFromParams) dispatch(filterResultsBySkills(skillsFromParams));
    }, [dispatch, skillsFromParams]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Container maxWidth="lg">
                <h2 className={internalClasses.pageTitle}>{textProvider?.pageTitle}</h2>
                <p className="text-center">
                    {skillsFromParams?.split(',')?.map((skill, index) => {
                        const skillObject = skills?.filter((skill2) => skill2?.id === skill)?.[0];
                        return (
                            <React.Fragment key={skill?.id}>
                                {index !== 0 && ' - '}
                                {skillObject?.title || skillObject?.[currentLanguage]?.title}
                            </React.Fragment>
                        );
                    })}
                </p>
                <div className={internalClasses.projectsWrapper}>
                    {matchingProjects?.map((project) => (
                        <div key={project?.id} className={internalClasses.project}>
                            {project?.mainImage && (
                                <a className="image" href={project?.websiteUrl} target="_blank" rel="noreferrer">
                                    <img src={project.mainImage} alt={project?.[currentLanguage]?.title} />
                                </a>
                            )}
                            {project?.mainVideo && (
                                <iframe
                                    className="video"
                                    width="200"
                                    height="200"
                                    src={project.mainVideo}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                            <div>
                                <a href={project?.websiteUrl} target="_blank" rel="noreferrer">
                                    <h3 className="title">{project?.[currentLanguage]?.title}</h3>
                                </a>
                                <ul className="content">
                                    {project?.[currentLanguage]?.about?.map((paragraph) => (
                                        <li key={paragraph}>{paragraph}</li>
                                    ))}
                                </ul>
                                {project?.githubRepo && (
                                    <a href={project.githubRepo} target="_blank" rel="noreferrer" className="arrow">
                                        {textProvider?.repoLink}{' '}
                                        <span>
                                            <svg
                                                width="29"
                                                height="14"
                                                viewBox="0 0 29 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1="21.0659" y1="0.966244" x2="28.0896" y2="7.28755" />
                                                <line
                                                    y1="-0.5"
                                                    x2="9.44939"
                                                    y2="-0.5"
                                                    transform="matrix(-0.743294 0.668965 0.668965 0.743294 27.7549 7.65918)"
                                                />
                                                <line x1="27.4033" y1="7.80762" x2="0.362167" y2="7.80761" />
                                            </svg>
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ResultsPage;
