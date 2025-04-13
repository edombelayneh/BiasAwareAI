// 'use client';
// import { keyframes } from '@emotion/react';
// import { Box, AppBar, Toolbar, useMediaQuery, IconButton,MenuIcon, Menu, MenuItem, Typography } from "@mui/material";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useRouter } from 'next/navigation';
// import NewPageIcon from './components/NewPageIcon'; // adjust path if needed
// import CssBaseline from '@mui/material/CssBaseline';
// import { Container } from '@mui/material';
// // import theme from '/theme'; 
// // import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';


// const glowAnimation = keyframes`
//   0% {
//     box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
//   }
//   50% {
//     box-shadow: 0 0 15px rgba(156, 39, 176, 0.5), 0 0 25px rgba(156, 39, 176, 0.3);
//   }
//   100% {
//     box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
//   }
// `;

// const theme = createTheme({
//   palette: {
//     mode: 'light', // You can toggle this if you want dark mode support later
//     primary: {
//       main: '#9C27B0', // purple
//     },
//     secondary: {
//       main: '#E6E6FA', // lavender
//     },
//     background: {
//       default: '#F5F5FA',
//       paper: '#FFFFFF',
//     },
//     text: {
//       primary: '#333',
//     },
//   },
//   typography: {
//     fontFamily: `'Playfair Display', serif`,
//     h4: {
//       fontWeight: 700,
//       color: '#9C27B0',
//     },
//     body1: {
//       fontFamily: `'Roboto', sans-serif`,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           animation: `${glowAnimation} 2s infinite alternate`,
//           borderRadius: 12,
//           textTransform: 'none',
//           fontWeight: 'bold',
//         },
//       },
//     },
//   },
// });



// export default function Home() {
//   // const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//         {/* <Box sx={{top: 10}}> */}
          
//             <Container 
//               maxWidth="lg" sx={{ px: { xs: 2, sm: 4 }, mt: 10, mb: 10 }}
//               >
//                 <Box
//                   sx={{
//                     display: 'grid',
//                     gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
//                     gap: isMobile ? 8 : 15,
//                     p: 4,
//                     maxWidth: 1000,
//                     margin: 'auto',
//                   }}>

//                   <NewPageIcon 
//                     page="/intro"
//                     text="Intro"
//                     imageName="/images/intro.jpg" 
//                   />

//                   <NewPageIcon 
//                     page="/race"
//                     text="Race"
//                     imageName="/images/race.png" 
//                   />

//                   <NewPageIcon 
//                     page="/gender"
//                     text="Gender"
//                     imageName="/images/gender.jpg" 
//                   />

//                   <NewPageIcon 
//                     page="/job"
//                     text="Job Opportunities"
//                     imageName="/images/job.png" 
//                   />

//                   <NewPageIcon 
//                     page="/solution"
//                     text="Solutions"
//                     imageName="/images/solution.jpg" 
//                   />

//                   <NewPageIcon 
//                     page="/reference"
//                     text="References"
//                     imageName="/images/reference.jpg" 
//                   />
//                 </Box>
//               {/* <footer className={styles.footer}>
//                 <a
//                   href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Image
//                     aria-hidden
//                     src="/file.svg"
//                     alt="File icon"
//                     width={16}
//                     height={16}
//                   />
//                   Learn
//                 </a>
//                 <a
//                   href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Image
//                     aria-hidden
//                     src="/window.svg"
//                     alt="Window icon"
//                     width={16}
//                     height={16}
//                   />
//                   Examples
//                 </a>
//                 <a
//                   href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Image
//                     aria-hidden
//                     src="/globe.svg"
//                     alt="Globe icon"
//                     width={16}
//                     height={16}
//                   />
//                   Go to nextjs.org →
//                 </a>
//               </footer> */}
//             </Container>
//         {/* </Box> */}
//     </ ThemeProvider>
//   );
// }


'use client';

import { keyframes } from '@emotion/react';
import {
  Box,
  Container,
  CssBaseline,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NewPageIcon from './components/NewPageIcon';

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

export default function Home() {
  const theme = useTheme(); // ✅ Shared from ThemeProvider
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 }, mt: 10, mb: 10 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: isMobile ? 8 : 15,
            p: 4,
            maxWidth: 1000,
            margin: 'auto',
          }}
        >
          <NewPageIcon page="/intro" text="Intro" imageName="/images/intro.png" />
          <NewPageIcon page="/race" text="Race" imageName="/images/race.png" />
          <NewPageIcon page="/gender" text="Gender" imageName="/images/gender.png" />
          <NewPageIcon page="/job" text="Job Opportunities" imageName="/images/job.png" />
          <NewPageIcon page="/solution" text="Solutions" imageName="/images/solution.png" />
          <NewPageIcon page="/reference" text="References" imageName="/images/reference.png" />
        </Box>
      </Container>
    </>
  );
}

