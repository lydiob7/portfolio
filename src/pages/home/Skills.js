import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    }
}));

const Skills = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent);

    return (
        <div id="about" className={clsx(internalClasses.root, classes?.root)} {...props}>
            Skills
        </div>
    );
};

export default Skills;
