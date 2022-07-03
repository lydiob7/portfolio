import React from 'react';
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

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;
