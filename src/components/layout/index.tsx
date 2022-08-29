import { Box, Container } from "@mui/material";
import Navbar from "../navbar";
import Footer from '../footer/index'

type IProps = {
  children: React.ReactNode;
};

const Layout = (props: any) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box>
        <Navbar />
        <Box>{props.children}</Box>
        <Footer/> 
      </Box>
    </Container>
  );
};

export default Layout;
