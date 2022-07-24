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
  // { name: "Obesidade", m: 22, f: 8 },
  { name: "Diabetes", m: 12, f: 13 },
  // { name: "Melhor Idade", m: 20, f: 7 },
  { name: "Gestante", m: 0, f: 17 },
];
export default function DoubleRadarChart() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <Box
              sx={{
                display: "inline-flex",
                width: 30,
                height: 10,
                borderRadius: "10px",
                backgroundColor: "#5CBFE2",
                marginRight: "0.5rem",
              }}
            />
            Masc.
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <Box
              sx={{
                display: "inline-flex",
                width: 30,
                height: 10,
                borderRadius: "10px",
                backgroundColor: "#FD9BE9",
                marginRight: "0.5rem",
              }}
            />
            Fem.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "600px",
            height: "320px",
          }}
        >
          <ResponsiveContainer>
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
        </Box>
      </Box>
    </>
  );
}
