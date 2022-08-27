import { Box, Container, MenuItem, Typography } from "@mui/material";
import { LayoutContainer, MoreMenu, Welcome } from "./styles";

const Navbar = () => {
  const pages = [
    { page: "Home", id: 1 },
    { page: "Events", id: 1 },
    { page: "About us", id: 1 },
    { page: "Contact us", id: 1 },
  ];
  return (
    <Container maxWidth={false} disableGutters>
      <LayoutContainer>
        {/* <Logo>
              <img src={AppLogo} alt="logo" />
            </Logo> */}
        <Welcome>BooKCaaR</Welcome>
        <Box display={"flex"} gap={5}>
          {pages.map((page: any, index: number) => {
            return (
              <MenuItem key={index}>
                <Typography textAlign="center" sx={{ color: "#fff" }}>
                  {page.page}
                </Typography>
              </MenuItem>
            );
          })}
        </Box>
      </LayoutContainer>
    </Container>
  );
};

export default Navbar;