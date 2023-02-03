import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Hunza from "../../assets/videos/hunza.mp4";
import SearchBox from "../Searchbar/index";
import Carousel from "../carousel/index";
import Gallery from "../../gallery/index";
import Rating from "../../components/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrequentQuestions from "../../components/FrequentlyAskedQuestions";
import { QuestionsMock } from "../../mockData/index";
import { makeStyles } from "@mui/styles";
import Vehicles from "../../components/vehicle/index";
import theme from "../../theme";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  slick: {
    "& .slick-list": {
      padding: "20px 10px !important",
    },
    "& .slick-prev": {
      zIndex: "1",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "30px",
      left: "15px",
    },
    "& .slick-next": {
      zIndex: "1",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "30px",
      right: "15px",
    },
    "& .review": {
      maxWidth: "500px",
      width: "98%",
    },
  },
}));

const Home = () => {
  const [activeNav, setActiveNav] = useState(0);

  const classes = useStyles();
  const state = useSelector((state) => state);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.addEventListener("scroll", setActiveNav(window.scrollY));
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <section style={{ height: "100vh", position: "relative" }}>
        <Box>
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
            bottom: "-120px",
            width: "100%",
          }}
          pt={5}
        >
          <SearchBox />
        </Box>
      </section>
      <section style={{ background: "#fff" }}>
        <Vehicles />
        <Carousel />
      </section>

      <section id={"Reviews"}>
        <Box
          sx={{ backgroundColor: "#fff" }}
          pb={3}
          pt={5}
          className={classes.slick}
        >
          <Typography
            variant="h4"
            color="primary"
            textAlign="center"
            fontWeight="700"
            pb={4}
          >
            REVIEWS
          </Typography>
          <Slider {...settings}>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </Slider>
        </Box>
      </section>
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
          {QuestionsMock.map((question, index) => {
            return (
              <FrequentQuestions
                key={index}
                question={question.question}
                id={question.id}
                answer={question.answer}
              />
            );
          })}
          <Box py={4} width={"100%"} display={"flex"} justifyContent="center">
            <Button variant="outlined">Show more</Button>
          </Box>
        </Box>
      </section>
      <Gallery />
    </Container>
  );
};

export default Home;
