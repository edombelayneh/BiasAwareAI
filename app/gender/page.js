'use client';
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function GenderPage() {
  const playerRef = useRef(null);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const router = useRouter();

  const transcriptData = [
    { time: 0, text: 'Could Artificial Intelligence be sexist? In this video, we will explore some of the gender biases an AI may have.' },
    { time: 5, text: 'These are typically expressed in how AI looks for a worker, describes a worker, or uses pronouns in relation to a career.' },
    { time: 10, text: 'In 2015, Amazon used an AI to filter through applications. It preferred men for higher roles.' },
    { time: 15, text: 'This was due to the AI being trained on a dataset of current or previous Amazon employee resumes. Which were typically male workers.' },
    { time: 20, text: 'So, the AI looked for words like “varsity football” and “veteran” when scanning applications.' },
    { time: 25, text: 'While women could have those experiences, they\'re more likely to be found in men’s resumes.' },
    { time: 30, text: 'It also likely looked for masculine pronouns. Women were rejected more frequently than men.' },
    { time: 35, text: 'The AI was eventually taken down due to this discrimination.' },
    { time: 40, text: 'But it’s not just Amazon AIs being sexist. Image generators like earlier versions of DALL·E have gender stereotypes baked in.' },
    { time: 45, text: 'Women rarely appear in leadership roles, and when they do, they often look younger and more attractive.' },
    { time: 50, text: 'In Bing Image Creator, women tend to appear less confident and unserious compared to men.' },
    { time: 55, text: 'Young girls are depicted playing with bubbles and dolls, while boys are shown with trucks and action toys.' },
    { time: 60, text: 'This reinforces the stereotype of women as caregivers and men as builders or leaders.' },
    { time: 65, text: 'Much like image generators, text bots are also sexist.' },
    { time: 70, text: 'When discussing educated, physical, or leadership roles, masculine pronouns are frequently used.' },
    { time: 75, text: 'If a person is said to be competent, chatbots often assume the person is male.' },
    { time: 80, text: 'Teachers are often labeled as female, while professors are usually considered male in chatbot responses.' },
  ];

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('ytplayer', {
        videoId: 'JCDJRoLAwUA',
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

  const handlePrev = () => router.push('/race');
  const handleNext = () => router.push('/job');

  return (
    <Container maxWidth="md" style={{ marginTop: 80, marginBottom: 80 }}>
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

