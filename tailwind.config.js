/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors:{
      orange:"hsl(var(--orange))",
      white:"hsl(var(--white))",
      lightGrey:"hsl(var(--light-grey))",
      mediumGrey:"hsl(var(--medium-grey))",
      darkBlue:"hsl(var(--dark-blue))",
      veryDarkBlue:"hsl(var(--very-dark-blue))",
      black:"hsl(var(--black))"
    },
    extend: {
      fontFamily: {
        overpass:"'Overpass'"
      }
    },
  },
  plugins: [],
}

