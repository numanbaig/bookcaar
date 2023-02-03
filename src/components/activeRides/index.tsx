import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Typography, Box, Paper } from "@mui/material/";

import { db } from "../../Firebase/FirebaseConfig";
import commingSoonPic from "../../assets/Images/csoon.jpg"

export default function SimpleAccordion(props: any) {


 

  return (
    <Box display="flex" justifyContent="center" alignItems={"center"}>
    <img src={commingSoonPic} alt="comming soon" />
    </Box>
  );
}
