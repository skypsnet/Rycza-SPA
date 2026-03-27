const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],

    theme: {
        container: {
            center: true,
            lg: {
                padding: '20px',
            },
            xl: {
                'max-width': '1100px',
            },
        },
        extend: {
            aspectRatio: {
                '21/9': '21 / 9',
                'second-column': '2 / 3',
            },
            colors: {
                blue: '#1475E0',
                'blue-dark': '#3673D9',
                'blue-light': '#26AEDF',
                black: '#0B0B0B',
                orange: '#E06641',
                green: '#26AD28',
            },
            fontFamily: {
                sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                fifteen: ['1.25rem', '1.25rem'],
                'fifteen-md': ['1.5rem', '1.5rem'],
                twenty: ['1.34rem', '1.6669rem'],
                'twenty-five': ['1.56rem', '1.56rem'],
                'twenty-five-md': ['1.56rem', '1.56rem'],
                thirty: ['1.88rem', '1.88rem'],
                'thirty-md': ['2.5rem', '2.5rem'],
                forty: ['2.4rem', '3rem'],
                'forty-md': ['3rem', '3rem'],
            },
        },
    },
};
