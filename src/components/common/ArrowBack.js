import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: '1rem 0',
        transform: 'rotate(180deg)',
        cursor: 'pointer',
        '& span': {
            height: '1rem',
            marginLeft: '1rem',
            '& svg line': {
                stroke: theme.palette.primary.main
            }
        }
    }
}));

const ArrowBack = ({ classes, history, ...props }) => {
    const internalClasses = useStyles();

    return (
        <div onClick={() => history.goBack()} className={clsx(internalClasses.root, classes?.root)} {...props}>
            <span>
                <svg width="44" height="21" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.0659" y1="0.966244" x2="28.0896" y2="7.28755" />
                    <line
                        y1="-0.5"
                        x2="9.44939"
                        y2="-0.5"
                        transform="matrix(-0.743294 0.668965 0.668965 0.743294 27.7549 7.65918)"
                    />
                    <line x1="27.4033" y1="7.80762" x2="0.362167" y2="7.80761" />
                </svg>
            </span>
        </div>
    );
};

export default withRouter(ArrowBack);
