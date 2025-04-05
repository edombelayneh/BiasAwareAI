'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Box, Typography } from "@mui/material";

// const NewPageIcon = ({ page, text, imageName }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(page);
//   };

//   return (
//     <Box
//       onClick={handleClick}
//       sx={{
//         cursor: 'pointer',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//         width: 100,
//         padding: 5,
//         borderRadius: '8px',
//         transition: '0.2s',
//         '&:hover': {
//           backgroundColor: '#f3e5f5',
//         }
//       }}
//     >
//       <Image
//         src={imageName}
//         alt={`${text} icon`}
//         width={150}
//         height={150}
//         style={{ borderRadius: '50%' }}
//       />
//       {/* <Typography variant="body1" mt={1}>
//         {text}
//       </Typography> */}
//     </Box>
//   );
// };

// export default NewPageIcon;

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
          width: 200,
          padding: 5,
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
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
        {/* <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, color: 'primary.main' }}>
          {text}
        </Typography> */}
      </Box>
    );
  };

  export default NewPageIcon;

  
