import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';
// import { parsePath } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    appName: {
        letterSpacing: '0.6rem'
    },
    letsTalkLink: {
        position: 'relative',
        color: theme.palette.primary.main,
        padding: '.5rem 1rem',
        borderRadius: '50%',
        textTransform: 'uppercase',
        fontFamily: theme.typography.h1.fontFamily,
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '1px solid #ffffff',
            borderRadius: '50%',
            transform: 'rotate(-8deg)'
        }
    },
    letsTalkLinkWrapper: {
        justifyContent: 'flex-end'
    },
    root: {
        position: 'fixed',
        zIndex: '999',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        minHeight: '80px',
        minWidth: '100vw',
        padding: '0 5vw',
        borderBottom: `1px solid ${theme.palette.primary.contrastText}`
    }
}));

export default function GeneralHeader({ fixed }) {
    const internalClasses = useStyles();
    const menuItems = useSelector(({ ui }) => ui.sidebar.menuItems);
    const appInformation = useSelector(({ ui }) => ui.appInformation);
    const textProvider = useSelector(({ ui }) => ui.textContent?.navigationMenu);

    return (
        <header>
            <Grid container className={clsx(internalClasses.root)}>
                <Grid item xs={6} md={4}>
                    <HashLink to="#top">
                        <h1 className={clsx(internalClasses.appName, 'capitalize text-xl')}>
                            {appInformation?.appTitle}
                        </h1>
                    </HashLink>
                </Grid>
                <Grid container item xs={6} md={8}>
                    <Grid component="nav" item xs={8} className="flex items-center">
                        <ul className="flex items-center justify-between w-full">
                            {menuItems.map((item) => (
                                <li key={item?.path}>
                                    {item?.path?.includes('#') ? (
                                        <HashLink to={item?.path}>{item?.title}</HashLink>
                                    ) : (
                                        <Link to={item?.path}>{item?.title}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid className={clsx(internalClasses.letsTalkLinkWrapper, 'flex items-center')} item xs={4}>
                        <a href="mailto:tomasscattini@gmail.com" target="_blank" rel="noreferrer">
                            <div
                                className={clsx(
                                    internalClasses.letsTalkLink,
                                    'flex items-center justify-center w-auto bg-white'
                                )}
                            >
                                {textProvider?.letsTalk}
                            </div>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </header>
    );
}
