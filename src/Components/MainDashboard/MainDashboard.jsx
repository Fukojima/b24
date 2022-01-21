import React from "react";
import LineGraphic from "../Graphics/LineGraphic";
import testData from "../../service/testDatas.js";
import ValuationCard from "../Card/ValuationCard"
import InfoCard from "../Card/InfoCard";
import { Grid, Box, Typography } from "@mui/material";
import SimpleGraph from "../Graphics/SimpleGraph";
export default function MainDashboard() {
  return (
    <>

        <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={2}><ValuationCard title={"Capital investido:"} value={"$ 12.000"} color={"text.secondary"}/></Grid>
      <Grid item xs={2}><ValuationCard title={"Valor atual:"} value={"$ 26.500"} color={"text.secondary"} /></Grid>
      <Grid item xs={2}><ValuationCard title={"P/L Realizado:"} value={"$ 14.000"} color={"#25ec82"} up={true}/></Grid>
      <Grid item xs={2}><ValuationCard title={"Margem disponivel:"} value={"$ 8.725"} color={"text.secondary"}/></Grid>
      <Grid item xs={4}><InfoCard/></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          {" "}
          <SimpleGraph />
        </Grid>
    
        
      </Grid>
    </>
  );
}
