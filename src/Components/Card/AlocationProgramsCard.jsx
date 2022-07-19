import * as React from "react";
import { Typography, Card, Grid } from "@mui/material";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";
// import icons
import diabetesIcon from "../../assets/blood-test.png";
import hypertensionIcon from "../../assets/hypertension.png";
import thirdAgeIcon from "../../assets/walker.png";
import obesityIcon from "../../assets/overweight.png";
import pregnantIcon from "../../assets/pregnant.png";

export default function AlocationProgramsCard() {
  const shiftSize = 7;
  const setPrograms = [
    { icon: diabetesIcon, text: "Diabetes: 25 pacientes" },
    { icon: pregnantIcon, text: "Gestante: 17 pacientes" },
    { icon: hypertensionIcon, text: "Hipertensão: 36 pacientes" },
    { icon: thirdAgeIcon, text: "Melhor Idade: 27 pacientes" },
    { icon: obesityIcon, text: "Obesidade: 30 pacientes" },
  ];
  const data = [
    { name: "a", value: 74 },
    { name: "r", value: 26 },
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
        height: 540,
        padding: 2,
        marginLeft: "1rem",
        marginTop: "1rem",
        backgroundColor: "#F9F8F8",
      }}
    >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Taxa de captação:
      </Typography>
      <ResponsiveContainer width="100%" height={150}>
      <PieChart
       radius={PieChart.defaultProps.radius - shiftSize}
       segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
       animate={true}
     >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value" // make sure to map the dataKey to "value"
          innerRadius={40} // the inner and outer radius helps to create the progress look
          outerRadius={50}
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="#f3f6f9" />; // make sure to map the index to the colour you want
            }
            return <Cell key={`cell-${index}`} fill="#8AB3CC"/>;
          })}
          <Label
            value={`${data[0].value}%`}
            position="center"
   

          />
        </Pie>
      </PieChart>
</ResponsiveContainer>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Alocação de pacientes por programa:
      </Typography>
      {programsContent}
    </Card>
  );
}
