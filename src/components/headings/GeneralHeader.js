import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import { Grid, Hidden, makeStyles } from '@material-ui/core';
// import { parsePath } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    appName: {
        letterSpacing: '0.6rem'
    },
    burguerMenuWrapper: (props) => ({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '&>input': {
            display: 'none'
        },
        '&>label': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: '20px',
            width: '30px',
            cursor: 'pointer',
            '&>span': {
                height: '3px',
                width: '100%',
                backgroundColor: props.isHeaderInverted
                    ? theme.palette.primary.main
                    : theme.palette.primary.contrastText,
                borderRadius: '2px',
                transition: 'all .3s ease'
            },
            '&>span:first-child': {
                width: '50%'
            }
        },
        '&>input:checked + label': {
            '&>span:first-child': {
                opacity: 0,
                position: 'absolute'
            },
            '&>span:nth-child(2)': {
                transform: 'translateY(8px) rotate(45deg)'
            },
            '&>span:nth-child(3)': {
                transform: 'translateY(-8px) rotate(-45deg)'
            }
        }
    }),
    letsTalkLink: (props) => ({
        position: 'relative',
        color: props.isHeaderInverted ? theme.palette.primary.contrastText : theme.palette.primary.main,
        backgroundColor: props.isHeaderInverted ? theme.palette.primary.main : theme.palette.primary.contrastText,
        padding: '.5rem 1rem',
        borderRadius: '50%',
        textTransform: 'uppercase',
        fontFamily: theme.typography.h1.fontFamily,
        '&::after': {
            content: '""',
            position: 'absolute',
            zIndex: '9991',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: `1px solid ${theme.palette.primary.contrastText}`,
            borderRadius: '50%',
            transform: 'rotate(-8deg)'
        }
    }),
    letsTalkLinkWrapper: {
        justifyContent: 'flex-end'
    },
    headerWrapper: (props) => ({
        display: 'flex',
        alignItems: 'flex-end',
        position: 'fixed',
        zIndex: '999',
        height: '100vh',
        backgroundColor: props.isHeaderInverted ? theme.palette.primary.contrastText : theme.palette.primary.main,
        color: props.isHeaderInverted ? theme.palette.primary.main : theme.palette.primary.contrastText,
        transition: 'transform .5s ease-out',
        transform: 'translateY(calc(-100vh + 80px))',
        width: '100vw',
        borderBottom: props.isHeaderInverted
            ? `1px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.primary.contrastText}`
    }),
    mobileNavigation: {
        position: 'absolute',
        zIndex: -1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100% - 80px)',
        '&>ul': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize: '3rem',
            textTransform: 'uppercase',
            height: '50%',
            '&>li': {
                opacity: 0,
                transition: 'opacity .1s ease-out 0s'
            }
        }
    },
    openMenuNavigation: {
        '&>ul': {
            '&>li': {
                opacity: 1,
                transition: 'opacity .3s ease-out',
                '&:first-child': {
                    transitionDelay: '.3s'
                },
                '&:nth-child(2)': {
                    transitionDelay: '.5s'
                },
                '&:nth-child(3)': {
                    transitionDelay: '.7s'
                }
            }
        }
    },
    openMenu: {
        transform: 'translateY(0)!important',
        '&>div': {
            transform: 'translateY(calc(-100vh + 80px))'
        }
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        width: '100%',
        padding: '0 5vw',
        transition: 'transform .5s ease-out'
    }
}));

export default function GeneralHeader({ fixed }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isHeaderInverted = useSelector(({ ui }) => ui.headerSettings.isInverted);
    const internalClasses = useStyles({ isHeaderInverted });
    const menuItems = useSelector(({ ui }) => ui.sidebar.menuItems);
    const appInformation = useSelector(({ ui }) => ui.appInformation);
    const textProvider = useSelector(({ ui }) => ui.textContent?.navigationMenu);

    return (
        <header className={clsx(internalClasses.headerWrapper, isMenuOpen && internalClasses?.openMenu)}>
            <Grid container className={clsx(internalClasses.root)}>
                <Grid item xs={9} md={4}>
                    <HashLink onClick={() => setIsMenuOpen(false)} to="/#top">
                        <h1 className={clsx(internalClasses.appName, 'capitalize text-xl')}>
                            {appInformation?.appTitle}
                        </h1>
                    </HashLink>
                </Grid>
                <Hidden mdUp>
                    <Grid item xs={3} className={internalClasses.burguerMenuWrapper}>
                        <input
                            checked={isMenuOpen}
                            onChange={(ev) => setIsMenuOpen(ev?.target?.checked)}
                            id="menu"
                            type="checkbox"
                        />
                        <label htmlFor="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid container item md={8}>
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
                                        'flex items-center justify-center w-auto'
                                    )}
                                >
                                    {textProvider?.letsTalk}
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>

            <nav className={clsx(internalClasses.mobileNavigation, isMenuOpen && internalClasses?.openMenuNavigation)}>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item?.path}>
                            {item?.path?.includes('#') ? (
                                <HashLink onClick={() => setIsMenuOpen(false)} to={item?.path}>
                                    {item?.title}
                                </HashLink>
                            ) : (
                                <Link onClick={() => setIsMenuOpen(false)} to={item?.path}>
                                    {item?.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
