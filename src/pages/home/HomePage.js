import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setInvertedHeader, setNormalHeader } from 'store/uiSlice';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import About from './About';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'
    }
}));

const HomePage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    const [isHeaderInverted, setIsHeaderInverted] = useState(false);

    useLayoutEffect(() => {
        dispatch(setNormalHeader());
    }, [dispatch]);

    useEffect(() => {
        document?.addEventListener('scroll', () => {
            const aboutRect = aboutRef?.current?.getBoundingClientRect();
            const skillsRect = skillsRef?.current?.getBoundingClientRect();
            if (!location?.pathname === '/') return;
            if (aboutRect?.top <= 80 && skillsRect?.top - 80 > -skillsRect?.height) return setIsHeaderInverted(true);
            else return setIsHeaderInverted(false);
        });

        return () => document.removeEventListener('scroll', () => {});
    }, [dispatch, location?.pathname]);

    useEffect(() => {
        if (isHeaderInverted) dispatch(setInvertedHeader());
        else dispatch(setNormalHeader());
    }, [dispatch, isHeaderInverted]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Banner />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;
