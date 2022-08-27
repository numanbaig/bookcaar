import { styled } from "@mui/system";
import { opacityColors } from "../../theme/opacityColors";
import { themeShadows } from "../../theme/shadows";

export const LayoutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.5rem 20px",
  color: theme.palette.white,
  background: opacityColors().z1,
  boxShadow: themeShadows().primary,
  height: "30px",
  width: "100%",
  position: "fixed",
  "&:hover": {
    background: themeShadows().z28,
  },
}));

export const MoreMenu = styled("div")(({ theme }) => ({
  cursor: "pointer",
  "& > span": {
    fontWeight: "bold",
  },
}));

export const Welcome = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "14px",
  lineHeight: "16px",
  color: "#fff",
  "& span": {
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "11px",
    paddingTop: "3px",
  },
}));

export const Logo = styled("div")(({ theme }) => ({
  width: "65px",
  height: "60px",
  borderRadius: "50%",
  background: theme.palette.white,
  display: "flex",
  alignItems: "center",

  "& > img": {
    width: "60px",
    margin: "auto",
  },
  "& > div": {
    width: "100px",
    margin: "auto",
  },
}));
