import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import * as SC from "./Message.styled";

interface IProps {
  message: string;
  timeStamp: string;
  photoURL: string;
  displayName: string;
}

export const MessageLeft = ({
  message,
  timeStamp,
  photoURL,
  displayName,
}: IProps) => {
  return (
    <>
      <SC.messageRow>
        <Avatar alt={displayName} src={photoURL}></Avatar>
        <Box width="100%">
          <SC.displayName>{displayName}</SC.displayName>
          <SC.BlueMessageBg>
            <div>
              <SC.messageContent>{message}</SC.messageContent>
            </div>
            <SC.messageTimeStamp>{timeStamp}</SC.messageTimeStamp>
          </SC.BlueMessageBg>
        </Box>
      </SC.messageRow>
    </>
  );
};
interface IMessageProps {
  message: string;
  timeStamp: string;
}

export const MessageRight = ({ message, timeStamp }: IMessageProps) => {
  return (
    <SC.messageRowRight>
      <SC.messageOrangeBg>
        <SC.messageContent>{message}</SC.messageContent>
        <SC.messageTimeStamp>{timeStamp}</SC.messageTimeStamp>
      </SC.messageOrangeBg>
    </SC.messageRowRight>
  );
};
