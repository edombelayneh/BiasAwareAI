// // app/theme.js
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: { main: '#9C27B0' },
//     secondary: { main: '#E6E6FA' },
//     background: {
//       default: '#F5F5FA',
//       paper: '#FFFFFF',
//     },
//     text: { primary: '#333' },
//   },
//   typography: {
//     fontFamily: `'Playfair Display', serif`,
//   },
// });

// export default theme;

// app/theme.js
// app/theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#9C27B0' },
    secondary: { main: '#E6E6FA' },
    background: {
      default: '#EDEDF3',
      paper: '#F5F5FA',
    },
    text: {
      primary: '#2A2A2A',
    },
  },
  typography: {
    fontFamily: `'Playfair Display', serif`,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#BA68C8' },
    secondary: { main: '#D1C4E9' },
    background: {
      default: '#121212',
      paper: '#1E1E2F',
    },
    text: {
      primary: '#EDEDED',
    },
  },
  typography: {
    fontFamily: `'Playfair Display', serif`,
  },
});

