import React, { useState } from "react";
import Bid from "./Bid";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { opacityColors } from "../../theme/opacityColors";
import {
  Typography,
  Slider,
  Divider,
  AccordionSummary,
  Box,
  Accordion,
  AccordionDetails,
  FormControlLabel,
  Radio,
  useTheme,
} from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

const BidsList = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Box sx={{ display: "flex" }} maxWidth="90%" margin="1rem auto">
      <Box
      mt="1rem"
        sx={{
          border: `1px solid ${opacityColors().borderColor}`,
          width: "25%",
          height:"30%",
        }}
      >
        <Accordion disableGutters defaultExpanded>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography color="primary" variant='subtitle1'>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">Rs:152- RS:155</Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </AccordionDetails>
        </Accordion>
        <Divider variant="middle" />
        <Accordion disableGutters defaultExpanded>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography color="primary" variant='subtitle1'>Passenger</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">152-155</Typography>
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        {[
          {
            name: "NOMAN",
            pickupLocation: "Gilgit",
            time: new Date().toDateString(),
            image:
              'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"',
            status: "Active",
            tripType: "short-rental",
          },
          {
            name: "NOMAN",
            pickupLocation: "Gilgit",
            time: new Date().toDateString(),
            image:
              'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"',
            status: "Active",
            tripType: "short-rental",
          },
          {
            name: "NOMAN",
            pickupLocation: "Gilgit",
            time: new Date().toDateString(),
            image:
              'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"',
            status: "Active",
            tripType: "short-rental",
          },
        ].map((item) => (
          <Box>
            <Bid
              name={item.name}
              pickupLocation={item.pickupLocation}
              time={item.time}
              status={item.status}
              image={item.image}
              tripType={"short-rental"}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BidsList;
