import * as React from "react";
import { Typography, Card, Grid } from "@mui/material";
// import icons
import diabetesIcon from "../../assets/blood-test.png";
import hypertensionIcon  from "../../assets/hypertension.png";
import thirdAgeIcon from "../../assets/walker.png";
import obesityIcon from "../../assets/overweight.png";
import pregnantIcon from "../../assets/pregnant.png";


export default function AlocationProgramsCard() {
  const setPrograms = [
    { icon: diabetesIcon, text: "Diabetes: 25 pacientes" },
    { icon: pregnantIcon, text: "Gestante: 17 pacientes" },
    { icon: hypertensionIcon, text: "Hipertensão: 36 pacientes" },
    { icon: thirdAgeIcon, text: "Melhor Idade: 27 pacientes" },
    { icon: obesityIcon, text: "Obesidade: 30 pacientes" },
  ];

  const programsContent = setPrograms.map((item) => {
    return (
      <Grid container sx={{ marginTop: 3 }}>
        <Grid item xs={2}>
          <img src={item.icon} alt="Logo" height="30rem" />{" "}
        </Grid>
        <Grid>
          <Typography
            sx={{ fontSize: 14, marginTop: 0.5 }}
            color="text.secondary"
            gutterBottom
          >
            {item.text}
          </Typography>{" "}
        </Grid>
      </Grid>
    );
  });

  return (
    <Card
      sx={{
        width: 250,
        height: 400,
        padding: 2,
        marginLeft: "1rem",
        marginTop: "1rem",
        backgroundColor: "#F9F8F8",
      }}
    >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Alocação de pacientes por programa:
      </Typography>
      {programsContent}
    </Card>
  );
}
