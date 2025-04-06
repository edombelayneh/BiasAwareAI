'use client';
import { Box, Typography, Container, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

export default function ReferencePage() {
  const router = useRouter();

  const handleBack = () => router.push('/solution');

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 10 }}>
      {/* Thank You Message */}
      <Typography variant="h3" align="center" fontWeight={700} color="primary" gutterBottom>
        Thank You!
      </Typography>

      {/* Learning Message */}
      <Typography variant="h6" align="center" sx={{ mt: 2, mb: 6 }}>
        We hope this experience helped you better understand the importance of addressing bias in AI and how it can impact real-world decisions. Let’s build a more equitable future together.
      </Typography>

      {/* References Section */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: '#f9f9ff',
          color: '#4B0082',
          maxHeight: '400px',
          overflowY: 'auto',
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          References
        </Typography>

        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            Barocas, S., Hardt, M., & Narayanan, A. (2019). *Fairness and Machine Learning*. Retrieved from{' '}
            <a href="https://fairmlbook.org/" target="_blank" rel="noopener noreferrer">
              https://fairmlbook.org/
            </a>
          </li>
          <li>
            Buolamwini, J., & Gebru, T. (2018). Gender shades: Intersectional accuracy disparities in commercial gender classification. *Proceedings of Machine Learning Research*, 81, 1–15. Retrieved from{' '}
            <a href="http://proceedings.mlr.press/v81/buolamwini18a.html" target="_blank" rel="noopener noreferrer">
              http://proceedings.mlr.press/v81/buolamwini18a.html
            </a>
          </li>
          <li>
            Noble, S. U. (2018). *Algorithms of Oppression: How Search Engines Reinforce Racism*. NYU Press.
          </li>
          <li>
            Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366(6464), 447–453.{' '}
            <a href="https://doi.org/10.1126/science.aax2342" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1126/science.aax2342
            </a>
          </li>
          <li>
            Raji, I. D., & Buolamwini, J. (2019). Actionable auditing: Investigating the impact of publicly naming biased performance results of commercial AI products. *Proceedings of the 2019 AAAI/ACM Conference on AI, Ethics, and Society*.{' '}
            <a href="https://dl.acm.org/doi/10.1145/3306618.3314244" target="_blank" rel="noopener noreferrer">
              https://dl.acm.org/doi/10.1145/3306618.3314244
            </a>
          </li>
        </Box>
      </Paper>

      {/* Back Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button variant="outlined" color="primary" onClick={handleBack}>
          ← Back to Solution
        </Button>
      </Box>
    </Container>
  );
}
