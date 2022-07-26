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
import useAttendances from "../../service/useAttendances"
const StyledContainer = styled(Box)({
  backgroundColor: "white",
  padding: "10px",
  width: "100%",
  borderRadius: 5,
  flexGrow: 1,
});

export default function MainDashboard() {

  const [attendances, setAttendances] = React.useState([]);
  async function Attendances() {
    const { getAttendances } = useAttendances();
    let detailsResponse = [];

    detailsResponse = await getAttendances();
    setAttendances(detailsResponse);
  }



    const totalMasc = attendances.filter(function(item) {
      if (item.gender =="M"){
        return item
      }
    })

    const  totalFem = attendances.filter(function(item) {
      if (item.gender =="F"){
        return item
      }
    })


  React.useEffect(() => {Attendances()}, []);
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
                value={attendances.length}
                color={green[200]}
              />
            </Grid>
            <Grid item xs={3}>
              <ValuationCard
                icon={<MaleIcon sx={{ color: "White" }} />}
                title={"Pacientes Masc"}
                value={totalMasc.length}
                color={blue[200]}
              />
            </Grid>
            <Grid item xs={3}>
              <ValuationCard
                icon={<FemaleIcon sx={{ color: "white" }} />}
                title={"Pacientes Fem"}
                value={totalFem.length}
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
                <InfoTable rows={attendances} />
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
