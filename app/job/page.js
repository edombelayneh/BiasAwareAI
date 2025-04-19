'use client';
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function JobPage() {
  const playerRef = useRef(null);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const router = useRouter();

  const transcriptData = [
    { time: 0, text: 'How does an AI discriminate on job applications?' },
    { time: 3, text: 'This sort of bias is set primarily in the data that is used to train an AI.' },
    { time: 6, text: 'If the data used is too specific, the AI will only look for those specific traits, ignoring similar ones.' },
    { time: 10, text: 'The words an AI may look for might not match what applicants actually write on their resumes.' },
    { time: 14, text: 'Training with overly detailed job descriptions can lead to unrealistic expectations, like nurses needing "computer skills" or retail workers listing "floor buffing".' },
    { time: 20, text: 'Applicants might use different words, like “operated Point of Sale” instead of “handled customer transactions,” and get overlooked.' },
    { time: 25, text: 'The AI often doesn’t check for synonyms, which leaves qualified people out.' },
    { time: 28, text: 'To save time, companies may use AI-reviewed one-way video interviews.' },
    { time: 32, text: 'But if the applicant talks, dresses, or behaves differently than existing employees, AI may screen them out—regardless of skill or what they say.' },
    { time: 38, text: 'AI may also give preference to experiences that reflect specific genders or income groups.' },
    { time: 42, text: 'For example, trade school or veteran status might boost chances—both more common among men—while apprenticeships or hands-on work, often done by women, might not count as much.' },
    { time: 48, text: 'It may also favor summer camps or college programs, which require money and free summers—biasing the system toward wealthier applicants.' }
  ];
  
  

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('ytplayer', {
        videoId: 'QwD_Es4-kX8',
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
        Bias in AI - Job Opportunities
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

