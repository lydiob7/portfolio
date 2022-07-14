import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, Checkbox, FormControlLabel, makeStyles, withStyles, Button } from '@material-ui/core';

import { chunkanizeArray, getRandomId } from 'utils/helpers';

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
        fontSize: '1.8rem',
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
        paddingTop: '4rem',
        paddingBottom: '4rem'
    },
    skillsGrid: (props) => ({
        display: 'flex',
        marginTop: '5rem',
        gap: '.2rem 2rem',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        scrollBehavior: 'smooth',
        scrollSnapType: 'x mandatory',
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: `repeat(${props.skillsGroups}, 1fr)`,
            gap: '.2rem 1rem'
        },
        '&::-webkit-scrollbar': {
            width: 0,
            height: 0
        },
        '&>div': {
            display: 'flex',
            flexDirection: 'column',
            width: 'calc(100vw - 24px)',
            height: 'calc(42px * 6 + 10px + 2rem)',
            flexShrink: 0,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            padding: '0 10vw',
            [theme.breakpoints.up('md')]: {
                width: 'auto',
                padding: '0'
            },
            '& .dots': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: '2rem',
                height: '100%',
                [theme.breakpoints.up('md')]: {
                    display: 'none'
                },
                '&>div': {
                    display: 'flex',
                    justifyContent: 'center',
                    '&>span': {
                        width: '10px',
                        height: '10px',
                        borderRadius: '100%',
                        border: `2px solid ${theme.palette.primary.main}`,
                        margin: '0 1rem',
                        '&.fill': {
                            backgroundColor: theme.palette.primary.main
                        }
                    }
                }
            }
        }
    }),
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
    const [checkedSkills, setCheckedSkills] = useState({});
    const [chunkanizedSkills, setChunkanizedSkills] = useState([]);

    const internalClasses = useStyles({ skillsGroups: chunkanizedSkills?.length });

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.skills);
    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);
    const skills = useSelector(({ entities }) => entities.skills?.list);

    useEffect(() => {
        if (skills) setChunkanizedSkills(chunkanizeArray(skills));
    }, []);

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
                {chunkanizedSkills?.map((chunk, index) => (
                    <div key={getRandomId()}>
                        {chunk?.map((skill) => (
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
                        <div className="dots">
                            <div>
                                {chunkanizedSkills?.map((chunk, index2) => (
                                    <span key={getRandomId()} className={index === index2 ? 'fill' : ''}></span>
                                ))}
                            </div>
                        </div>
                    </div>
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
