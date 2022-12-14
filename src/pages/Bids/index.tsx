import { useEffect } from "react";
import Bid from "../../components/userBids";
import { Typography, Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { requestRide } from "../../store/services/RequestRide";

import useGetRequestedRideList from "../../store/hooks/useGetRequestedRideList";

const BidsList = () => {
  const myRequests = useSelector((state: any) => state.bookRide.myRequests);
  const user = useSelector((state: any) => state.user.user);
  const { rideRequest, getRequestList, isLoading } = useGetRequestedRideList();

  useEffect(() => {
    if (user) {
      getRequestList(user);
    }
    if (myRequests.length > 0) {
      store.dispatch(requestRide(myRequests[0]));
    }
  }, [myRequests, user]);

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} margin="0rem auto">
      <Box mt="5rem" width="70%">
        <Box pt={4} margin={"auto"}>
          <Typography variant="h5" pl={2} fontWeight={700}>
            My Ride Requests
          </Typography>
          <Box display="flex" alignItems={"center"} mt="1rem"></Box>
        </Box>

        {rideRequest.map((item: any, index) => {
          const status =
            item.completed === true && item.hiredRiderId
              ? "Completed"
              : item.completed !== true && item.hiredRiderId
              ? "Active"
              : "pending";
          return (
            <Box>
              <Bid
                key={index}
                tripType={item.bookingType}
                pickupLocation={item?.pickUpLocation?.label}
                dropOffLocation={item?.dropOfLocation?.label}
                time={item.time}
                date={item?.startDate}
                status={status}
                docId={item.docId}
                completed={item.completed}
                hiredRiderId={item.hiredRiderId}
                // image={item.image}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BidsList;
