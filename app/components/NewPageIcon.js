'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Box, Typography } from "@mui/material";

const NewPageIcon = ({ page, text, imageName }) => {
  const router = useRouter();

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
        width: 100,
        padding: 5,
        borderRadius: '8px',
        transition: '0.2s',
        '&:hover': {
          backgroundColor: '#f3e5f5',
        }
      }}
    >
      <Image
        src={imageName}
        alt={`${text} icon`}
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      {/* <Typography variant="body1" mt={1}>
        {text}
      </Typography> */}
    </Box>
  );
};

export default NewPageIcon;
