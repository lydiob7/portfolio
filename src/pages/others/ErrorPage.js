import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import { Button } from 'custom-components';

import { parsePath } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '20vh',
        minHeight: '70vh',
        '& img': {
            width: '100%'
        }
    },
    title: {
        fontSize: '1.5rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem'
        }
    },
    content: {
        fontSize: '0.88rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
        }
    },
    statusCode: {
        fontSize: '8rem',
        color: theme.palette.primary.main
    }
}));

function ErrorPage() {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent.errorPage);

    return (
        <Container component="main" className={internalClasses.root}>
            <Grid container justifyContent="center">
                <Grid container spacing={4} justifyContent="center" item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <Typography className={internalClasses.statusCode}>404</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={clsx(internalClasses.title, 'fs-800')} variant="h2" color="textPrimary">
                            {textProvider?.pageTitle}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={internalClasses.content} variant="body1">
                            {textProvider?.message}
                            {/* You can check out our{' '}
                                    <Link to="/faq" className="color-text">
                                        Help Center
                                    </Link> */}
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" item xs={12}>
                        <Link to={parsePath()}>
                            <Button>{textProvider?.homeButton}</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ErrorPage;
