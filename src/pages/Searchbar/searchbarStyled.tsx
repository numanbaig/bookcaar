import { Box, styled } from "@mui/material/";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";

export const SearchBar = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.background.default,
  padding: "1.5em",
  maxWidth: "80%",
  position: "relative",
  zIndex: "999",
  borderRadius: theme.shape.borderRadius,
  boxShadow: themeShadows().z12,
  margin: "0px auto",
}));

export const ErrorBox = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "12px",
}));
