import React from 'react'
import LineGraphic from "../Graphics/LineGraphic";
import testData from "../../service/testDatas.js";
import { Grid, Box, Typography } from "@mui/material";
import SimpleGraph from "../Graphics/SimpleGraph"
export default function MainDashboard() {
 
  return (
    <>
 <Grid container><Grid item xs={10}>        <SimpleGraph /></Grid></Grid>
    </>
  )
}

