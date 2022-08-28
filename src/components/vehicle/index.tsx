import React, { useEffect } from "react";
import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import useStyles from "./useStyles";
import { Typography } from "@mui/material";


function ServicesGrid() {
  const classes = useStyles();
  return (
    <div style={{width:"100%",background:"#fff"}}>
      <div className={classes.root}>
        <Box width="100%" textAlign="center" margin="30px 0px">
          <Box padding="10px 0px">
            <div>
              {" "}
              <Typography
                variant="h4"
                data-aos="fade-up"
                className={classes.mainheading}
              >
                Our Services
              </Typography>
            </div>
          </Box>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 12 }}
          data-aos="fade-up"
        >
          <Grid item xs={12} sm={6} md={3} >
            <Paper
              className={classes.paper}
            >
              <Box width="100%" textAlign="center">
                <img src={'https://d2f9dw3b0opbul.cloudfront.net/5bbda84515d948ad85945de853da9e37.jpg'} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Recommended places
              </Typography>
              <Typography className={classes.subheading}>
                We recommend best places in Gilgit Baltistan.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Paper
              className={classes.paper}
            >
              <Box width="100%" textAlign="center">
                {" "}
                <img src={'https://www.sixt.de/php/fleet/vehicleimage?grp=CCAR&liso=US&uci=44584'} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Recommended Hotels
              </Typography>
              <Typography className={classes.subheading}>
                We recommend affordable hotels. according to your budget
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Paper
              className={classes.paper}
            >
              <Box width="100%" textAlign="center">
                <img src={'https://fivmagazine.com/buy-a-jeep-top10-most-expensive-jeep-models/'} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Best Transports
              </Typography>
              <Typography className={classes.subheading}>
                We provide details of best transport services for your
                travelling
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Paper
              className={classes.paper}
            >
              <Box width="100%" textAlign="center">
                {" "}
                <img src={'https://www.dreamstime.com/photos-images/executive-car.html'} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Recommend Accessories
              </Typography>
              <Typography className={classes.subheading}>
                We recommend important accessories for yor trip according to
                your selected place.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ServicesGrid;
