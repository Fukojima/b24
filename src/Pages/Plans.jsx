import React from "react";
import { Helmet } from "react-helmet";
import PlanCard from "../Components/PlanCard/PlanCard";
import { Grid,Box, Typography } from "@mui/material";


function Plans() {

  return (
    <>
      <Helmet>
        <title> Planos</title>
      </Helmet>
      <Box sx={{ display:"flex", marginTop:"5rem", justifyContent:"center",
  alignItems:"center" }}>
      <Typography variant={"h4"} > Escolha seu plano</Typography></Box>
      <Box sx={{ display:"flex", marginTop:"5rem", justifyContent:"center",
  alignItems:"center" }}>
      <Grid container spacing={5} direction="row"
  justifyContent="center"
  alignItems="center" >
  <Grid item  >
  <PlanCard title={"Plano Mensal"}/>
  </Grid>
  <Grid item >
  <PlanCard title={"Plano Semestral"}/>
  </Grid>
  <Grid item>
  <PlanCard title={"Plano Anual"}/>
  </Grid>
  </Grid></Box>


    </>
  );
}

export default Plans;
