module.exports = {
  content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cityguide-purple': '#7e4cff',
          'cityguide-mid-purple': '#7641e2',
          'cityguide-dark-purple': '#6633c2',
      },
    },
  },
  plugins: [],
};
