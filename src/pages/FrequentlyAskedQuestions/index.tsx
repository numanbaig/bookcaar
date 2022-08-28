import { Box, Container, Typography, Grid, Button } from "@mui/material";
import FrequentQuestions from "../../components/FrequentlyAskedQuestions";
import { QuestionsMock } from "../../mockData/index";

const FrequentlyAskedQuestions = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <section style={{ background: "#fff" }}>
        <Box width={"60%"} margin={"auto"} pt={5}>
          <Typography
            variant="h4"
            color="primary"
            textAlign="center"
            fontWeight="700"
            pb={4}
          >
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <FrequentQuestions questions={QuestionsMock} />
        </Box>
      </section>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
