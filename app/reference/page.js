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
            Albaroudi, E., Mansouri, T., & Alameer, A. (2024). A comprehensive review of AI techniques for addressing algorithmic bias in job hiring. <i>AI, 5</i>(1), 383–404. Retrieved from{' '}
            <a href="https://doi.org/10.3390/ai5010019" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.3390/ai5010019
            </a>
        </li>
        <li>
            Kay, M., Matuszek, C., & Munson, S. A. (2015). Unequal representation and gender stereotypes in image search results for occupations. <i>CHI '15: Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems</i>, 3819–3828. Retrieved from{' '}
            <a href="https://doi.org/10.1145/2702123.2702520" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1145/2702123.2702520
            </a>
        </li>
        <li>
            Marinucci, L., Mazzuca, C., & Gangemi, A. (2023). Exposing implicit biases and stereotypes in human and artificial intelligence: State of the art and challenges with a focus on gender. <i>AI & Society, 38</i>, 747–761. Retrieved from{' '}
            <a href="https://doi.org/10.1007/s00146-022-01474-3" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1007/s00146-022-01474-3
            </a>
        </li>
        <li>
            Sandoval-Martin, T., & Martínez-Sanzo, E. (2024). Perpetuation of gender bias in visual representation of professions in the generative AI tools DALL·E and Bing Image Creator. <i>Social Sciences, 13</i>(5), 250. Retrieved from{' '}
            <a href="https://doi.org/10.3390/socsci13050250" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.3390/socsci13050250
            </a>
        </li>
        <li>
            Chen, Z. (2023). Ethics and discrimination in artificial intelligence-enabled recruitment practices. <i>Humanities and Social Sciences Communications, 10</i>, Article 567. Retrieved from{' '}
            <a href="https://doi.org/10.1057/s41599-023-02079-x" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1057/s41599-023-02079-x
            </a>
        </li>
        <li>
            Intahchomphoo, C., & Gundersen, O. E. (2020). Artificial intelligence and race: A systematic review. <i>Legal Information Management, 20</i>(2), 74–84. Retrieved from{' '}
            <a href="https://doi.org/10.1017/S1472669620000183" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1017/S1472669620000183
            </a>
        </li>
        <li>
            Hofmann, V., Kalluri, P. R., Jurafsky, D., & King, S. (2024). AI generates covertly racist decisions about people based on their dialect. <i>Nature, 633</i>, 147–149. Retrieved from{' '}
            <a href="https://doi.org/10.1038/s41586-024-07856-5" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1038/s41586-024-07856-5
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
