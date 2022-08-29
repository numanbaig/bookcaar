import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextInput from "./Components/ChatInput";
import { MessageLeft, MessageRight } from "./Components/Message";
import commingSoonPic from "../../assets/Images/csoon.jpg";

export default function index() {
  return (
    <Box display="flex" justifyContent="center" alignItems={"center"}>
      <img src={commingSoonPic} alt="comming soon" />
      {/* <Paper
        sx={{
          width: "80vw",
          height: "80vh",
          maxWidth: "500px",
          maxHeight: "700px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
        elevation={2}
      >
        <Paper
          id="style-1"
          sx={{
            width: "calc( 100% - 20px )",
            margin: 10,
            overflowY: "scroll",
            height: "calc( 100% - 80px )",
          }}
        >
          {Array(5)
            .fill("")
            .map(() => {
              return (
                <>
                  <MessageLeft
                    message="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o"
                    timeStamp="MM/DD 00:00"
                    photoURL=""
                    displayName="Shan"
                  />
                  <MessageRight
                    message="scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
                    timeStamp="MM/DD 00:00"
                    // displayName="まさりぶ"
                  />
                </>
              );
            })}
        </Paper>
        <TextInput />
      </Paper> */}
    </Box>
  );
}
