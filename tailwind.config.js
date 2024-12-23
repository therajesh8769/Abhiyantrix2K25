// // /** @type {import('tailwindcss').Config} */

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         pulse: {
//           '0%, 100%': {
//             opacity: 1,
//           },
//           '50%': {
//             opacity: .5,
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s infinite linear',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: .5,
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        tilt: {
          '0%, 100%': {
            transform: 'rotate(-1deg)',
          },
          '50%': {
            transform: 'rotate(1deg)',
          },
        },
      },
    },
  },
  plugins: [],
};