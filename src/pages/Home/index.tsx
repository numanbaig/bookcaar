import { Box, Container, Typography, Grid } from "@mui/material";
import Hunza from "../../assets/videos/hunza.mp4";
import SearchBox from "../Searchbar/index";
import Rating from "../../components/Rating";
import Slider from "react-slick";
import Carousel from "../carousel";
import WaveSvg from "../../assets/spaceremove.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
  };
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
          pt={5}
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

      <section>
        <Box sx={{ backgroundColor: "#fff" }} pb={3}>
          <Typography
            variant="h4"
            color="primary"
            textAlign="center"
            fontWeight="700"
            pb={4}
          >
            Reviews
          </Typography>
          <Slider {...settings}>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </Slider>
        </Box>
      </section>
    </Container>
  );
};

export default Home;
