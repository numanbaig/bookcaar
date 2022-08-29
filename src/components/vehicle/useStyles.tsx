import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  root: {
    width: "70%",
    margin: "auto",
    background: "#FFFFFF",
  },
  paper: {
    cursor:"pointer",
    height: "auto",
    background: "#FFFFFF",
    border:'1px solid rgba(145, 158, 171, 0.32)',
    borderRadius: "36px",
    padding: "10px !important",
    '&:hover':{
      border:'1px solid rgba(84, 214, 44, 0.24)',
      boxShadow:"0px 8px 16px rgba(0, 171, 85, 0.24)"
    }
  },
  img: {
    width: "80%",
    height:"150px",
    objectFit:"contain",
    margin: "auto",
  },
  heading: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: " 20px !important",
    lineHeight: " 27px !important",
    textAlign: "center",
    color: " #5E6282",
    margin: "10px 0px !important",
  },
  subheading: {
    fontFamily: "Poppins",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "26px !important",
    textAlign: "center !important",
    color: "#5E6282",
  },
}))
export default useStyles
