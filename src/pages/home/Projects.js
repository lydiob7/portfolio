import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectsWrapper: {
        textTransform: 'uppercase',
        paddingTop: '5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        },
        '&>div': {
            paddingBottom: '4rem',
            borderBottom: '1px solid #FFFFFF',
            '& p': {
                borderBottom: '1px solid #FFFFFF',
                '&>span': {
                    fontSize: '1.2rem',
                    [theme.breakpoints.up('md')]: {
                        fontSize: '3rem'
                    }
                }
            }
        }
    },
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: '100vh',
        paddingTop: '80px'
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        '&>div': {
            marginRight: '10vw',
            '& h2': {
                textAlign: 'center',
                fontWeight: 400,
                [theme.breakpoints.up('md')]: {
                    fontSize: '3rem'
                }
            },
            '& p': {
                textAlign: 'center',
                [theme.breakpoints.up('md')]: {
                    fontSize: '1rem'
                }
            }
        }
    }
}));

const Projects = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);
    const projects = useSelector(({ entities }) => entities.projects?.list);
    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.projects);

    return (
        <div id="work" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <div className={internalClasses.titleWrapper}>
                <div>
                    <h2 className="font-primary">{textProvider?.pageTitle}</h2>
                    <p>{textProvider?.subtitle}</p>
                </div>
            </div>

            <Container maxWidth="md">
                <div className={internalClasses.projectsWrapper}>
                    {projects?.map((project) => (
                        <div key={project?.id}>
                            <Link to={`/projects/${project?.id}`}>
                                <p>
                                    <span>{project?.number}/</span> {project?.[currentLanguage]?.title}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Projects;
