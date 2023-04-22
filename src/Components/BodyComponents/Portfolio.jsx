import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";
import image1 from "../images/portfolio1.jpg";
import image2 from "../images/eccom.jpg";
import image3 from "../images/weather-pppp.png";
// import image4 from "../../images/5-6.jpg";
// import image5 from "../../images/5-8.jpg";
// import image6 from "../../images/5-9.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: "Portfolio ", link: "https://github.com/AkshayGunshettiwar/Portfolio.git" },
    { url: image2, title: "E-Commerce Website ", link: "https://github.com/AkshayGunshettiwar/E-Commerce-Website.git" },
    { url: image3, title: "Weather Application", link: "https://github.com/AkshayGunshettiwar/Weather-Forecast-Application.git" },
    // { url: image4, title: "# Portfolio ", link: "" },
    // { url: image5, title: "# Portfolio ", link: "" },
    // { url: image6, title: "# Portfolio ", link: "" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "A Small Gallery Of Recent Projects Done By Me.",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Button variant='contained' href="https://github.com/AkshayGunshettiwar/Portfolio.git">Visit</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}

