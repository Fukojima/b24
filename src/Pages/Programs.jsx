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
import AreaGraph from "../Components/Graphics/AreaGraph";
import statusCard from "../assets/Data/statusCard";
import VerticalBarChart from "../Components/Graphics/VerticalBarChart";
import DiabetesGraph from "../Components/Graphics/DiabetesGraph";
import useHistory from "../service/useHistory";
import MainTable from "../Components/InfoTable/MainTable";
import OneLineGraphic from "../Components/Graphics/ComposedChart";
import HypertensionGraph from "../Components/Graphics/HypertensionGraph";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Programs() {
  const { selectedOption } = React.useContext(AppContext);
  const configOneLineChart = [{ key: "uv" }];
  const [option, setOption] = React.useState("");

  const diabetesData = [
    { title: "Negativa", value: 33, color: "#dc7de7" },
    { title: "Positiva", value: 63, color: "#9AC0D8" },
  ];
  const hypertensionData = [
    { title: "Fem", value: 68, color: "#dc7de7" },
    { title: "Masc", value: 32, color: "#9AC0D8" },
  ];
  const obesityData = [
    { title: "Negativa", value: 0, color: "#dc7de7" },
    { title: "Positiva", value: 0, color: "#9AC0D8" },
  ];
  const thirdData = [
    { title: "Negativa", value: 33, color: "#dc7de7" },
    { title: "Positiva", value: 63, color: "#9AC0D8" },
  ];

  let hypertensionArray = [];
  let obesityArray = [];
  let diabetesArray = [];
  let pregnantArray = [];
  const [history, setHistory] = React.useState([]);
  const [obesity, setObesity] = React.useState([]);
  const [hypertension, setHypertension] = React.useState([]);
  const [diabetes, setDiabetes] = React.useState([]);
  const [pregnant, setPregnant] = React.useState([]);
  async function Historys() {
    const { getHistory } = useHistory();
    let detailsResponse = [];

    detailsResponse = await getHistory();
    setHistory(detailsResponse);
  }
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    setOption(selectedOption);
    Historys();

    // totalMasc = history.filter(function(item) {
    //   if (item.gender =="M"){
    //     return item
    //   }
    // })

    //  totalFem = history.filter(function(item) {
    //   if (item.gender =="F"){
    //     return item
    //   }
    // })

    history.map(function (item) {
      let results = item.admeasurements.filter(function (data) {
        if (data[0]?.describeVitalAcronym == "P.A.D." && data[0]?.value > 70) {
          hypertensionArray.push(item);
        }

        if (data[0]?.describeVitalAcronym == "GLI" && data[0]?.value > 70) {
          diabetesArray.push(item);
        }
        if (data[0]?.describeVitalAcronym == "IMC") {
          obesityArray.push(item);
        }
      });
      let examsResults = item.exams.filter(function (data) {
        if (data[0]?.examName == "BETA-HCG" && data[0]?.value > 25) {
          pregnantArray.push(item);
        }
      });
    });
    setObesity(obesityArray);
    setHypertension(hypertensionArray);
    setDiabetes(diabetesArray);
    setPregnant(pregnantArray);
    console.log("obesity", obesityArray);
    console.log("hypertension", hypertensionArray);
    console.log("diabetes", diabetesArray);
    console.log("pregnant", pregnantArray);
  }, [selectedOption]);

  const ProgramScreens = (value) => {
    if (option == 5) {
      return (
        <>
          <Grid container>
            <Grid item xs={6}>
              <CardProgram
                program="Obesidade"
                describe="O Programa de Obesidade tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes"
                param="IMC > 30"
              />
              <Grid>
                <Grid sx={{ display: "flex" }}>
                  {" "}
                  <PieGraph qt={obesity.length} datas={obesityData} />{" "}
                  <ObesityGraph />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <ProgramTables data={obesity} />
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              <AreaGraph
                datas={obesity}
                title="Pacientes Operados"
                value={230}
                config={configOneLineChart}
              />
              <VerticalBarChart data={obesity} />
            </Grid>
          </Grid>
        </>
      );
    }
    if (option == 1) {
      return (
        <>
          <Grid container>
            <Grid item xs={6}>
              <CardProgram
                program="Diabetes"
                describe="O Programa de Diabetes tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes"
                param="mg/d > 126"
              />
              <Grid>
                <Grid sx={{ display: "flex" }}>
                  {" "}
                  <PieGraph qt={diabetes.length} datas={diabetesData} />{" "}
                  <DiabetesGraph />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <ProgramTables data={diabetes} />
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              <AreaGraph
                datas={diabetes}
                title="Pacientes Operados"
                value={230}
                config={configOneLineChart}
              />
              <VerticalBarChart data={diabetes} />
            </Grid>
          </Grid>
        </>
      );
    }
    if (option == 2) {
      return (
        <>
          <Grid container>
            <Grid item xs={6}>
              <CardProgram
                program="Hipertensão"
                describe="O Programa de Hipertensão tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes"
                param="PAD (mmHg) > 90"
              />
              <Grid>
                <Grid sx={{ display: "flex" }}>
                  {" "}
                  <PieGraph
                    qt={hypertension.length}
                    datas={hypertensionData}
                  />{" "}
                  <HypertensionGraph />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <ProgramTables data={hypertension} />
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              <AreaGraph
                datas={hypertension}
                title="Pacientes Operados"
                value={230}
                config={configOneLineChart}
              />
              <VerticalBarChart data={hypertension} />
            </Grid>
          </Grid>
        </>
      );
    }
    if (option == 3) {
      return (
        <>
          <Grid container>
            <Grid item xs={6}>
              <CardProgram
                program="Gestante"
                describe="O objetivo é o desenvolvimento de ações de prénatal, acompanhamento e tratamento das doenças
incluídas no Programa promovendo o acesso, o
incremento da qualidade e da capacidade
instalada do serviço de referência e dos demais
serviços"
                param="mIU/ml > 25"
              />
              <Grid>
                <Grid sx={{ display: "flex" }}>
                  {" "}
                  <OneLineGraphic />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <ProgramTables data={pregnant} />
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              <AreaGraph
                datas={pregnant}
                title="Pacientes Operados"
                value={230}
                config={configOneLineChart}
              />
              <VerticalBarChart data={pregnant} />
            </Grid>
          </Grid>
        </>
      );
    }
  };
console.log("AAAAAAAAAAAA", history.length)
  return (
    <>
      {history.length == 0 ? (
<Box sx={{width:"100%", height:500,alignItems:"center", justifyContent:"center", justifyItems:"center", display:"flex" }}>

                
            <CircularProgress size={100} />


          </Box>
      ) : (
        <>
          {" "}
          <ChangeCard />
          {option == 0 || !option ? (
            <>
              {" "}
              <Grid container>
                <Grid item xs={6}>
                  <DoubleRadarChart />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex" }}>
                  <AlocationProgramsCard />
                  <MainTable />
                </Grid>
              </Grid>
            </>
          ) : (
            <>{<ProgramScreens />}</>
          )}
        </>
      )}
    </>
  );
}

export default Programs;
