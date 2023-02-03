import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
} from "@mui/material/";
import { ErrorBox, SearchBar } from "./searchbarStyled";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import GoogleLocationInput from "../../components/googleLocation";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Formik } from "formik";
import * as yup from "yup";
import moment from "moment";

import { store } from "../../store";
import { PER_DAY } from "../../constants/bookingTypes";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestRide } from "../../store/services/RequestRide";
import { IUser } from "../../store/Interfaces/user";
import storeRequest from "../../store/slices/RequestRideSlice";

function Index() {
  const user = useSelector((state: any) => state.user.user as IUser);
  const [bookingType, setBookingType] = React.useState("Per Day");
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    pickUpLocation: yup.object().shape({
      label: yup.string().required("Pick up location is required"),
      value: yup.string().required(),
    }),
    dropOfLocation: yup.object().shape({
      label: yup.string().required("Drop off location is required"),
      value: yup.string().required(),
    }),
    bookingType: yup.string().required("Booking type is required"),
    vehicalType: yup.string().required("Vehical Type is required"),
    startDate: yup.string().required("Start date is required"),
    time: yup.string().required("time is required"),
  });

  const secondValidation = yup.object({
    pickUpLocation: yup.object().shape({
      label: yup.string().required("Pick up location is required"),
      value: yup.string().required(),
    }),
    dropOfLocation: yup.object().shape({
      label: yup.string().required("Drop off location is required"),
      value: yup.string().required(),
    }),
    bookingType: yup.string().required("Booking type is required"),
    vehicalType: yup.string().required("Vehical Type is required"),
    startDate: yup.string().required("Start date is required"),
    time: yup.string().required("time is required"),
    numberofdays: yup
      .number()
      .required("Please sepacify number of days you want to stay"),
  });

  const validation =
    bookingType === PER_DAY ? secondValidation : validationSchema;

  const initialValues = {
    pickUpLocation: "",
    dropOfLocation: "",
    dropOfCoordinates: "",
    pickUpCoordinates: "",
    bookingType: "Per Day",
    vehicalType: "",
    startDate: new Date(),
    time: new Date(),
    numberofdays: "",
  };

  function HandleFormSubmit(values: any) {
    values.time = moment(values.time).format("HH:mm");
    if (user) {
      store.dispatch(
        requestRide({
          ...values,
          hiredRiderId: "",
          completed: false,
          requestedUser: {
            displayName: user.displayName,
            userId: user.id,
            email: user.email,
            phoneNumber: user.phoneNumber,
            bidedDrivers: [],
          },
        })
      );
      history.push("/bids");
    } else {
      history.push("/login");
    }
  }

  return (
    <Box position={"relative"} top={"-20vh"}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SearchBar>
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={HandleFormSubmit}
          >
            {(props: any) => (
              <form onSubmit={props.handleSubmit}>
                <Grid container spacing={2} sx={{ placeContent: "center" }}>
                  <Grid item md={3}>
                    <Box>
                      <Box color="black">Please select your booking type</Box>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={(e) => {
                            props.setFieldValue("bookingType", e.target.value);
                            setBookingType(e.target.value);
                          }}
                          value={props.values.bookingType}
                        >
                          {["Per Day", "Short Rental"].map((label, i) => {
                            return (
                              <FormControlLabel
                                value={label}
                                control={<Radio />}
                                key={i}
                                label={
                                  <Typography
                                    variant="body2"
                                    color={
                                      bookingType == label ? "primary" : "#333"
                                    }
                                  >
                                    {label}
                                  </Typography>
                                }
                              />
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <GoogleLocationInput
                      helperText={
                        props.touched.pickUpLocation &&
                        props.errors.pickUpLocation
                      }
                      onBlur={props.onBlur}
                      label={"Pick up location"}
                      error={Boolean(
                        props.touched.pickUpLocation &&
                          props.errors.pickUpLocation
                      )}
                      required={true}
                      setCoordinates={(coordinate: string) =>
                        props.setFieldValue("pickUpCoordinates", coordinate)
                      }
                      coordinates={props.values.pickUpCoordinates}
                      address={props.values.pickUpLocation}
                      setAddress={(address: string) =>
                        props.setFieldValue("pickUpLocation", address)
                      }
                    />
                  </Grid>
                  <Grid item md={4}>
                    <GoogleLocationInput
                      helperText={
                        props.touched.dropOfLocation &&
                        props.errors.dropOfLocation
                      }
                      onBlur={props.onBlur}
                      label={"Drop off location "}
                      error={Boolean(
                        props.touched.dropOfLocation &&
                          props.errors.dropOfLocation
                      )}
                      setCoordinates={(coordinate: string) =>
                        props.setFieldValue("dropOfCoordinates", coordinate)
                      }
                      coordinates={props.values.dropOfCoordinates}
                      address={props.values.dropOfLocation}
                      setAddress={(address: string) =>
                        props.setFieldValue("dropOfLocation", address)
                      }
                    />
                  </Grid>
                </Grid>
                <Box
                  display={"flex"}
                  gap={2}
                  pt={2}
                  flexWrap={"wrap"}
                  sx={{ placeContent: "center" }}
                >
                  {bookingType === PER_DAY && (
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Number of days want to stay"
                        variant="outlined"
                        type={"number"}
                        name="numberofdays"
                        onChange={props.handleChange}
                        error={
                          props.touched.numberofdays &&
                          props.errors.numberofdays
                        }
                        helperText={
                          props.touched.numberofdays &&
                          props.errors.numberofdays
                        }
                      />
                    </Box>
                  )}
                  <Box>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Vehicle
                      </InputLabel>
                      <Select
                        sx={{ minWidth: "15rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.values.vehicalType}
                        label="Vehicle"
                        name={"vehicalType"}
                        onChange={(e) =>
                          props.setFieldValue("vehicalType", e.target.value)
                        }
                      >
                        {[
                          "ECONOMY",
                          "ECONOMY PLUS +",
                          "EXECUTIVE",
                          "SUV (4x4)",
                        ].map((veh, i) => {
                          return (
                            <MenuItem key={i} value={veh}>
                              {veh}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {props.touched.vehicalType &&
                        props.errors.vehicalType && (
                          <ErrorBox>please select a vehical type</ErrorBox>
                        )}
                    </FormControl>
                  </Box>

                  <Box>
                    <DesktopDatePicker
                      label="From Date"
                      inputFormat="MM/DD/YYYY"
                      value={props.values.startDate}
                      minDate={new Date()}
                      onChange={(e) =>
                        props.setFieldValue(
                          "startDate",
                          moment(e).format("YYYY/MM/DD")
                        )
                      }
                      renderInput={(params) => <TextField {...params} />}
                    />
                    {props.errors.startDate && (
                      <ErrorBox>please select your trip start date</ErrorBox>
                    )}
                  </Box>
                  <Box>
                    <TimePicker
                      label="Time"
                      value={props.values.time}
                      onChange={(e) => props.setFieldValue("time", e)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    {props.errors.time && (
                      <ErrorBox>please select your trip start time</ErrorBox>
                    )}
                  </Box>
                </Box>

                <Box maxWidth="25%" mt="1rem" mx="auto">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      height: "3rem",
                      fontWeight: 700,
                    }}
                    type={"submit"}
                    fullWidth
                    disabled={!props.dirty}
                  >
                    <Typography variant="h6">Find a car</Typography>
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </SearchBar>
      </LocalizationProvider>
    </Box>
  );
}
export default Index;
