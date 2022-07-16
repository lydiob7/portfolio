/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*{.js,.jsx}', './src/pages/**/*{.js,.jsx}'],
    theme: {
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1920px',
            print: { raw: 'print' }
        },
        colors: {
            white: '#FFFFFF'
        },
        fontFamily: {
            primary: 'MonumentExtended-Regular',
            secondary: 'MonumentExtended-Bold'
        }
    },
    variants: ['responsive']
};
