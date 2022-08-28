import {
  Box,
  Container,
  MenuItem,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { LayoutContainer, MoreMenu, Welcome } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/bookcar.png";

const Navbar = () => {
  const theme = useTheme();
  const history = useHistory();
  const pages = [
    { page: "Home", id: 1 },
    { page: "Events", id: 1 },
    { page: "About us", id: 1 },
    { page: "Contact us", id: 1 },
  ];
  return (
    <Container maxWidth={false} disableGutters>
      <LayoutContainer>
        <Box>
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src={Logo}
            alt="logo"
            width="50px"
            height="50px"
          />
        </Box>

        <Box display={"flex"} gap={5}>
          {pages.map((page: any, index: number) => {
            return (
              <MenuItem key={index}>
                <Typography
                  textAlign="center"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  variant="body1"
                >
                  {page.page}
                </Typography>
              </MenuItem>
            );
          })}
        </Box>
        <Box>
          <Button
            data-aos="fade-left"
            size="large"
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: theme.palette.primary.contrastText,
              borderRadius: "34px",
              marginRight: "1rem",
            }}
            onClick={() => history.push("login")}
          >
            Login
          </Button>
          <Button
            data-aos="fade-left"
            size="large"
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: theme.palette.primary.contrastText,
              borderRadius: "34px",
            }}
            onClick={() => history.push("signUp")}
          >
            Sign Up
          </Button>
        </Box>
      </LayoutContainer>
    </Container>
  );
};

export default Navbar;
