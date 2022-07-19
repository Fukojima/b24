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
import AreaGraph from "../Components/Graphics/AreaGraph"
import statusCard from "../assets/Data/statusCard"
import VerticalBarChart from "../Components/Graphics/VerticalBarChart"
import DiabetesGraph from "../Components/Graphics/DiabetesGraph"


import ValuationCard from "../Components/Card/ValuationCard";
import CaptationCard from "../Components/Card/CaptationCard";
import MainTable from "../Components/InfoTable/MainTable";
function Programs() {
  const { selectedOption } = React.useContext(AppContext);
  const configOneLineChart = [{ key: "uv" }];
  const [option, setOption] = React.useState("");


  const diabetesData = [
    { title: "Negativa", value: 33, color: "#dc7de7" },
    { title: "Positiva", value: 63, color: "#9AC0D8" }
  ]
  const hypertensionData = [
    { title: "Fem", value: 68, color: "#dc7de7" },
    { title: "Masc", value: 32, color: "#9AC0D8" },
  ]
  const obesityData=[
    { title: "Negativa", value: 40, color: "#dc7de7" },
    { title: "Positiva", value: 60, color: "#9AC0D8" }
  ]
  const thirdData=[
    { title: "Negativa", value: 33, color: "#dc7de7" },
    { title: "Positiva", value: 63, color: "#9AC0D8" },
  ]






  React.useEffect(() => {
    setOption(selectedOption);
  }, [selectedOption]);

  const ProgramScreens =((value) => {

        if (option == 5){
          return(
      <>
          <Grid container>
          <Grid>
            <CardProgram program="Obesidade" describe="O Programa de Obesidade tem como principal objetivo promover o emagrecimento saudável, progressivo e duradouro através de tratamento clínico, realizando acompanhamento nutricional e psicológico dos beneficiários" param="IMC > 30" />
            <Grid sx={{ display: "flex" }}>
              <PieGraph  datas={obesityData}/>
              <ObesityGraph />
            </Grid>
          </Grid>
          <Grid>
            <ProgramTables />
          </Grid>
          <Grid sx={{display:"flex"}}>
          <AreaGraph
              datas={statusCard.oneLineChartData}
              title="Pacientes Operados"
              value={230}
              config={configOneLineChart}
            />
                 <VerticalBarChart />

          </Grid>

        </Grid></>)
        }if (option == 1){
          return(
            <>
          <Grid container>
          <Grid>
            <CardProgram program="Diabetes" describe="O Programa de Diabetes tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes" param="mg/d > 126"/>
            <Grid sx={{ display: "flex" }}>
              <PieGraph datas={diabetesData} />
            <DiabetesGraph/>
            </Grid>
          </Grid>
          <Grid>
            <ProgramTables />
          </Grid>
          <Grid sx={{display:"flex"}}>
          <AreaGraph
              datas={statusCard.oneLineChartData}
              title="Pacientes Operados"
              value={230}
              config={configOneLineChart}
            />
            <VerticalBarChart />

          </Grid>

        </Grid></>)
        }if (option == 2){
          return(
            <>
          <Grid container>
          <Grid>
            <CardProgram program="Hipertensão" describe="O Programa de Hipertensão tem como principal objetivo cadastrar e acompanhar todos os pacientes hipertensos a fim de que através do cuidado especial consigamos fazer um controle das doenças e garantir uma melhor qualidade de vida aos pacientes." param=" mmHg > 140 "/>
            <Grid sx={{ display: "flex" }}>
              <PieGraph datas={hypertensionData}/>
            <DiabetesGraph/>
            </Grid>
          </Grid>
          <Grid>
            <ProgramTables />
          </Grid>
          <Grid sx={{display:"flex"}}>
          <AreaGraph
              datas={statusCard.oneLineChartData}
              title="Pacientes Operados"
              value={230}
              config={configOneLineChart}
            />
            <VerticalBarChart/>

          </Grid>

        </Grid></>)
        }
        
        
        
        else{
          return(
            <>
          <Grid container>
          <Grid>
            <CardProgram program="Diabetes" describe="O Programa de Diabetes tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes" param="Glicose > 126 mg/d"/>
            <Grid sx={{ display: "flex" }}>
              <PieGraph />
            <DiabetesGraph/>
            </Grid>
          </Grid>
          <Grid>
            <ProgramTables />
          </Grid>
          <Grid sx={{display:"flex"}}>
          <AreaGraph
              datas={statusCard.oneLineChartData}
              title="Pacientes Operados"
              value={230}
              config={configOneLineChart}
            />
            <VerticalBarChart />

          </Grid>

        </Grid></>)
        }
  })







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
            <Grid sx={{ display: "flex" }}>

            <AlocationProgramsCard/>
            <MainTable/>

            </Grid>
          </Grid>
        </>
      ) : (

        <>
       {<ProgramScreens/>}
 
        </>
      )}
    </>
  );
}

export default Programs;
