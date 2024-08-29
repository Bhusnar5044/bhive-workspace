/* eslint-disable global-require */
import tailwindTypography from '@tailwindcss/typography';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '2xs': '0.5rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2.25rem',
      '4xl': '3.625rem',
    },
    // fontFamily: {
    //   sans: [...fontFamily.sans],
    //   inter: ['Inter', 'sans-serif'],
    // },
    colors: {
      white: '#ffffff',
      primary1: '#000000',
      primary2: '#FFBB00',
      lightYellow: '#FFCF4B',
      darkYellow: '#FFC422',
      lightGray: '#F9F9F9',
      darkGray: '#CEC6C6',
      textMain: '#263238',
      textSecondary: '#65624C',
      gray1: '#333333',
      gray2: '#4F4F4F',
      gray3: '#828282',
      gray4: '#B7B6B8',
      gray5: '#E0E0E0',
      dropShad: '#0000000F',
      footerBg: '#222E34',
      headerBorder: '#F2B304'
    },
    extend: {
      backgroundImage: {
        banner: "url('/assets/banner.svg')",
      },
    },
  },
  plugins: [tailwindTypography, require('tailwindcss-font-inter')],
};
