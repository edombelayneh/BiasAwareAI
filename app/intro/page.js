'use client';
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Intro() {
  const playerRef = useRef(null);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const router = useRouter();

  const transcriptData = [
    { time: 0, text: 'So much of our world is starting to rely upon AI for particular tasks.' },
    { time: 4, text: 'For instance we use it for image generation, writing, conversation and work.' },
    { time: 8, text: 'A supposed benefit for these tasks is that AI is unbiased.' },
    { time: 12, text: 'However, such claims are false, and can be seen when you look at how AI responds to race, gender, and job applications.' },
    { time: 18, text: 'If you want to learn more about how AI is discriminatory and what you can do to help, continue watching this video series.' }
  ];
  

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('ytplayer', {
        videoId: '-ENZOJEWvN0',
        events: {
          onReady: () => {
            setInterval(() => {
              const currentTime = playerRef.current?.getCurrentTime?.();
              const currentLine = transcriptData
                .slice()
                .reverse()
                .find((line) => currentTime >= line.time);
              if (currentLine?.text && currentLine.text !== currentTranscript) {
                setCurrentTranscript(currentLine.text);
              }
            }, 500);
          },
        },
      });
    };
  }, [currentTranscript]);

  const handlePrev = () => router.push('/');
  const handleNext = () => router.push('/race');

  return (
    <Container maxWidth="md" style={{ marginTop: 80, marginBottom: 80 }}>
      {/* Title */}
      <Typography variant="h3" align="center" fontWeight={700} color="primary" gutterBottom>
        Bias in AI - Intro
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
            paddingTop: '56.25%',
          }}
        >
          <Box
            id="ytplayer"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Box>

      {/* Live Transcript */}
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

        {transcriptData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'flex-start',
              mb: 1,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f9f0ff',
              },
            }}
            onClick={() => {
              if (playerRef.current?.seekTo) {
                playerRef.current.seekTo(item.time, true);
              }
            }}
          >
            <Typography
              variant="body2"
              sx={{
                minWidth: 60,
                color: '#6A0DAD',
                fontWeight: 600,
              }}
            >
              {new Date(item.time * 1000).toISOString().substr(14, 5)}
            </Typography>
            <Typography variant="body2" sx={{ flex: 1 }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Paper>

      

      {/* Navigation Buttons */}
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

