import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";
import Image from "../images/img.jpg";

export const useStyles = makeStyles((theme) => ({
  HeardeWraper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom left, #04303140, black),url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  head:{
    fontFamily: 'Satisfy',
  },
  Headercontaier: {
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    padding: "20px",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
  },
  headerTitle: {
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    fontFamily: 'Satisfy',
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },

  icon:{
    fontSize:'32px',
    marginLeft:'10px',
    padding:'6px',
    borderRadius:'50%',
    transition:'all .2s ease-in-out',
    "&:hover":{
        color:'111010',
        transform:'scale(1.2)'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'25px'
    }

  },

  
  headerDesc: {
    fontSize: "2rem",
    margin: theme.spacing(1, 0),
    fontFamily: 'Satisfy',
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      margin: theme.spacing(2, 0),
    },
  },
  navbar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Theme.colors.base2,
  },

  //decorator.
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: Theme.colors.primary,
      content: '""',
      borderRadius: "50%",
    },
  },
  decoratorText: {
    lineHeight: "40px",
    position: " absolute",
    left: "20px",
  },

  arrow: {
    lineHeight: " 50px",
    position: " absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },

  //creating the animations
  "@global": {
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "0px",
      },
      "100%": {
        transform: "scale(1,2)",
        paddingTop: "10px",
      },
    },
  },

  //drewer style
  drawer: {
    width: "250px",
    height: "100vh",
  },
  drawerContainer: {
    width: "250px",
    height: "100vh",
    backgroundColor: Theme.colors.primary1,
  },
  listItem: {
    color: Theme.colors.base2,
  },
}));
