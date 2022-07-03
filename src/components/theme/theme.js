import { createTheme } from '@material-ui/core/styles';

const colorsArray = ['#2A6871', '#F3725C', '#FF9BBF', '#32145D', '#05B18B', '#0E2F56', '#000000'];

const getRandomColor = () => {
    const randomIndex = new Date().getDay();
    return colorsArray[randomIndex];
};

export const theme = (color) =>
    createTheme({
        palette: {
            type: color,
            primary: {
                main: getRandomColor(),
                contrastText: '#FFFFFF'
            }
        },
        typography: {
            fontFamily: "'MonumentExtended', sans-serif",
            h1: {
                fontFamily: "'MonumentExtended', sans-serif"
            },
            h2: {
                fontFamily: "'MonumentExtended', sans-serif"
            },
            h3: {
                fontFamily: "'MonumentExtended', sans-serif"
            },
            h4: {
                fontFamily: "'MonumentExtended', sans-serif"
            },
            h5: {
                fontFamily: "'MonumentExtended', sans-serif"
            },
            h6: {
                fontFamily: "'MonumentExtended', sans-serif"
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
                    'h1, h2, h3, h4, h5, h6': {
                        fontWeight: 800
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
