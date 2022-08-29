import React, { useState, useEffect } from "react";
import Bid from "../../components/userBids";
import { Typography, Box } from "@mui/material";
import SearchBox from "./MyRequest";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { requestRide } from "../../store/services/RequestRide";

const BidsList = () => {
  const [requests, setRequests] = useState([]);
  const myRequests = useSelector((state: any) => state.bookRide.myRequests);
  useEffect(() => {
    if (myRequests.length > 0) {
      store.dispatch(requestRide(myRequests[0]));
    }
  }, []);
  useEffect(() => {
    if (myRequests.length > 0) {
      setRequests(myRequests);
    }
  }, [myRequests]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} margin="0rem auto">
      <Box mt="5rem">
        <Box>
          <Typography py={2} variant="h5" color="primary" fontWeight={700}>
            My Request
          </Typography>
          <SearchBox myRequests={requests[0]} />
        </Box>

        <Box pt={4} margin={"auto"}>
          <Typography variant="h5" color="primary" fontWeight={700}>
            Bids by drivers
          </Typography>
        </Box>
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
        ].map((item, index) => (
          <Box>
            <Bid
              key={index}
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
