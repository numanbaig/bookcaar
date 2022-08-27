import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const formWrapper = styled('form')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "95%",
  margin: `${theme.spacing(0)} auto`,
}));

export const textWrapper = styled(TextField)({
    width: "100%", 

})