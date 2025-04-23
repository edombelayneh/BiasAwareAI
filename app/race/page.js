'use client';
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function RacePage() {
  const playerRef = useRef(null);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const router = useRouter();

  const transcriptData = [
    { time: 0, text: 'Could Artificial Intelligence be racist? In this video we will explore some of the racial biases AI may have.' },
    { time: 5, text: 'These biases are not always explicit; rather they make assumptions about characteristics that are frequently attributed to race.' },
    { time: 10, text: 'This includes dialects and metadata, such as location.' },
    { time: 13, text: 'Policing agencies are increasingly seeking out predictive policing software.' },
    { time: 17, text: 'This software would take metadata and associate it with crime.' },
    { time: 21, text: 'If a neighborhood mainly composed of people of color is targeted for being low income, it creates a cycle of generational fear and hopelessness.' },
    { time: 28, text: 'In a more direct case, COMPAS software was found to favor Caucasians over African Americans with the same profile by assigning the latter a higher risk score.' },
    { time: 35, text: 'How does AI make racist assumptions about dialect?' },
    { time: 38, text: 'A study by Valentin Hoffman et al found that AI is more likely to make negative assumptions about text written in African American English.' },
    { time: 44, text: 'This is true even when the topic is the same as in Standard American English.' },
    { time: 47, text: 'These assumptions include labeling AAE as less interesting or more aggressive.' },
    { time: 51, text: 'So why do these problems exist?' },
    { time: 53, text: 'Well, 50% of university students said that race shouldn’t be considered when designing AI.' },
    { time: 57, text: 'But ignoring race doesn’t remove it—it just lets biased majority data dominate.' },
    { time: 61, text: 'This leads AI to misinterpret real-world situations, like low income Black neighborhoods or dialects.' }
  ];
  
  

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('ytplayer', {
        videoId: '-7HGrSFVuwY',
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

  const handlePrev = () => router.push('/intro');
  const handleNext = () => router.push('/gender');

  return (
    <Container maxWidth="md" style={{ marginTop: 80, marginBottom: 80 }}>
      {/* Title */}
      <Typography variant="h3" align="center" fontWeight={700} color="primary" gutterBottom>
        Bias in AI - Race
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

