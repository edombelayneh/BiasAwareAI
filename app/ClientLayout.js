'use client';

import { useState, useEffect } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  useMediaQuery,
  IconButton,
  Tooltip
} from '@mui/material';
import { useTheme as useMUITheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Sidebar from './components/Sidebar';
import { lightTheme, darkTheme } from './theme';

export default function ClientLayout({ children }) {
  const [mode, setMode] = useState('light');
  const themeMUI = useMUITheme();
  const isMobile = useMediaQuery(themeMUI.breakpoints.down('sm'));

  useEffect(() => {
    const stored = localStorage.getItem('mode');
    if (stored) setMode(stored);
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Toggle Button */}
      <Tooltip title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}>
        <IconButton
          onClick={toggleMode}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 3000,
            color: mode === 'light' ? '#9C27B0' : '#E6E6FA',
            backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e2f',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#f0f0f0' : '#2e2e3d',
            }
          }}
        >
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>

      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            padding: isMobile ? 0 : 4,
            marginLeft: isMobile ? 0 : '200px', 
            transition: 'all 0.3s ease-in-out',
            marginTop: isMobile ? 2 : 0,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

