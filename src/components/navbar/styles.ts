import { styled } from "@mui/system";

export const LayoutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  color: theme.palette.white,
  background: theme.palette.gradient,
  height: "30px",
  width: "100%",
  backgroundColor: "transparent",
  position: "fixed",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
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
