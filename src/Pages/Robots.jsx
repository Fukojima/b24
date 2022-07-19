import React from "react";
import { Helmet } from "react-helmet";
import Robot from "../Components/Robot/Robot"
import { Grid,Box, Typography,Card } from "@mui/material";
import statusCard from "../assets/Data/statusCard";
import AliceCarousel from 'react-alice-carousel';


import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: {
      items: 2
    },
    1024: {
      items: 3
    }
  };
const  stagePadding = {
    paddingLeft: 50,
    paddingRight: 100
  };

function Robots() {

    const robot = statusCard.barChartData.map((value) => {
        return(        <>
        <Robot autor={value.autor} profit={value.profit} active={value.active} value={value.value}/>
           
            </>)

      });

  return (
    <>
      {/* <Helmet>
        <title> Planos</title>
      </Helmet>
      <Grid style={{backgroundColor:"#2d235c", opacity:0.5, boxShadow: "10px 5px 5px #2a2a2c ", borderBottomRightRadius: "20%"}}> <Typography variant={"h4"}> Destaques</Typography> </Grid>
    <Grid>  <AliceCarousel  disableDotsControls stagePadding={stagePadding} responsive={responsive} mouseTracking items={robot} /></Grid>
    <Grid> <Typography variant={"h4"}> Gratuitas</Typography> </Grid>
    <Grid>  <AliceCarousel  disableDotsControls stagePadding={stagePadding} responsive={responsive} mouseTracking items={robot} /></Grid>
    <Grid> <Typography variant={"h4"}> Pagas</Typography> </Grid>
    <Grid>  <AliceCarousel  disableDotsControls stagePadding={stagePadding} responsive={responsive} mouseTracking items={robot} /></Grid> */}

    </>
  );
}

export default Robots;
