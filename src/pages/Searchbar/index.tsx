import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Divider,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Typography,
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
} from "@mui/material/";
import { SearchBar } from "./searchbarStyled";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import GoogleLocationInput from "../../components/googleLocation";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Formik } from "formik";
import * as yup from "yup";
import moment from "moment";
import { useSelector } from "react-redux";

import { store } from "../../store";
import { requestRide } from "../../store/services/RequestRide";
import { IUser } from "../../store/Interfaces/user";

function Index() {
  const user = useSelector((state) => state.user.user as IUser);

  const [value, setValue] = useState("2014-08-18T21:11:54");
  const [vehicle, setVehicle] = useState("2014-08-18T21:11:54");
  const [coordinates, setCoordinates] = useState("");
  const [address, setAddress] = useState("");
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const validationSchema = yup.object({
    pickUpLocation: yup.string().required("Pick up location is required"),
    dropOfLocation: yup.string().required("Drop off location is required"),
    bookingType: yup.string().required("Booking type is required"),
    vehicalType: yup.string().required("Vehical Type is required"),
    startDate: yup.string().required("Start date is required"),
    time: yup.string().required("time is required"),
  });

  const initialValues = {
    pickUpLocation: "",
    dropOfLocation: "",
    dropOfCoordinates: "",
    pickUpCoordinates: "",
    bookingType: "Per Day",
    vehicalType: "",
    startDate: new Date(),
    time: new Date(),
  };

  const handleVehicle = (event: SelectChangeEvent) => {
    setVehicle(event.target.value as string);
  };

  const [rideTime, setRideTime] = React.useState("Per Day");

  function HandleFormSubmit(values: any) {
    store.dispatch(
      requestRide({
        ...values,
        requestedUser: {
          displayName: user.displayName,
          userId: user.id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          bidedDrivers:[],
        },
      })
    );
  }

  const handelTraveltime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRideTime((event.target as HTMLInputElement).value);
  };
  return (
    <Box position={"relative"} top={"-18vh"}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SearchBar>
          <Formik initialValues={initialValues} onSubmit={HandleFormSubmit}>
            {(props: any) => (
              <form onSubmit={props.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <GoogleLocationInput
                      helperText={
                        props.touched.pickUpCoordinates &&
                        props.errors.pickUpCoordinates
                      }
                      onBlur={props.onBlur}
                      label={"Pick up location"}
                      error={Boolean(props.errors.pickUpCoordinates)}
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
                  <Grid item md={6}>
                    <GoogleLocationInput
                      helperText={
                        props.touched.dropOfLocation &&
                        props.errors.dropOfLocation
                      }
                      onBlur={props.onBlur}
                      label={"Drop off location "}
                      error={Boolean(props.errors.dropOfLocation)}
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
                <Box display={"flex"} gap={2} pt={2} flexWrap={"wrap"}>
                  <Box>
                    <Box color="black">Please select your booking type</Box>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          props.setFieldValue("bookingType", e.target.value);
                          setRideTime(e.target.value);
                        }}
                        value={props.values.bookingType}
                      >
                        {["Per Day", "Short Rental"].map((label, i) => {
                          return (
                            <FormControlLabel
                              value={label}
                              control={<Radio />}
                              label={
                                <Typography
                                  variant="body2"
                                  color={rideTime == label ? "primary" : "#333"}
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
                  {rideTime === "Per Day" && (
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Number of days want to stay"
                        variant="outlined"
                        type={"number"}
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
