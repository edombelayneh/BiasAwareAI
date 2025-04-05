'use client';

import { ThemeProvider, CssBaseline, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import theme from './theme'; // Optional if you already have a theme file

export default function ClientLayout({ children }) {
  const themeMUI = useTheme();
  const isMobile = useMediaQuery(themeMUI.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            padding: isMobile ? 2 : 4,
            marginLeft: isMobile ? 0 : '180px', // adjust if sidebar width changes
          }}
        >
          {children}
        </Box>
      </Box> */}
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <Sidebar />
        <Box component="main" sx={{ flex: 1, marginLeft: isMobile ? 0 : '200px' }}>
            {children}
        </Box>
        </Box>

    </ThemeProvider>
  );
}
