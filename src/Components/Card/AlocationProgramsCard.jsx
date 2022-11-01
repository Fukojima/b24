import * as React from "react";
import { Typography, Card, Grid, Box, Divider } from "@mui/material";

// import icons

import CountUp from "react-countup";
import FaceIcon from "@mui/icons-material/Face";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import ElderlyIcon from "@mui/icons-material/Elderly";
import SickIcon from "@mui/icons-material/Sick";
export default function AlocationProgramsCard({patientData}) {
  const shiftSize = 7;
  const setPrograms = [
    {
      icon: (
        <SickIcon
          sx={{
            height: "30px",
            width: "30px",
            color: "#6462E8",
          }}
        />
      ),
      text: "Diabetes",
      value: 18,
    },
    {
      icon: (
        <PregnantWomanIcon
          sx={{
            height: "30px",
            width: "30px",
            color: "#6462E8",
          }}
        />
      ),
      text: "Gestante",
      value: 12,
    },
    {
      icon: (
        <HeartBrokenIcon
          sx={{
            height: "30px",
            width: "30px",
            color: "#6462E8",
          }}
        />
      ),
      text: "Hipertensão",
      value: 26,
    },
    {
      icon: (
        <ElderlyIcon
          sx={{
            height: "30px",
            width: "30px",
            color: "#6462E8",
          }}
        />
      ),
      text: "Melhor Idade",
      value: 20,
    },
    {
      icon: (
        <FaceIcon
          sx={{
            height: "30px",
            width: "30px",
            color: "#6462E8",
          }}
        />
      ),
      text: "Obesidade",
      value: 24,
    },
  ];
  const data = [
    { name: "a", value: 74 },
    { name: "r", value: 26 },
  ];
  const programsContent = setPrograms.map((item) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100px",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item.icon}
        <Typography
          sx={{
            fontFamily: "Maven Pro",
            fontSize: "14px",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {item.text}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "rubik",
            color: "#6462E8",
          }}
        >
          <CountUp end={item.value} delay={0.1}></CountUp>%
        </Typography>
      </Box>
    );
  });
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          backgroundImage: "linear-gradient(to right, #6462E8 , #403e94)",
          padding: "30px",
          overflow: "hidden",
          height: "100px",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FaceIcon
          sx={{
            color: "white",
          }}
        />
        <Typography
          sx={{
            fontFamily: "rubik",
            color: "white",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          <CountUp end={137}></CountUp>
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
        >
          Pacientes
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "rubik",
            color: "#6462E8",
            textAlign: "center",
          }}
        >
          Classificação Por Programas
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {programsContent}
        </Box>
      </Box>
    </>
  );
}
