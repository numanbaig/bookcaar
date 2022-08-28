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
} from "@mui/material/";
import { SearchBar } from "./searchbarStyled";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function Index() {
  const [value, setValue] = useState("2014-08-18T21:11:54");
  const [vehicle, setVehicle] = useState("2014-08-18T21:11:54");
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleVehicle = (event: SelectChangeEvent) => {
    setVehicle(event.target.value as string);
  };

  const [rideTime, setRideTime] = React.useState("Per Day");

  const handelTraveltime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRideTime((event.target as HTMLInputElement).value);
  };
  return (
    <Box position={"relative"} top={"-18vh"}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SearchBar>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <TextField
              id="outlined-basic"
              label="Enter Pick Up Location"
              variant="outlined"
            />

            <DesktopDatePicker
              label="From Date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
              <Select
                sx={{ minWidth: "15rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vehicle}
                label="Vehicle"
                onChange={handleVehicle}
              >
                {["ECONOMY", "ECONOMY PLUS +", "EXECUTIVE", "SUV (4x4)"].map(
                  (veh, i) => {
                    return <MenuItem value={veh}>{veh}</MenuItem>;
                  }
                )}
              </Select>
            </FormControl>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handelTraveltime}
                value={rideTime}
              >
                {["Per Day", "Short Interval"].map((label, i) => {
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
          </Stack>
          <Box maxWidth="25%" mt="1rem" mx="auto">
            <Button
              variant="contained"
              sx={{ textTransform: "none", height: "3rem", fontWeight: 700 }}
              fullWidth
            >
              <Typography variant="h6">Search</Typography>
            </Button>
          </Box>
        </SearchBar>
      </LocalizationProvider>
    </Box>
  );
}
export default Index;
