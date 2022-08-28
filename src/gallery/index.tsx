import React from "react";
import "./gallery.css";
import { Typography, Box ,useTheme} from "@mui/material";
import image1 from "../assets/Images/g1.jpg";
import image2 from "../assets/Images/g2.jpg";
import image3 from "../assets/Images/g3.jpg";
import image4 from "../assets/Images/g4.jpg";
import image5 from "../assets/Images/g5.jpg";
import image6 from "../assets/Images/g6.png";
import image7 from "../assets/Images/g7.jpg";
import image8 from "../assets/Images/g8.jpg";
import image9 from "../assets/Images/g9.jpg";
import { opacityColors } from "../theme/opacityColors";
import { themeShadows } from "../theme/shadows";
import PlaceIcon from "@mui/icons-material/Place";

export default function Index() {
  const theme=useTheme()
  return (
    <Box
      className="gallery"
      id="gallery"
      maxWidth={"90%"}
      mx="auto"
      px="1.5rem"
      bgcolor={theme.palette.primary.contrastText}
      textAlign={"center"}
    >
      <div className="heading">
        <Typography color="primary">Our gallery</Typography>
        <Typography variant="h3" sx={{marginBottom:"1rem"}}>We record memories</Typography>
      </div>

      <div className="box-container">
        {[image1,image2,image3,image4,image5,image6,image7,image8,image9].map((image,i)=>{
          return(
            <div className="box" key={i}>
            <img
              src={image}
              alt=""
              style={{ boxShadow: themeShadows().error }}
            />
            <Box display={"flex"}>
              <PlaceIcon color="primary" />
              <Typography variant="subtitle1">Location</Typography>
            </Box>
          </div>
  
          )
        })}
      </div>
    </Box>
  );
}
