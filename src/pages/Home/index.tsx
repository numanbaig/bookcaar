import { Box, Container } from "@mui/material";
import Hunza from "../../assets/videos/hunza.mp4";
import SearchBox from "../Searchbar/index";

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
              position: "absolute",
              top: "-90px",
              zIndex: "-1",
            }}
          />
        </Box>
      </section>
      <section>
        <Box
          sx={{
            background: "#fff",
            position: "relative",
            top: "-165px",
          }}
        >
          <SearchBox />
        </Box>
      </section>
      <section style={{ position: "relative" }}></section>
    </Container>
  );
};

export default Home;
