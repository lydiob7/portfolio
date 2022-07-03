import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageChanged } from 'store/uiSlice';
import clsx from 'clsx';

import banner1 from 'assets/images/banner1.JPG';
import banner2 from 'assets/images/banner2.jpg';

import { Button, Container, Divider, makeStyles } from '@material-ui/core';

import { Email as EmailIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    description: {
        fontSize: '1.5rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        lineHeight: '1.2',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
            lineHeight: '1'
        }
    },
    root: {
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        minHeight: 'calc(100vh - 80px)',
        color: theme.palette.primary.contrastText,
        paddingTop: '10vh'
    }
}));

const Banner = ({ classes, ...props }) => {
    const dispatch = useDispatch();
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.banner);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Container maxWidth="md">
                <p className={internalClasses.description}>
                    {textProvider?.descriptionOne}
                    {textProvider?.descriptionTwo}
                </p>
                <div className="relative flex w-full justify-center">
                    <div className="h-[40vh] overflow-hidden translate-y-[-2rem]">
                        <img className="h-full" src={banner1} alt="Tomi on a cafe in Catania" />
                    </div>
                    <div className="absolute z-20 right-32 h-[40vh] overflow-hidden ">
                        <img className="h-full" src={banner2} alt="Tomi playing bass in NYC" />
                    </div>
                </div>
            </Container>
            <ul className="absolute flex flex-col justify-between gap-5 left-32 bottom-40">
                <li>
                    <a href="https://github.com/lydiob7" target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tomas-scattini/" target="_blank" rel="noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="mailto:tomasscattini@gmail.com" target="_blank" rel="noreferrer">
                        <EmailIcon fontSize="large" />
                    </a>
                </li>
            </ul>

            <div className="absolute flex flex-col justify-between right-32 bottom-72 w-20">
                <Button
                    onClick={() => dispatch(languageChanged('en'))}
                    variant="text"
                    color="inherit"
                    className="grow-0 self-start"
                >
                    EN
                </Button>
                <Divider style={{ background: '#FFFFFF' }} />
                <Button
                    onClick={() => dispatch(languageChanged('es'))}
                    variant="text"
                    color="inherit"
                    className="grow-0 self-end"
                >
                    ESP
                </Button>
            </div>
        </div>
    );
};

export default Banner;
