import React from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import * as SC from "./ChatInput.styled";

const TextInput = () => {
  return (
    <SC.formWrapper noValidate autoComplete="off">
      <SC.textWrapper id="standard-text" label="test" />
      <Button variant="contained" color="primary">
        <SendIcon />
      </Button>
    </SC.formWrapper>
  );
};

export default TextInput;
