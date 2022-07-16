import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setInvertedHeader, setNormalHeader } from 'store/uiSlice';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

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

    const skillsRef = useRef(null);

    useLayoutEffect(() => {
        dispatch(setNormalHeader());
    }, [dispatch]);

    useEffect(() => {
        document?.addEventListener('scroll', () => {
            const skillsRect = skillsRef?.current?.getBoundingClientRect();
            if (skillsRect?.top <= 80 && skillsRect?.top - 80 > -skillsRect?.height) dispatch(setInvertedHeader());
            else dispatch(setNormalHeader());
        });
    }, [dispatch]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Banner />
            <Skills ref={skillsRef} />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;
