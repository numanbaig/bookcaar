import { Box, Container } from "@mui/material";
import Navbar from "../navbar";

type IProps = {
  children: React.ReactNode;
};

const Layout = (props: any) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box>
        <Navbar />
        <Box>{props.children}</Box>
      </Box>
    </Container>
  );
};

export default Layout;
