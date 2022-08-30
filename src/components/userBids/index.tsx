import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import { collection, onSnapshot } from "firebase/firestore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box, Paper } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DriverBids from "./DriverBids";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";
import moment from "moment";
import { db } from "../../Firebase/FirebaseConfig";

const Header = (prop: any) => {
  const props = prop?.props;
  return (
    <Box
      sx={{
        padding: "0rem 1rem",
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
          {props.tripType}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">PickUp Location:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {props.pickupLocation}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Drop off Location:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {props.dropOffLocation}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Date:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {moment(props?.date).format("DD-MM-YYYY")}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Time:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color="primary"
        >
          {props?.time}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="subtitle1">Ride Status:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", fontWeight: 700 }}
          color={props.status !== "pending" ? "primary" : "darkgrey"}
        >
          {props.status}
        </Typography>
      </Box>
    </Box>
  );
};
export default function SimpleAccordion(props: any) {
  const [Bids, setBids] = useState([]);
  const getRequestedRideBid = async () => {
    const requestRideBidsQuery = collection(
      db,
      "car-request",
      props.docId,
      "bids"
    );
    try {
      await onSnapshot(requestRideBidsQuery, (querySnapshot) => {
        const requestRideBids: any[] = [];
        querySnapshot.forEach((doc) => {
          requestRideBids.push({ docId: doc.id, ...doc.data() });
        });
        setBids(requestRideBids);
      });
    } catch (err) {
      console.error(err, "requestRideBidsQuery [err !]");
    }
  };

  useEffect(() => {
    getRequestedRideBid();
  }, []);

  return (
    <div
      style={{
        borderRadius: "1rem",
        margin: "2rem 0",
        boxShadow: themeShadows().z16,
        border: `1px solid ${opacityColors().lightHover}`,
      }}
    >
      <Accordion
        defaultExpanded={false}
        sx={{ borderRadius: "1rem", boxShadow: themeShadows().error }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Header props={props} />
        </AccordionSummary>
        <AccordionDetails>
          {Bids.length ? (
            Bids?.map((item: any, i) => {
              return (
                <DriverBids
                  docId={props.docId}
                  hiredRiderId={props.hiredRiderId}
                  biderId={item.docId}
                  amount={item.amount}
                  carName={item.vehicalName}
                  pickupLocation={item.pickupLocation}
                  time={item.time}
                  image={item.carImages}
                  seats={item.seats}
                  status={item.status}
                  phoneNumber={item.phoneNumber}
                  tripType={item.tripType}
                  baggage={item.baggage}
                  completed={props.completed}
                />
              );
            })
          ) : (
            <Typography textAlign={"center"}>Not yet Bided</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
