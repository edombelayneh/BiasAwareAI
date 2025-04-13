'use client';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function GenderPage() {
  const videoRef = useRef(null);
  const router = useRouter();

  const handlePrev = () => router.push('/race');
  const handleNext = () => router.push('/job');

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" align="center" fontWeight={700} color="primary" gutterBottom>
        Bias in AI - Gender
      </Typography>

      {/* Video Section */}
      <Box
        sx={{
          width: '100%',
          mt: 5,
          mb: 5,
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 0 20px 5px rgba(156, 39, 176, 0.7)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%', // 16:9
          }}
        >
          <video
            ref={videoRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/video/GenderVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>

      {/* Transcript Section */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: '#f0f0ff',
          color: '#4B0082',
          mb: 5,
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Transcript
        </Typography>
        <Typography variant="body1">
          Welcome to the BiasAwareAI platform! In this introduction, we&apos;ll explore the goals of our project and how we aim to raise awareness about algorithmic bias in AI systems across various sectors including race, gender, and employment. Stay tuned as we guide you through each section.
        </Typography>
      </Paper>

      {/* Prev/Next Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button variant="outlined" color="primary" onClick={handlePrev}>
          ← Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next →
        </Button>
      </Box>
    </Container>
  );
}
