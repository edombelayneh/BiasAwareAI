// app/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#9C27B0' },
    secondary: { main: '#E6E6FA' },
    background: {
      default: '#F5F5FA',
      paper: '#FFFFFF',
    },
    text: { primary: '#333' },
  },
  typography: {
    fontFamily: `'Playfair Display', serif`,
  },
});

export default theme;
