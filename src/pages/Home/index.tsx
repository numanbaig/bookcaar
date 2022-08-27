import { Box, Container, Typography, Grid } from "@mui/material";
import Hunza from "../../assets/videos/hunza.mp4";
import SearchBox from "../Searchbar/index";
import Carousel from "../carousel/index";
import WaveSvg from "../../assets/spaceremove.svg";

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
          <img
            src={WaveSvg}
            className="logo"
            alt="Vite logo"
            style={{ position: "absolute", top: "-40px" }}
          />
        </Box>
      </section>
      <section style={{ background: "#fff" }}>
        <Carousel />
      </section>
    </Container>
  );
};

export default Home;
