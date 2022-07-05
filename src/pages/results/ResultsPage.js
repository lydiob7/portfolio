import React, { useLayoutEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { setInvertedHeader } from 'store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const ResultsPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();
    // const query = useQuery();

    const textProvider = useSelector(({ ui }) => ui.textContent?.resultsPage);
    // const skills = useSelector(({ entities }) => entities.skills?.list);

    useLayoutEffect(() => {
        dispatch(setInvertedHeader());
    }, [dispatch]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            {textProvider?.pageTitle}
        </div>
    );
};

export default ResultsPage;
