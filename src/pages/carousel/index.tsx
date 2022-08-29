import React, { ReactNode, useContext, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Astore from "../../assets/Images/astore.jpg";
import Chilas from "../../assets/Images/fm1.jpg";
import Phunder from "../../assets/Images/fm2.jpg";
import Sikardu from "../../assets/Images/fm3.jpg";
import atabadLake from "../../assets/Images/fm4.jpg";
import ladyFingre from "../../assets/Images/fm5.jpg";
import phunder from "../../assets/Images/fm6.jpg";
import { opacityColors } from "../../theme/opacityColors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlaceIcon from "@mui/icons-material/Place";
import { themeShadows } from "../../theme/shadows";

const NavbarCarousel = () => {
  const theme = useTheme();
  const items = [
    {
      title: "Hussani Suspension Bridge",
      description: "locale.notGettingUsedToNew",
      buttonText: "locale.switchToPreviousVersion",
      image: Chilas,
    },
    {
      title: "Rainbow lake Astore",
      description: "test",
      buttonText: "helpGuide",
      image: Phunder,
    },
    {
      title: "Naltar Valley",
      description: "test",
      buttonText: "helpGuide",
      image: Sikardu,
    },
    {
      title: "Passu Cones",
      description: "locale.notGettingUsedToNew",
      buttonText: "locale.switchToPreviousVersion",
      image: atabadLake,
    },
    {
      title: "Skardu",
      description: "test",
      buttonText: "helpGuide",
      image: ladyFingre,
    },
    {
      title: "Phunder",
      description: "test",
      buttonText: "helpGuide",
      image: phunder,
    },
  ];

  return (
    <>
      <Carousel
        indicatorIconButtonProps={{
          style: {
            color: opacityColors().primary,
          },
        }}
        indicatorContainerProps={{}}
        activeIndicatorIconButtonProps={{
          style: {
            width: "1em !important",
            height: "1em !important",
            color: theme.palette.primary.main,
            backgroundColor: "transparent",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

const Item = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    buttonText: string;
    image: string;
  };
}) => {
  const theme = useTheme();
  return (
    <Box
    id={'Top Places'}
    my="1.5rem"
      mx="auto"
      display="flex"
      padding="2rem"
      flexWrap={"wrap"}
      maxWidth={"80%"}
      textAlign="left"
      justifyContent={"space-around"}
    >
      <Box display='flex' flexDirection={'column'} sx={{ width: "50%",
            height: "40vh",}} >
        <img
          src={item.image}
          alt="Alternative text goes here as usual"
          style={{
            width: "100%",
            height: "40vh",
            borderRadius: "2rem",
            border: "1px solid",
            borderColor: opacityColors().primary,
            boxShadow: themeShadows().primary,
          }}
        />
        <Box display="flex" ml=".5rem" alignItems='center'>
        <PlaceIcon color="primary" />
          <Typography
            variant="h6"
            sx={{fontWeight: 700 }}
          >
            {item.title}
          </Typography>
        </Box>
      </Box>
      <Box flex="1" marginLeft="1rem" my="auto">
        <Typography variant="h4" sx={{ marginTop: theme.spacing(6) }}>
          Top Places To Visit
        </Typography>

        <Typography
          sx={{ marginTop: theme.spacing(2), marginLeft: "1rem" }}
          variant="body1"
          color={theme.palette.grey[600]}
        >
          <span
            style={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: "1.5rem",
            }}
          >
            The{" "}
          </span>
          much renowned Gilgit-Baltistan is often referred to as heaven on
          earth, enveloped in the grand Himalayas, Hindukush and the Karakoram
          mountain ranges, this place has been a great tourist attraction for
          many years. So what are you waiting for Book your ride Now and Avail
          Great Discounts on multiple Hotels, Restaurants and Businesses.
        </Typography>
        <Button
          sx={{
            marginTop: "3rem",
            width: "auto",
            textTransform: "none",
            boxShadow: themeShadows().primary,
            borderRadius: "34px !important",
          }}
          variant="outlined"
          size="large"
          endIcon={<ChevronRightIcon />}
        >
          <Typography
            fontWeight={700}
            variant="body2"
            color={theme.palette.primary.main}
          >
            Learn More
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NavbarCarousel;
