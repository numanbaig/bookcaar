import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box, Paper } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DriverBids from "./DriverBids";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";
import moment from "moment";
const Header = ({
  id,
  pickupLocation,
  time,
  dropOfLocation,
  tripType,
  startDate,
}: any) => {
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
          {tripType}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Pickup Location:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {pickupLocation.label}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Drop off Location:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {dropOfLocation.label}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Date:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {moment(startDate).format("DD-MMMM-YYYY")}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Time:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {time}
        </Typography>
      </Box>
    </Paper>
  );
};
export default function SimpleAccordion({
  id,
  pickupLocation,
  time,
  dropOfLocation,
  tripType,
  startDate,
  getRequestid,
}: any) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Header
          id={id}
          pickupLocation={pickupLocation}
          time={time}
          dropOfLocation={dropOfLocation}
          tripType={tripType}
          startDate={startDate}
          onClick={() => getRequestid(id)}
        />
      </AccordionSummary>
      <AccordionDetails>
        <DriverBids />
      </AccordionDetails>
    </Accordion>
  );
}
