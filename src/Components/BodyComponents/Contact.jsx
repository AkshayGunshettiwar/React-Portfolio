import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./BodyStyles";
//import image from "../../images/contactus.jpg";
import { RenderSectionHeading } from "../common/commonComponent";
import { RenderInputText } from "../common/FormComponent";
import ScrollAnimation from "react-animate-on-scroll";

export default function Contact() {
  const classes = useStyles();
  const [state, setState] = useState({
    data: {
      firstname: "",
      email: "",
      messages: "",
    },
    errors: {},
  });
  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    //setting errors
    target.value.length <= 3
      ? (errors[target.name] = `${target.name} at least have 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ,", state.data);
    //api call to psot data
  };

  return (
    <Box className={classes.section} id='Contact'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container spacing={1}>
            {/*<Grid item sm={5}>
              <Box component={Hidden} xsDown>
              <img
                //src={image}
                alt=' about us'
                className={classes.responsiveImg}
  
              </Box>
            </Grid>/>*/}
            <Grid item xs={12} sm={7} className="centerCon">
              {RenderSectionHeading({
                smallText: " Contact Me",
                heading: "Don’t Hesitate To Use The Form.",
              })}
              <br />
              <form onSubmit={handleSubmit} action="https://formspree.io/f/mvonqvjy" method="POST">
                <Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Name",
                      name: "firstname",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Email",
                      name: "email",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Messages",
                      name: "messages",
                      state: state,
                      onChange: handleOnChange,
                      multiline: true,
                      rows: 5,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                    <Button
                      variant='outlined'
                      type='submit'
                      fullWidth={true}
                      className={classes.submitBtn}>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6534352731046!2d73.77589416481506!3d18.634651437342676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9bf2d53942d%3A0xf4c26200474ff922!2sSKF%20Colony%2C%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1678821611461!5m2!1sen!2sin" width="600" height="550" sallowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
