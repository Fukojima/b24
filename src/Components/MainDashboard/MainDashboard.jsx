import React from "react";
import ValuationCard from "../Card/ValuationCard";
import { Grid, Box, styled, Typography } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { CalendarMonth } from "@mui/icons-material";
import { pink, blue, green, orange } from "@mui/material/colors";
import InfoTable from "../InfoTable/InfoTable";
import InfoCard from "../Card/InfoCard";
const StyledContainer = styled(Box)({
  backgroundColor: "white",
  padding: "10px",
  width: "100%",
  borderRadius: 5,
  flexGrow: 1,
});
export default function MainDashboard() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            width: "100%",
            borderRadius: 2,
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid item xs={3}>
              <ValuationCard
                icon={<HowToRegIcon />}
                title={"Atendimentos"}
                value={"65"}
                color={green[200]}
              />
            </Grid>
            <Grid item xs={3}>
              <ValuationCard
                icon={<MaleIcon sx={{ color: "White" }} />}
                title={"Pacientes Masc"}
                value={"40"}
                color={blue[200]}
              />
            </Grid>
            <Grid item xs={3}>
              <ValuationCard
                icon={<FemaleIcon sx={{ color: "white" }} />}
                title={"Pacientes Fem"}
                value={"25"}
                color={pink[200]}
                up={true}
              />
            </Grid>
            <Grid item xs={3}>
              <ValuationCard
                icon={<CalendarMonth />}
                title={"Período"}
                value={"Julho"}
                color={orange[200]}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <StyledContainer>
                <Typography></Typography>
                <InfoTable />
              </StyledContainer>
            </Grid>
            <Grid item xs={4}>
              <StyledContainer>
                <InfoCard />
              </StyledContainer>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
