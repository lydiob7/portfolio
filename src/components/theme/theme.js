import { createTheme } from '@material-ui/core/styles';

const colorsArray = [
    // Sunday
    '#2A6871',
    // Monday
    '#F3725C',
    // Tuesday
    '#FF9BBF',
    // Wednesday
    '#32145D',
    // Thursday
    '#05B18B',
    // Friday
    '#0E2F56',
    // Saturday
    '#000000'
];

const getDayColor = () => {
    const dayIndex = new Date().getDay();
    return colorsArray[dayIndex];
};

export const theme = (color) =>
    createTheme({
        palette: {
            type: color,
            primary: {
                main: getDayColor(),
                contrastText: '#FFFFFF'
            }
        },
        typography: {
            fontFamily: "'MonumentExtended-Regular', sans-serif",
            h1: {
                fontFamily: "'MonumentExtended-Bold', sans-serif"
            },
            h2: {
                fontFamily: "'MonumentExtended-Bold', sans-serif"
            },
            h3: {
                fontFamily: "'MonumentExtended-Bold', sans-serif"
            },
            h4: {
                fontFamily: "'MonumentExtended-Bold', sans-serif"
            },
            h5: {
                fontFamily: "'MonumentExtended-Bold', sans-serif"
            },
            h6: {
                fontFamily: "'MonumentExtended-Bold', sans-serif"
            }
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*': {
                        boxSizing: 'border-box',
                        '&::-webkit-scrollbar': {
                            width: '0.4em'
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0)'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            outline: 'none'
                        },
                        scrollbarWidth: 'thin'
                    },
                    body: {
                        fontFamily: "'MonumentExtended-Regular', sans-serif",
                        fontWeight: 400,
                        minHeight: '100vh',
                        margin: 0,
                        padding: 0,
                        overflowX: 'hidden'
                    },
                    '#root': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '100vh'
                    },
                    ul: {
                        padding: 0,
                        margin: 0,
                        listStyleType: 'none'
                    },
                    a: {
                        backgroundColor: 'transparent',
                        textDecoration: 'none'
                    }
                }
            },
            MuiButton: {
                root: {
                    textTransform: 'none'
                }
            },
            MuiSvgIcon: {
                root: {
                    fontSize: '1.5rem'
                }
            }
        },
        props: {
            MuiButton: {
                disableRipple: true,
                disableFocusRipple: true,
                variant: 'contained',
                color: 'primary'
            }
        }
    });
