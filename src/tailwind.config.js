/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*{.js,.jsx}', './src/pages/**/*{.js,.jsx}'],
    theme: {
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
