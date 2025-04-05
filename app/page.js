'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { keyframes } from '@emotion/react';
import { Box, AppBar, Toolbar, useMediaQuery, IconButton,MenuIcon, Menu, MenuItem, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import NewPageIcon from './components/NewPageIcon'; // adjust path if needed
import CssBaseline from '@mui/material/CssBaseline';


const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(156, 39, 176, 0.5), 0 0 25px rgba(156, 39, 176, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
  }
`;

const theme = createTheme({
  palette: {
    mode: 'light', // You can toggle this if you want dark mode support later
    primary: {
      main: '#9C27B0', // purple
    },
    secondary: {
      main: '#E6E6FA', // lavender
    },
    background: {
      default: '#F5F5FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: `'Playfair Display', serif`,
    h4: {
      fontWeight: 700,
      color: '#9C27B0',
    },
    body1: {
      fontFamily: `'Roboto', sans-serif`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          animation: `${glowAnimation} 2s infinite alternate`,
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
  },
});



export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box sx={{top: 10}}>
          <div className={styles.page}>
            <main className={styles.main}>
              <div className={styles.ctas}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                  gap: 4,
                  p: 4,
                  maxWidth: 1000,
                  margin: 'auto',
                }}>

                <NewPageIcon 
                  page="/intro"
                  text="Intro"
                  imageName="/images/intro.jpg" 
                />

                <NewPageIcon 
                  page="/race"
                  text="Race"
                  imageName="/images/race.png" 
                />

                <NewPageIcon 
                  page="/gender"
                  text="Gender"
                  imageName="/images/gender.jpg" 
                />

                <NewPageIcon 
                  page="/job"
                  text="Job Opportunities"
                  imageName="/images/job.png" 
                />

                <NewPageIcon 
                  page="/solution"
                  text="Solutions"
                  imageName="/images/solution.jpg" 
                />

                <NewPageIcon 
                  page="/reference"
                  text="References"
                  imageName="/images/reference.jpg" 
                />
              </Box>
                

              </div>
            </main>
            {/* <footer className={styles.footer}>
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer> */}
          </div>
        </Box>
    </ ThemeProvider>
  );
}

{/* <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>  
          
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                
              >
               
              </IconButton>
              <Menu
                // anchorEl={anchorEl}
                // anchorOrigin={{
                //   vertical: 'top',
                //   horizontal: 'right',
                // }}
                // keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                // open={Boolean(anchorEl)}
                // onClose={handleClose}
              >
                <MenuItem>Features</MenuItem>
                <MenuItem>How It Works</MenuItem>
                <MenuItem>Pricing</MenuItem>
              </Menu>

              
                <img 
                  src='/logo.png'
                  alt="Logo"
                  style={{
                    marginTop: 0,
                    borderRadius: '10px',
                    height: '40px',
                    width: 'auto'
                  }}
                />
                <Typography variant="h6" sx={{ ml: 2, fontWeight: 700, display: { sm: 'block' } }}>
                  AiQuickDoc
                </Typography>
              </Box>
            </Box>
          {/* // ) : (  
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src='/logo.png'
              alt="Logo"
              style={{
                marginTop: 0,
                borderRadius: '10px',
                height: '40px',
                width: 'auto'
              }}
            />
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 700, display: { sm: 'block' } }}>
              AiQuickDoc
            </Typography>
          </Box>
          </Box>
           
            
  
        
          
        </Toolbar>
      </AppBar> */}