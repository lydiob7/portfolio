/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*.js', './src/pages/**/*.js'],
    theme: {
        colors: {
            white: '#FFFFFF'
        },
        fontFamily: {
            primary: 'MonumentExtended',
            secondary: 'MonumentExtended'
        }
    },
    variants: ['responsive']
};
