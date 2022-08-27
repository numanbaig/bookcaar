import { Box, Container } from "@mui/material";
import Hunza from "../../assets/videos/hunza.mp4";

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <section>
        <Box sx={{ position: "relative" }}>
          <video
            src={Hunza}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              position: "absolute",
              top: "-87px",
              zIndex: "-1",
            }}
          />
          {/* <video
            src={Naltar}
            autoPlay
            muted
            // loop
            style={{
              width: "100%",
              position: "absolute",
              top: "-87px",
              zIndex: "-1",
            }}
          /> */}
        </Box>
      </section>
    </Container>
  );
};

export default Home;
