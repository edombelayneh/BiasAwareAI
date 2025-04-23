'use client';
import { Box, Typography, Button, Container, Paper, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SolutionPage() {
  const router = useRouter();

  const handlePrev = () => router.push('/job');
  const handleNext = () => router.push('/reference'); 

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" align="center" fontWeight={700} color="primary" gutterBottom>
        Solutions to Bias in AI
      </Typography>

      {/* Main Text Content */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: '#f0f0ff',
          color: '#4B0082',
          mb: 5,
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Could Artificial Intelligence Be Fair?
        </Typography>

        <Typography variant="body1" paragraph>
          AI can be fair, but only if we take steps to make it so. AI systems often inherit racial, gender, and class biases from the data they learn from. Here are key solutions to reduce bias and build equitable systems:
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          1. Train on Diverse and Inclusive Datasets
        </Typography>
        <Typography variant="body1" paragraph>
          AI is only as fair as the data it&apos;s trained on. If training data reflects discrimination, the AI will too. That&apos;s why datasets must be diverse and inclusive, representing people from various races, genders, dialects, and backgrounds, not just those with privilege or access.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          2. Regular Algorithm Audits
        </Typography>
        <Typography variant="body1" paragraph>
          AI development should always include audits to test how systems treat different groups. For example, does an AI reject more resumes from women or rate Black neighborhoods as higher risk? These checks uncover hidden discrimination before it affects people.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          3. Transparent and Explainable Decisions
        </Typography>
        <Typography variant="body1" paragraph>
          When AI makes decisions, like denying housing or a job, people should know why. This “right to explanation” means AI must be explainable and accountable. Users deserve clarity and the ability to challenge unfair outcomes.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          4. Educate and Empower Diverse Developers
        </Typography>
        <Typography variant="body1" paragraph>
          More people need to be trained in AI ethics and responsible development, especially from underrepresented communities. The more diverse the team building AI systems, the fairer those systems will be.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          5. Strengthen Legal and Ethical Standards
        </Typography>
        <Typography variant="body1" paragraph>
          Laws and policies must evolve with the technology. Governments and institutions should set clear standards for what&apos;s acceptable in AI decision-making especially in areas like hiring, lending, and policing.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1">
          Bias isn&apos;t just a tech issue, it&apos;s a human issue reflected in new tools. With the right data, diverse teams, transparency, and strong regulation, we can create AI that serves everyone, not just the majority.
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

