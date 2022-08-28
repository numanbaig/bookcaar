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
      display='flex'
      padding="2rem"
      flexWrap={'wrap'}
      maxWidth={"80%"}
      textAlign="left"
      justifyContent={"space-around"}
    >
        <img
          src={item.image}
          alt="Alternative text goes here as usual"
          style={{
            width: "50%",
            height: "40vh",
            borderRadius: "2rem",
            border:"1px solid",
            borderColor:opacityColors().primary,
            boxShadow: themeShadows().primary,
          }}
        />
      <Box flex="1" marginLeft="1rem" my='auto'>
        <Typography variant="h4" sx={{ marginTop: theme.spacing(6) }}>
          {item.title}
        </Typography>
        <Typography
          sx={{ marginTop: theme.spacing(2),marginLeft:"1rem" }}
          variant="body1"
          color={theme.palette.grey[600]}
        >
          Hunza was a princely state, bordering China to the north-east and
          Pamir to its north-west, which continued to survive until 1974, when
          it was finally dissolved by Zulfikar Ali Bhutto. The state borderedum 10°C and minimum 0°C.
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
          size='large'
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
