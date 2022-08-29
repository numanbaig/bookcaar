import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box, Paper } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DriverBids from "./DriverBids";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";
const Header = () => {
  return (
    <Paper
      sx={{
        padding: "1rem 1rem",
        boxShadow: themeShadows().primary,
        border: `1px solid ${opacityColors().borderColor}`,
        width: "100%",
      }}
    >
      <Box display="flex">
        <Typography variant="subtitle1">Booking Type:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          Pending
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Pickup Location:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          Location
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Drop off Location:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          Location
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Date:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          10-12-2022
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Time:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          07:13 PM
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Booking Type:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          Pending
        </Typography>
      </Box>
    </Paper>
  );
};
export default function SimpleAccordion() {
  return (
    <div style={{ paddingTop: "7rem" }}>
      <Typography sx={{ padding: "1rem" }} variant="h4">
        User Name your Requests
      </Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Header />
        </AccordionSummary>
        <AccordionDetails>
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
          ].map((item, i) => {
            return (
              <DriverBids
                name={item.name}
                pickupLocation={item.pickupLocation}
                time={item.time}
                image={item.image}
                status={item.status}
                tripType={item.tripType}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
