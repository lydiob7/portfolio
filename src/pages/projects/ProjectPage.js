import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { setInvertedHeader } from 'store/uiSlice';
import { resetState, setProject } from 'store/entities/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, IconButton, makeStyles } from '@material-ui/core';

import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@material-ui/icons';
import ArrowBack from 'components/common/ArrowBack';

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
        right: '24px',
        [theme.breakpoints.up('lg')]: {
            right: 0
        }
    },
    previous: {
        left: '24px',
        [theme.breakpoints.up('lg')]: {
            left: 0
        }
    },
    root: {
        position: 'relative',
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        paddingTop: '9vh',
        paddingBottom: '20vh',
        minHeight: 'calc(100vh - 80px)',
        [theme.breakpoints.up('md')]: {
            paddingBottom: '5vh',
            flexDirection: 'row'
        },
        '& .left-side': {
            flexBasis: '40%',
            '& h2': {
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontSize: '2rem',
                [theme.breakpoints.up('md')]: {
                    marginBottom: '8rem'
                }
            }
        },
        '& .right-side': {
            display: 'flex',
            gap: '2rem',
            overflowX: 'scroll',
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            [theme.breakpoints.up('md')]: {
                display: 'grid',
                flexBasis: '60%',
                width: 'auto',
                gridTemplateColumns: 'repeat(2, 1fr)'
            },
            '&::-webkit-scrollbar': {
                width: 0,
                height: 0
            },
            '& .section': {
                width: 'calc(100vw - 24px)',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                padding: '0 1.5rem',
                [theme.breakpoints.up('md')]: {
                    padding: '0',
                    width: 'auto'
                },
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
                    marginBottom: '1rem',
                    [theme.breakpoints.up('md')]: {
                        marginBottom: '0',
                        fontSize: '1.2rem'
                    }
                },
                '& .content': {
                    '& li': {
                        margin: '.5rem 0',
                        listStyle: 'disc',
                        fontSize: '.8rem',
                        [theme.breakpoints.up('md')]: {
                            fontSize: '.9rem'
                        }
                    }
                },
                '& .no-repo': {
                    color: '#AAAAAA'
                }
            }
        },
        '& .dots': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: '2rem',
            height: '100%',
            [theme.breakpoints.up('md')]: {
                display: 'none'
            },
            '&>div': {
                display: 'flex',
                justifyContent: 'center',
                '&>div': {
                    width: '100%',
                    minHeight: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 1rem',
                    '&>span': {
                        flexShrink: 0,
                        width: '10px',
                        height: '10px',
                        borderRadius: '100%',
                        border: `2px solid ${theme.palette.primary.main}`,
                        cursor: 'pointer',
                        '&.fill': {
                            backgroundColor: theme.palette.primary.main
                        }
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

    const [visibleSkillGroup, setVisibleSkillGroup] = useState(0);

    const scrollAreaRef = useRef(null);
    const firstSkillGroup = useRef(null);
    const secondSkillGroup = useRef(null);
    const thirdSkillGroup = useRef(null);
    const fourthSkillGroup = useRef(null);

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
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        handleGroupsScroll(0);
        if (id) dispatch(setProject(id));
    }, [dispatch, id]);

    useEffect(() => {
        const scrollAreaVariable = scrollAreaRef?.current;
        scrollAreaVariable?.addEventListener('scroll', (ev) => {
            const firstGroupLeft = firstSkillGroup?.current.getBoundingClientRect()?.left;
            const secondGroupLeft = secondSkillGroup?.current.getBoundingClientRect()?.left;
            const thirdGroupLeft = thirdSkillGroup?.current.getBoundingClientRect()?.left;
            const fourthGroupLeft = fourthSkillGroup?.current.getBoundingClientRect()?.left;

            if (firstGroupLeft >= 0) setVisibleSkillGroup(0);
            else if (secondGroupLeft >= 0) setVisibleSkillGroup(1);
            else if (thirdGroupLeft >= 0) setVisibleSkillGroup(2);
            else if (fourthGroupLeft >= 0) setVisibleSkillGroup(3);
        });

        return () => scrollAreaVariable?.removeEventListener('scroll', () => {});
    }, []);

    const handleGroupsScroll = (index) => {
        if (scrollAreaRef?.current) {
            const scrollAreaWidth = scrollAreaRef.current.getBoundingClientRect().width;
            const groupLeftOptions = [6, scrollAreaWidth * 1 + 6, scrollAreaWidth * 2 + 6, scrollAreaWidth * 3 + 6];

            scrollAreaRef.current.scroll(groupLeftOptions[index], 0);
        }
    };

    return (
        <Container maxWidth="lg" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <div className="absolute z-20 top-4 left-2 lg:-left-6">
                <ArrowBack />
            </div>
            <div className="left-side">
                <h2>{currentProject?.data?.title}</h2>
                <a href={currentProject?.websiteUrl} target="_blank" rel="noreferrer" className={internalClasses.image}>
                    <img src={currentProject?.mainImage} alt={currentProject?.data?.title} />
                </a>
            </div>
            <div ref={scrollAreaRef} className="right-side">
                <div ref={firstSkillGroup} id="1" className="section">
                    <p className="number">01</p>
                    <h3 className="title">{textProvider?.aboutTitle}</h3>
                    <ul className="content">
                        {currentProject?.data?.about?.map((paragraph) => (
                            <li key={paragraph}>{paragraph}</li>
                        ))}
                    </ul>
                </div>
                <div ref={secondSkillGroup} id="2" className="section">
                    <p className="number">02</p>
                    <h3 className="title">{textProvider?.technologiesTitle}</h3>
                    <ul className="content">
                        {currentProject?.data?.technologies?.map((paragraph) => (
                            <li key={paragraph}>{paragraph}</li>
                        ))}
                    </ul>
                </div>
                <div ref={thirdSkillGroup} id="3" className="section">
                    <p className="number">03</p>
                    <h3 className="title">{textProvider?.codeTitle}</h3>
                    {currentProject?.githubRepo ? (
                        <a href={currentProject.githubRepo} target="_blank" rel="noreferrer">
                            {textProvider?.repoLink}
                        </a>
                    ) : (
                        <span className="no-repo">{textProvider.notApplicable}</span>
                    )}
                </div>
                <div ref={fourthSkillGroup} id="4" className="section">
                    <p className="number">04</p>
                    <h3 className="title">{textProvider?.liveTitle}</h3>
                    <a href={currentProject?.websiteUrl} target="_blank" rel="noreferrer">
                        {textProvider?.websiteLink}
                    </a>
                </div>
            </div>
            <div className="dots">
                <div>
                    <div onClick={() => handleGroupsScroll(0)}>
                        <span className={visibleSkillGroup === 0 ? 'fill' : ''}></span>
                    </div>
                    <div onClick={() => handleGroupsScroll(1)}>
                        <span className={visibleSkillGroup === 1 ? 'fill' : ''}></span>
                    </div>
                    <div onClick={() => handleGroupsScroll(2)}>
                        <span className={visibleSkillGroup === 2 ? 'fill' : ''}></span>
                    </div>
                    <div onClick={() => handleGroupsScroll(3)}>
                        <span className={visibleSkillGroup === 3 ? 'fill' : ''}></span>
                    </div>
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
                <HashLink
                    style={{ marginBottom: '1rem' }}
                    to="/#work"
                    className={clsx(internalClasses.arrow, internalClasses.previous)}
                >
                    {textProvider?.seeAll}
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
                <HashLink
                    style={{ marginBottom: '1rem' }}
                    to="/#work"
                    className={clsx(internalClasses.arrow, internalClasses.next)}
                >
                    {textProvider?.seeAll}
                </HashLink>
            )}
        </Container>
    );
};

export default ProjectPage;
