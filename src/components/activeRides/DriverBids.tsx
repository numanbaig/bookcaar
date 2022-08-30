import {
  Box,
  Typography,
  Card,
  AccordionSummary,
  Paper,
  Accordion,
  AccordionDetails,
  FormControlLabel,
  Radio,
  useTheme,
} from "@mui/material";
import Button from "../../components/Button";
import Divider from "@mui/material/Divider";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WorkIcon from "@mui/icons-material/Work";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";
import { useSelector } from "react-redux";
export interface BidProps {
  name: string;
  pickupLocation: string;
  time: string;
  image: string;
  status: string;
  tripType: any;
  amount: string;
  seats: string;
  phoneNumber: string;
  baggage: string;
  carName: string;
}
const Bid = ({
  amount,
  name,
  pickupLocation,
  time,
  image,
  seats,
  status,
  phoneNumber,
  tripType,
  baggage,
}: BidProps) => {
  const theme = useTheme();
  const shadows = themeShadows();

  return (
    <Box
      sx={{ padding: "1rem", maxHeight: "25vh", justifyContent: "center" }}
      display="flex"
    >
      <Card
        sx={{
          boxShadow: themeShadows().z12,
          alignItems: "flex-start",
          borderRadius: ".5rem",
          padding: ".5rem",
          border: `1px solid ${opacityColors().borderColor}`,
        }}
        variant="elevation"
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr " }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                width: "100%",
                borderRadius: "10px 0px 0px 10px",
                objectFit: "cover",
                maxHeight: "25vh",
              }}
              src={image}
            />
          </Box>
          <Box sx={{ marginLeft: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  marginLeft: 1,
                  fontSize: "1.5rem",
                  fontWeight: 800,
                }}
              >
                {name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "4fr 2fr",
              }}
            >
              <Box>
                <Box sx={{ display: "flex", marginTop: ".5rem" }}>
                  <Box display="flex">
                    <AcUnitIcon color="primary" />
                    <Typography color="primary" sx={{ marginLeft: ".2rem" }}>
                      AC
                    </Typography>
                  </Box>
                  <Box display="flex" ml="1rem">
                    <WorkIcon color="primary" />
                    <Typography color="primary" sx={{ marginLeft: ".2rem" }}>
                      {baggage}
                    </Typography>
                  </Box>
                  <Box display="flex" ml="1rem">
                    <DriveEtaIcon color="primary" />
                    <Typography color="primary" sx={{ marginLeft: ".2rem" }}>
                      auto
                    </Typography>
                  </Box>

                  <Box display="flex" ml="1rem">
                    <AirlineSeatReclineNormalIcon color="primary" />
                    <Typography color="primary" sx={{ marginLeft: ".2rem" }}>
                      4
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" mt={".5rem"}>
                  {["full-day", "short-day"].map((type, index) => (
                    <FormControlLabel
                      value={type}
                      key={index}
                      control={<Radio />}
                      label={type}
                    />
                  ))}
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ textAlign: "center", width: "100%" }}
              >
                <Divider orientation="vertical" />
                <Box sx={{ marginLeft: "1rem", width: "100%" }}>
                  <Typography sx={{ textAlign: "center" }}>
                    {amount}/- <span>Per Day</span>
                  </Typography>
                  <Button
                    bgColor="primary"
                    size="small"
                    variant="contained"
                    sx={{ width: "100%", marginTop: "1rem" }}
                    onClick={() => {}}
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href={`tel:+92${phoneNumber}`}
                    >
                      <Typography>Contact</Typography>
                    </a>
                  </Button>
                  <Button
                    bgColor="primary"
                    size="small"
                    variant="contained"
                    sx={{ width: "100%", marginTop: "1rem" }}
                    onClick={() => {}}
                  >
                    <Typography>Confirm</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Bid;
