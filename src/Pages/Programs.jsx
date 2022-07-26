import React from "react";
import { Grid,Typography, styled, Box } from "@mui/material";
import DoubleRadarChart from "../Components/Graphics/DoubleRadarChart";
import ChangeCard from "../Components/Card/ChangeCard";
import { AppContext } from "../Context/AppContext";
import ProgramTables from "../Components/InfoTable/ProgramTables";
import CardProgram from "../Components/Card/CardProgram";
import PieGraph from "../Components/Graphics/PieChart";
import ObesityGraph from "../Components/Graphics/ObesityGraph";
import AlocationProgramsCard from "../Components/Card/AlocationProgramsCard";
import AreaGraph from "../Components/Graphics/AreaGraph";
import VerticalBarChart from "../Components/Graphics/VerticalBarChart";
import DiabetesGraph from "../Components/Graphics/DiabetesGraph";
import useHistory from "../service/useHistory";
import {CircularProgress} from "@mui/material";
import MainTable from "../Components/InfoTable/MainTable";
import OneLineGraphic from "../Components/Graphics/ComposedChart";
import HypertensionGraph from "../Components/Graphics/HypertensionGraph";
const StyledContainer = styled(Box)((props) => ({
  backgroundColor: "white",
  padding: "10px",
  width: "100%",
  borderRadius: 5,
  ...props?.sx,
}));

const ContentContainer = styled(Box)((props) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1280px",
  margin: "10px auto",
  padding: 10,
  ...props?.sx,
}));

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

    history?.map(function (item) {
       item.admeasurements.filter(function (data) {
        if (data[0]?.describeVitalAcronym === "P.A.D." && data[0]?.value > 70) {
          hypertensionArray.push(item);
        }

        if (data[0]?.describeVitalAcronym === "GLI" && data[0]?.value > 70) {
          diabetesArray.push(item);
        }
        if (data[0]?.describeVitalAcronym === "IMC") {
          obesityArray.push(item);
        }
      });
           item.exams.filter(function (data) {
        if (data[0]?.examName === "BETA-HCG" && data[0]?.value > 25) {
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
        <Grid item xs={12} container sx={{}}>
          <Grid item xs={6}>
            <StyledContainer
              sx={{
                flexGrow: 1,
              }}
            >
              <CardProgram
                program="Obesidade"
                describe="O Programa de Obesidade tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes"
                param="IMC > 30"
              />
            </StyledContainer>
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
      );
    }
    if (option == 1) {
      return (
        <Grid item xs={12} container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
            }}
          >
            <StyledContainer
              sx={{
                flexGrow: 1,
              }}
            >
              <CardProgram
                program="Diabetes"
                describe="O Programa de Diabetes tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes"
                param="mg/d > 126"
              />
            </StyledContainer>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <StyledContainer
              sx={{
                flexGrow: 1,
              }}
            >
              <PieGraph qt={diabetes.length} datas={diabetesData} />{" "}
            </StyledContainer>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <StyledContainer
              sx={{
                flexGrow: 1,
              }}
            >
              <DiabetesGraph />
            </StyledContainer>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
            }}
          >
            <StyledContainer
              sx={{
                flexGrow: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  color: "#6462E8",
                }}
              >
                Faixa Etária
              </Typography>
              <AreaGraph
                datas={diabetes}
                title="Pacientes Operados"
                value={230}
                config={configOneLineChart}
              />
            </StyledContainer>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
            }}
          >
            <StyledContainer
              sx={{
                flexGrow: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  color: "#6462E8",
                }}
              >
                Alocação Demográfica
              </Typography>
              <VerticalBarChart data={diabetes} />
            </StyledContainer>
          </Grid>
          <Grid item xs={12}>
            <StyledContainer
              sx={{
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  color: "#6462E8",
                  marginBottom: "10px",
                }}
              >
                Tabela de Dados
              </Typography>
              <ProgramTables data={diabetes} />
            </StyledContainer>
          </Grid>
        </Grid>
      );
    }
    if (option == 2) {
      return (
        <>
          <Grid item xs={12} container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
              }}
            >
              <StyledContainer
                sx={{
                  flexGrow: 1,
                }}
              >
                <CardProgram
                  program="Hipertensão"
                  describe="O Programa de Hipertensão tem como principal objetivo promover a saúde e aumentar a qualidade de vida dos diabéticos, orientando os pacientes no intuito de prevenir riscos, agravos e doenças decorrentes do diabetes"
                  param="PAD (mmHg) > 90"
                />
              </StyledContainer>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
              }}
            >
              <StyledContainer
                sx={{
                  flexGrow: 1,
                }}
              >
                <PieGraph qt={hypertension.length} datas={hypertensionData} />
              </StyledContainer>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
              }}
            >
              <StyledContainer>
                <HypertensionGraph />
              </StyledContainer>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
              }}
            >
              <StyledContainer
                sx={{
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    color: "#6462E8",
                  }}
                >
                  Faixa Etária
                </Typography>
                <AreaGraph
                  datas={hypertension}
                  title="Pacientes Operados"
                  value={230}
                  config={configOneLineChart}
                />
              </StyledContainer>
            </Grid>
            <Grid item xs={6}>
              <StyledContainer>
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    color: "#6462E8",
                  }}
                >
                  Alocação demográfica
                </Typography>
                <VerticalBarChart data={hypertension} />
              </StyledContainer>
            </Grid>
            <Grid item xs={12} marginBottom={4}>
              <ProgramTables data={hypertension} />
            </Grid>
          </Grid>
        </>
      );
    }
    if (option == 3) {
      return (
        <>
          <Grid item xs={12} container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
              }}
            >
              <StyledContainer
                sx={{
                  flexGrow: 1,
                }}
              >
                <CardProgram
                  program="Gestante"
                  describe="O objetivo é o desenvolvimento de ações de prénatal, acompanhamento e tratamento das doenças
incluídas no Programa promovendo o acesso, o
incremento da qualidade e da capacidade
instalada do serviço de referência e dos demais
serviços"
                  param="mIU/ml > 25"
                />
              </StyledContainer>
            </Grid>
            <Grid item xs={6}>
              <StyledContainer>
                <OneLineGraphic />
              </StyledContainer>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
              }}
            >
              <StyledContainer
                sx={{
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    color: "#6462E8",
                  }}
                >
                  Faixa Etária
                </Typography>
                <AreaGraph
                  datas={pregnant}
                  title="Pacientes Operados"
                  value={230}
                  config={configOneLineChart}
                />
              </StyledContainer>
            </Grid>
            <Grid item xs={6}>
              <StyledContainer>
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    color: "#6462E8",
                  }}
                >
                  Alocação demográfica
                </Typography>
                <VerticalBarChart data={pregnant} />
              </StyledContainer>
            </Grid>
            <Grid item xs={12} marginBottom={"20px"}>
              <StyledContainer>
                <ProgramTables data={pregnant} />
              </StyledContainer>
            </Grid>
          </Grid>
        </>
      );
    }
  };

  return (
    
    <>
      {history.length === 0 ? (
<Box sx={{width:"100%", height:500,
alignItems:"center", justifyContent:"center", justifyItems:"center", display:"flex" }}>

                
            <CircularProgress size={100} />


          </Box>):(
    <ContentContainer>
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={option == 0 || !option ? 8 : 12}
          sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <StyledContainer>
            <ChangeCard />
          </StyledContainer>

          {option == 0 || !option ? (
            <StyledContainer>
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                  color: "#6462E8",
                }}
              >
                Distribuição de Pacientes
              </Typography>
              <DoubleRadarChart />
            </StyledContainer>
          ) : (
            <></>
          )}
        </Grid>
        {option == 0 || !option ? (
          <>
            <Grid item container xs={4}>
              <StyledContainer
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {" "}
                {/* <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    color: "#6462E8",
                  }}
                >
                  Detalhamento dos Pacientes
                </Typography> */}
                <AlocationProgramsCard />
              </StyledContainer>
            </Grid>
            <Grid item xs={12}>
              <StyledContainer
                sx={{
                  marginBottom: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                    color: "#6462E8",
                  }}
                >
                  Tabela de Dados
                </Typography>
                <MainTable />
              </StyledContainer>
            </Grid>{" "}
          </>
        ) : (
          <>{<ProgramScreens />}</>
        )}
      </Grid>
    </ContentContainer>)}
    </>
  );
}

export default Programs;