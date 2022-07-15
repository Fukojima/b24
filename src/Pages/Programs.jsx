import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import DoubleRadarChart from "../Components/Graphics/DoubleRadarChart";
import ChangeCard from "../Components/Card/ChangeCard";
import { AppContext } from "../Context/AppContext";
import ProgramTables from "../Components/InfoTable/ProgramTables";
import CardProgram from "../Components/Card/CardProgram";
import PieGraph from "../Components/Graphics/PieChart";
import ObesityGraph from "../Components/Graphics/ObesityGraph";
import AlocationProgramsCard from "../Components/Card/AlocationProgramsCard";
import ValuationCard from "../Components/Card/ValuationCard";
function Programs() {
  const { selectedOption } = React.useContext(AppContext);

  const [option, setOption] = React.useState("");

  React.useEffect(() => {
    setOption(selectedOption);
  }, [selectedOption]);

  return (
    <>
      <ChangeCard />
      {option == 0 || !option ? (
        <>
          {" "}
          <Grid container>
            <Grid>
              <DoubleRadarChart />
            </Grid>
            <Grid>
            <AlocationProgramsCard/>
            <ValuationCard
            title={"Capital investido:"}
            value={"$ 12.000"}
            color={"text.secondary"}
          />
              {/* <AreaGraph
                datas={statusCard.oneLineChartData}
                title="Pacientes Operados"
                value={230}
                config={configOneLineChart}
              />
              <VerticalBarChart /> */}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {" "}
          <Grid container>
            <Grid>
              <CardProgram />
              <Grid sx={{ display: "flex" }}>
                <PieGraph />
                <ObesityGraph />
              </Grid>
            </Grid>
            <Grid>
              <ProgramTables />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default Programs;
