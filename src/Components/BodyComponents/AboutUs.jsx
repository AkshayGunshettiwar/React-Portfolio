import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../images/MyPhoto.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";
import TagsCanvas from 'react-tags-canvas'

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "IIMS | MCA | 2023",
      //description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DashboardIcon />,
    },
    {
      title: "Santaji Mahavidyala | BCA | 2020",
      description: "70%",
      icon: <ToysIcon />,
    },
    {
      title: "LTV | 12th | 2017",
      description: "70%",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Mount Convent | 10th | 2015",
      description: "87%.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              {/*<Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>*/}
              <TagsCanvas
        textColour='#008B8B'
        maxSpeed={0.08}
        // freezeActive
        shuffleTags
        stretchX={1}
        shape='hcylinder'
        zoom={1.0}
        noSelect
        padding={20}
        imageRadius="20%"
        //weightMode="size"
        height="500px"
        width="400px"
        radiusX={1}
        textFont={null}
        pinchZoom={true}
        outlineColour='#ff00ff'
        scale={12}
 
        tags={[
          { value: 'Javascript', weight: 20 },
          { value: 'React', weight: 30 },
          { value: 'HTML5', weight: 20 },
          { value: 'CSS3', weight: 20 },
          { value: 'JAVA', weight: 30 },
          { value: 'Git', weight: 20 },
          { value: 'Redux', weight: 20 },
          { value: 'MYSQL', weight: 20 },
          { value: 'SPRING', weight: 20 },
          { value: 'BOOTSTRAP', weight: 20 }
        ]}
      />
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Akshay Gunshettiwar",
                description:
                  "A self taught developer who loves to codes. Obtaining my MCA master's degree. I have earned a bachelor's degree in BCA. I also completed my Full Stack Java Development Training from Pune in addition to receiving my degree. I'm now interested in working for a multinational corporation to advance my career. I enjoy learning new things and have a strong interest in creating new web applications. Additionally, I'm searching for freelance work where I can provide my expertise while also learning something new. In addition to all of this, I enjoy singing and listening to music a lot. I learned self-discipline and calm from Riyaaz.",
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
