import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, Checkbox, FormControlLabel, makeStyles, withStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'uppercase',
        margin: '0 1rem'
    },
    disabledButton: {
        opacity: 0.3,
        cursor: 'default'
    },
    pageTitle: {
        textTransform: 'uppercase',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
            width: '65%',
            margin: '0 auto',
            '&.wider': {
                width: '75%'
            }
        }
    },
    root: {
        minHeight: '100vh',
        color: theme.palette.primary.main,
        padding: '4rem 0'
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '.2rem 8rem',
        marginTop: '5rem'
    },
    underlineLink: {
        borderBottom: `2px solid ${theme.palette.primary.main}`
    }
}));

const CustomCheckbox = withStyles((theme) => ({
    root: {
        color: theme.palette.primary.main,
        '&$checked': {
            color: theme.palette.primary.main
        }
    },
    checked: {}
}))((props) => <Checkbox color="default" {...props} />);

const Skills = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const [checkedSkills, setCheckedSkills] = useState({});

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.skills);
    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);
    const skills = useSelector(({ entities }) => entities.skills?.list);

    const handleCheckSkill = (event) => {
        if (!event.target.checked) {
            const newState = { ...checkedSkills };
            delete newState[event.target.name];
            return setCheckedSkills(newState);
        }
        setCheckedSkills({ ...checkedSkills, [event.target.name]: event.target.checked });
    };

    return (
        <Container maxWidth="md" id="about" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <h2 className={clsx(internalClasses.pageTitle, 'font-primary', currentLanguage === 'es' && 'wider')}>
                {textProvider?.pageTitle}
            </h2>

            <div className={internalClasses.skillsGrid}>
                {skills?.map((skill) => (
                    <FormControlLabel
                        key={skill?.id}
                        control={
                            <CustomCheckbox
                                onChange={handleCheckSkill}
                                checked={checkedSkills?.[skill?.id] || false}
                                name={skill?.id}
                            />
                        }
                        label={skill?.title || skill?.[currentLanguage]?.title}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center mt-16">
                {Object.keys(checkedSkills)?.length > 0 ? (
                    <Link to={`/results?skills=${Object.keys(checkedSkills)?.join(',')}`}>
                        <Button className={clsx(internalClasses.button, internalClasses?.underlineLink)} variant="text">
                            {textProvider?.viewResults}
                        </Button>
                    </Link>
                ) : (
                    <Button className={clsx(internalClasses.button, internalClasses.disabledButton)} variant="text">
                        {textProvider?.viewResults}
                    </Button>
                )}
                <Button
                    onClick={() => setCheckedSkills({})}
                    className={clsx(
                        internalClasses.button,
                        Object.keys(checkedSkills)?.length === 0 && internalClasses.disabledButton
                    )}
                    variant="text"
                >
                    {textProvider?.resetAll}
                </Button>
            </div>
        </Container>
    );
};

export default Skills;
