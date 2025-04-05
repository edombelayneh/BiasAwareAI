'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const NewPageIcon = ({ page, text, imageName }) => {
    const router = useRouter();
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClick = () => {
      router.push(page);
    };
  
    return (
      <Box
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: isMobile ? 100 : 200,
          padding: isMobile ? 2 : 5,
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 20px rgba(156, 39, 176, 0.4)',
          },
        }}
      >
        <Image
          src={imageName}
          alt={`${text} icon`}
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          style={{ borderRadius: '50%' }}
        />
        {/* <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, color: 'primary.main' }}>
          {text}
        </Typography> */}
      </Box>
    );
  };

  export default NewPageIcon;

  
