import React from "react";
import ValuationCard from "../Card/ValuationCard";
import InfoCard from "../Card/InfoCard";
import { Grid, Card } from "@mui/material";
import InfoTable from "../InfoTable/InfoTable";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { CalendarMonth } from "@mui/icons-material";
import { pink,blue } from '@mui/material/colors';

export default function MainDashboard() {
  
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={2}>
          <ValuationCard
            icon={<HowToRegIcon/>}
            title={"Atendimentos:"}
            value={"65"}
            color={"text.secondary"}
          />
        </Grid>
        <Grid item xs={2}>
          <ValuationCard
          icon={<MaleIcon sx={{ color: blue[200] }}/>}
            title={"Pacientes Masc.:"}
            value={"40"}
            color={"text.secondary"}
          />
        </Grid>
        <Grid item xs={2}>
          <ValuationCard
          icon={<FemaleIcon sx={{ color: pink[200] }}/>}
            title={"Pacientes Fem.:"}
            value={"25"}
            color={"text.secondary"}
            up={true}
          />
        </Grid>
        <Grid item xs={2}>
          <ValuationCard
     icon={<CalendarMonth/>}
            title={"Período:"}
            value={"Julho"}
            color={"text.secondary"}
          />
        </Grid>
        <Grid item xs={4}>
          <InfoCard />
        </Grid>
      </Grid>

      <Grid container sx={ {mt:2}}>
        <Grid item xs={8}>
        <InfoTable />
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }}>


         
      </Grid>

      <Grid container>
        <Grid item xs={11.3}>

          <Card sx={{ marginTop: "2rem" }}>
           
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }}>

      </Grid>
    </>
  );
}
