import React from "react";
import Logo from "../../assets/bookcar.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  styled,
  Box,
  useTheme,
  Stack,
  Link,
  Typography,
  TextField,
  Button,
} from "@mui/material/";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { opacityColors } from "../../theme/opacityColors";

const InputWrapper = styled(Box)(({ theme }) => ({
  '& .MuiOutlinedInput-input':{
    border:"1px solid",
    color:"#fff",
    borderColor: theme.palette.primary.main,
  },

  "&:hover": {
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main,
  },
  "&::placeholder": {
    textOverflow: 'ellipsis !important',
    color: "#fff",
    borderColor: theme.palette.primary.main,
  },
}));
function index() {
  const theme = useTheme();
  return (
    <Box bgcolor={opacityColors().z2} mt={1}>
      <Box
        className="box-container"
        display="flex"
        justifyContent={"space-around"}
      >
        <div>
          <Box display="flex" py="1rem">
            <img src={Logo} alt="bookcAar" width="50px" height="50px" />{" "}
            <Typography
              variant="h6"
              className="logo"
              fontWeight={700}
              color={theme.palette.primary.contrastText}
            >
              BookCAar
            </Typography>
          </Box>
          <Box display="flex" p="1rem">
            <Typography
              variant="body1"
              className="logo"
              color={theme.palette.primary.contrastText}
            >
              BookCAar is Car booking application we provide you best transport
              services in Gilgit Baltistan
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ padding: "1rem" }}>
            <FacebookRoundedIcon color="primary" fontSize="large" />
            <TwitterIcon color="primary" fontSize="large" />
            <InstagramIcon color="primary" fontSize="large" />
            <LinkedInIcon color="primary" fontSize="large" />
          </Stack>
        </div>

        <div className="box" data-aos="fade-up" data-aos-delay="300">
          <Typography
            variant="h6"
            className="logo"
            fontWeight={700}
            color={theme.palette.primary.contrastText}
            p="1rem"
          >
            quick links
          </Typography>
          <Stack spacing={4}>
            {["district", "gallery", "reviews", "vehicle"].map((link, i) => {
              return (
                <Box
                  display="flex"
                  sx={{ cursor: "pointer" }}
                  alignItems={"center"}
                >
                  <ChevronRightIcon
                    sx={{ marginRight: ".3rem" }}
                    color="primary"
                  />
                  <Link
                    underline="none"
                    variant="body1"
                    className="logo"
                    color={theme.palette.primary.contrastText}
                    sx={{
                      marginLeft: "0rem",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        marginLeft: "1rem",
                      },
                    }}
                  >
                    {link}
                  </Link>
                </Box>
              );
            })}
          </Stack>
        </div>
        <div className="box" data-aos="fade-up" data-aos-delay="300">
          <Typography
            variant="h6"
            className="logo"
            fontWeight={700}
            color={theme.palette.primary.contrastText}
            py="1rem"
          >
            Customer Service
          </Typography>
          <Stack spacing={4}>
            {[
              "gilgit jutial",
              "+133-730-588",
              "pinetech@gmail.com",
              " 7:00am - 10:00pm",
            ].map((link, i) => {
              return (
                <Box
                  display="flex"
                  sx={{ cursor: "pointer" }}
                  alignItems={"center"}
                >
                  <Link
                    underline="none"
                    variant="body1"
                    className="logo"
                    color={theme.palette.primary.contrastText}
                    sx={{
                      transition: "3s ease-in-out",
                      marginLeft: "0rem",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {link}
                  </Link>
                </Box>
              );
            })}
          </Stack>
        </div>
        <Stack padding={"1rem"} spacing={2}>
          <Typography
            variant="h6"
            color={theme.palette.primary.contrastText}
            fontWeight={700}
          >
            newsletter
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.primary.contrastText}
          >
            subscribe for latest updates
          </Typography>
          <Stack padding={"1rem"} spacing={2} sx={{ display: "flex" }}>
            <InputWrapper>
            <TextField
              type="email"
              value={'ikhan.sharu977@gmail.com'}
              onChange={(e)=>{}}
            />
            </InputWrapper>
            <Button
              sx={{ borderRadius: "40px" }}
              variant="outlined"
              size="large"
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default index;
