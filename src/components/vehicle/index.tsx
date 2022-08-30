import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import useStyles from "./useStyles";
import { Typography } from "@mui/material";
import premium from "../../assets/Images/v1.png";
import premiumPlus from "../../assets/Images/v2.jpg";
import v3 from "../../assets/Images/v3.jpg";
import v4 from "../../assets/Images/v4.jpg";

function ServicesGrid() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", background: "#fff" }} id={"Vehicles"}>
      <div className={classes.root}>
        <Box width="100%" textAlign="center" margin="30px 0px">
          <Box padding="10px 0px">
            <div>
              <Typography
                variant="h4"
                data-aos="fade-up"
                className={classes.mainheading}
              >
                Our Vehicles
              </Typography>
            </div>
          </Box>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 12 }}
          sx={{ padding: "1.5rem 0" }}
        >
          {[
            { image: v4, title: "Economy" },
            { image: premium, title: "Economy +" },
            { image: v3, title: "Executive" },
            { image: premiumPlus, title: "suv (4*4)" },
          ].map((car, i) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Box width="100%" textAlign="center">
                    {" "}
                    <img src={car.image} alt="place" className={classes.img} />
                  </Box>
                  <Typography variant="h6" color="primary" fontWeight={700}>
                    {car.title}
                  </Typography>
                  <Typography className={classes.subheading}>
                    We recommend affordable hotels. according to your budget
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default ServicesGrid;
