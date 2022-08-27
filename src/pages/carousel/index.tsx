import React, { ReactNode, useContext, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Astore from "../../assets/Images/astore.jpg";
import Chilas from "../../assets/Images/chilas.jpg";
import Phunder from "../../assets/Images/phunder.jpg";
import Sikardu from "../../assets/Images/sikardu.jpg";
import { opacityColors } from "../../theme/opacityColors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { themeShadows } from "../../theme/shadows";

const NavbarCarousel = () => {
  const theme = useTheme();
  const items = [
    {
      title: "Hunza",
      description: "locale.notGettingUsedToNew",
      buttonText: "locale.switchToPreviousVersion",
      image: Chilas,
    },
    {
      title: "Sikardu",
      description: "test",
      buttonText: "helpGuide",
      image: Phunder,
    },
    {
      title: "Astore",
      description: "test",
      buttonText: "helpGuide",
      image: Sikardu,
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
      mx="auto"
      textAlign="center"
      display="flex"
      padding="2rem"
      maxWidth={"80%"}
      justifyContent={"space-around"}
    >
      <Box width="40%" borderRadius={"2rem"} flex="1">
        <img
          src={item.image}
          alt="Alternative text goes here as usual"
          style={{
            width: "100%",
            height: "40vh",
            borderRadius: "2rem",
            boxShadow: themeShadows().warning,
          }}
        />
      </Box>
      <Box flex="1" marginLeft="1rem">
        <Typography variant="h6" sx={{ marginTop: theme.spacing(6) }}>
          {item.title}
        </Typography>
        <Typography
          sx={{ marginTop: theme.spacing(2) }}
          variant="body1"
          color={theme.palette.grey[600]}
        >
          Hunza was a princely state, bordering China to the north-east and
          Pamir to its north-west, which continued to survive until 1974, when
          it was finally dissolved by Zulfikar Ali Bhutto. The state bordered
          the Gilgit Agency to the south, the former princely state of Nagar to
          the east. The state capital was the town of Baltit (also known as
          Karimabad) and its old settlement is Ganish Village. Situated at an
          elevation of 2,438 meters, Hunza Valley's tourist season is from May
          to October. The temperature in May is maximum 27°C and minimum 14°C.
          The October temperatures are: maximum 10°C and minimum 0°C.
        </Typography>
        <Button
          sx={{
            marginTop: "3rem",
            width: "auto",
            textTransform: "none",
            boxShadow: themeShadows().primary,
          }}
          variant="text"
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
