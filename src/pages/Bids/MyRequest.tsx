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
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import GoogleLocationInput from "../../components/googleLocation";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Formik } from "formik";
import * as yup from "yup";
import moment from "moment";
import { store } from "../../store";
import { requestRide } from "../../store/services/RequestRide";
import { PER_DAY } from "../../constants/bookingTypes";
import { styled } from "@mui/material/";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";

const SearchBar = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.background.default,
  padding: "1.5em",
  borderRadius: theme.shape.borderRadius,
  boxShadow: themeShadows().z12,
  margin: "0px auto",
  border: `1px solid ${opacityColors().borderColor}`,
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "12px",
}));

function Index(props: any) {
  const [bookingType, setBookingType] = React.useState("Per Day");
  const validationSchema = yup.object({
    pickUpLocation: yup.string().required("Pick up location is required"),
    dropOfLocation: yup.string().required("Drop off location is required"),
    bookingType: yup.string().required("Booking type is required"),
    vehicalType: yup.string().required("Vehical Type is required"),
    startDate: yup.string().required("Start date is required"),
    time: yup.string().required("time is required"),
    numberofdays:
      bookingType === PER_DAY
        ? yup
            .number()
            .required("Please sepacify number of days you want to stay")
        : yup.number(),
  });

  const initialValues = {
    pickUpLocation: props.myRequests?.pickUpLocation || "",
    dropOfLocation: props.myRequests?.dropOfLocation || "",
    dropOfCoordinates: props.myRequests?.dropOfCoordinates || "",
    pickUpCoordinates: props.myRequests?.pickUpCoordinates || "",
    bookingType: props.myRequests?.bookingType || "Per Day",
    vehicalType: props.myRequests?.vehicalType || "",
    startDate: props.myRequests?.startDate || new Date(),
    time: props.myRequests?.time || new Date(),
    numberofdays: props.myRequests?.numberofdays || "",
  };

  console.log("requests", props.myRequests);

  function HandleFormSubmit(values: any) {
    store.dispatch(requestRide(values));
  }

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SearchBar>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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
                          return <MenuItem value={veh}>{veh}</MenuItem>;
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
                      onChange={(e) =>
                        props.setFieldValue("time", moment(e).format("HH:mm"))
                      }
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
