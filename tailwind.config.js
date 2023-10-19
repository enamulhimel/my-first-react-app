/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ce1a7d',

          secondary: '#1a0370',

          accent: '#eac65b',

          neutral: '#222a3a',

          'base-100': '#e8e8e9',

          info: '#5db0ef',

          success: '#26baa9',

          warning: '#eac943',

          error: '#de353e',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
