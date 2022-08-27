import { styled } from "@mui/system";

export const BlueMessageBg = styled('div')({
  position: "relative",
  marginLeft: "20px",
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#A8DDFD",
  width: "60%",
  //height: "50px",
  textAlign: "left",
  font: "400 .9em 'Open Sans', sans-serif",
  border: "1px solid #97C6E3",
  borderRadius: "10px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "15px solid #A8DDFD",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    top: "0",
    left: "-15px",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "17px solid #97C6E3",
    borderLeft: "16px solid transparent",
    borderRight: "16px solid transparent",
    top: "-1px",
    left: "-17px",
  },
});

export const messageOrangeBg = styled('div')({
    position: "relative",
    marginRight: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f8e896",
    width: "60%",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #dfd087",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px"
    }
})

export const messageTimeStamp = styled('div')({
    position: "absolute",
    fontSize: ".85em",
    fontWeight: "300",
    marginTop: "10px",
    bottom: "5px",
    right: "5px"
})


export const messageRow = styled('div')({
    display: "flex",
    width:"100%"
})
export const messageRowRight = styled('div')({
    display: "flex",
    justifyContent: "flex-end"
})

export const displayName = styled('div')({
    marginLeft: "20px",
});

export const messageContent = styled('p')({
    margin: 0,
    paddingBottom:"20px"
})

