import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  MenuItem,
  Typography,
  Button,
  Link,
  useTheme,
  IconButton,
} from "@mui/material";
import { LayoutContainer, MoreMenu, Welcome } from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOutUser } from "../../store/services/Auth";
import { IUser } from "../../store/Interfaces/user";
import Logo from "../../assets/bookcar.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { store } from "../../store";

const Navbar = () => {
  const theme = useTheme();
  const history = useHistory();
  const user = useSelector((state: any) => state.user.user as IUser);
  const pages = [
    { page: "Vehicles", id: 7 },
    { page: "Top Places", id: 5 },
    { page: "Reviews", id: 6 },
    { page: "Gallery", id: 3 },
  ];

  return (
    <Container maxWidth={false} disableGutters>
      <LayoutContainer>
        <div onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
          <img src={Logo} alt="logo" width="90px" height="auto" />
        </div>

        <Box display={"flex"} gap={5}>
          {pages.map((page: any, index: number) => {
            return (
              <Box key={index}>
                <Link
                  href={`#${page.page}`}
                  textAlign="center"
                  sx={{
                    color: "#fff",
                  }}
                >
                  {page.page}
                </Link>
              </Box>
            );
          })}
          <Link
            href={"/bids"}
            textAlign="center"
            sx={{
              color: "#fff",
            }}
          >
            My Bids
          </Link>
          <Link
            href={"/activerides "}
            textAlign="center"
            sx={{
              color: "#fff",
            }}
          >
            Active Rides
          </Link>
        </Box>

        <Box>
          {!user ? (
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
          ) : (
            <IconButton
              onClick={() => {
                store.dispatch(signOutUser());
                location.reload();
              }}
            >
              <Box display="flex" alignItems={"center"}>
                <Typography
                  variant="h6"
                  color="#fff"
                  sx={{ marginRight: ".5rem" }}
                >
                  {" "}
                  Logout
                </Typography>
                <LogoutIcon color="primary" />
              </Box>
            </IconButton>
          )}
        </Box>
      </LayoutContainer>
    </Container>
  );
};

export default Navbar;
