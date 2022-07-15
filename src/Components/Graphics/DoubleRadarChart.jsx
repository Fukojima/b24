import React from "react";
import Card from "@mui/material/Card";
import "@fontsource/rubik";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Grid, Typography, Box } from "@mui/material";
const data = [
  { name: "Hipertensão", m: 16, f: 20 },
  { name: "Obesidade", m: 22, f: 8 },
  { name: "Diabetes", m: 12, f: 13 },
  { name: "Melhor Idade", m: 20, f: 7 },
  { name: "Gestante", m: 0, f: 17 },
];
export default function DoubleRadarChart() {
  return (
    <Card
      sx={{
        width: 600,
        marginLeft: "1rem",
        marginTop: "7rem",
        backgroundColor: "#F9F8F8",
      }}
    >
      <Typography
        sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
        Distribuição de pacientes:
        
      </Typography>
      <Grid container>
        <Grid sx={{ marginLeft: "0.5rem" }} xs={2}>
          <Typography
            sx={{ fontSize: 14, marginLeft: "0.5rem" }}
            color="text.secondary"
            gutterBottom
          >
            <Box
              sx={{
                display: "inline-flex",
                width: 10,
                height: 10,
                backgroundColor: "#5CBFE2",
                marginRight: "0.5rem",
              }}
            />
            Masc.
          </Typography>
        </Grid>
        <Grid sx={{ marginLeft: "0.5rem" }} xs={2}>
          <Typography
            sx={{ fontSize: 14, marginLeft: "0.5rem" }}
            color="text.secondary"
            gutterBottom
          >
            <Box
              sx={{
                display: "inline-flex",
                width: 10,
                height: 10,
                backgroundColor: "#FD9BE9",
                marginRight: "0.5rem",
              }}
            />
            Fem.
          </Typography>
        </Grid>
      </Grid>

      <ResponsiveContainer height={375} width={600}>
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fontFamily: "Rubik", fill: "rgba(0, 0, 0, 0.6)" }}
          />

          <PolarRadiusAxis />
          <Radar
            dataKey="f"
            stroke="#FD9BE9"
            fill="#FD9BE9"
            fillOpacity={0.5}
          />
          <Radar
            dataKey="m"
            stroke="#5CBFE2"
            fill="#5CBFE2"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
}
