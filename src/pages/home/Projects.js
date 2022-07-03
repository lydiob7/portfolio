import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
                    fontSize: '1.3rem'
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
                    <h2>{textProvider?.pageTitle}</h2>
                    <p>{textProvider?.subtitle}</p>
                </div>
            </div>

            <div>
                {projects?.map((project) => (
                    <div key={project?.id}>
                        <p>
                            {project?.number}/ {project?.[currentLanguage]?.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
