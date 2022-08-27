import { Box, Container, Typography, Grid } from "@mui/material";
import Hunza from "../../assets/videos/hunza.mp4";
import SearchBox from "../Searchbar/index";
import MediaCard from "../../components/card";
import landcruser from "../../assets/images/v8.webp";

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <section style={{ height: "100vh" }}>
        <Box sx={{ position: "relative" }}>
          <video
            src={Hunza}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              position: "fixed",
              top: "-90px",
              zIndex: "-1",
            }}
          />
        </Box>
        <Box
          sx={{
            background: "#fff",
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
          py={5}
        >
          <SearchBox />
        </Box>
      </section>
      <section>
        <Box sx={{ background: "#fff" }}>
          <Typography
            variant="h4"
            color="primary"
            textAlign="center"
            fontWeight="700"
          >
            Type of Car you can book
          </Typography>
          <Grid container spacing={1}>
            <Grid item md={3}>
              <MediaCard image={landcruser} />
            </Grid>
            <Grid item md={3}>
              <MediaCard image={landcruser} />
            </Grid>
            <Grid item md={3}>
              <MediaCard image={landcruser} />
            </Grid>
            <Grid item md={3}>
              <MediaCard image={landcruser} />
            </Grid>
          </Grid>
        </Box>
      </section>
    </Container>
  );
};

export default Home;
