module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      skew: {
        neg3: '-3deg',
      },
      backgroundImage: {
        'register-img':
          "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/10620496/pexels-photo-10620496.jpeg?cs=srgb&dl=pexels-cottonbro-10620496.jpg&fm=jpg')",
        'login-img':
          "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/9463581/pexels-photo-9463581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
    },
  },
  plugins: [],
};
