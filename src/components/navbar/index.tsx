import {
  Box,
  Container,
  MenuItem,
  Typography,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import { LayoutContainer, MoreMenu, Welcome } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/bookcar.png";

const Navbar = () => {
  const theme = useTheme();
  const history = useHistory();
  const pages = [
    { page: "Vehicles", id: 1 },
    { page: "Top Places", id: 1 },
    { page: "Reviews", id: 1 },
    { page: "Gallery", id: 1 },
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
          {/* {pages.map((page: any, index: number) => {
            return (
              <Box key={index}>
                <Link
                href={`#${page.page}`}
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
                </Link>
              </Box>
            );
          })} */}
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
