import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Abreu e Lima",
    pv: 32,

  },
  {
    name: "Igarassu",
    pv: 30,

  },
  {
    name: "Recife",
    pv: 28,

  },
  {
    name: "Itapissuma",
    pv: 8,

  },
  {
    name: "Olinda",
    pv: 12,

  },

];
const tickFormatter = (value, index) => {
  const limit = 20; // put your maximum character
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}...`;
};

export default function VerticalBarChart() {

  return (
    <Card sx={{  width:700 , height:242, marginTop:"1rem",  backgroundColor: "#F9F8F8"}}>
    <Typography
sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
color="text.secondary"
gutterBottom
>
Alocação demográfica:
</Typography>
    <ResponsiveContainer width="100%" height={200}>


        <BarChart
          layout="vertical"
          width={200}
          height={200}
          data={data}
        >
          <XAxis  type="number" />
          <YAxis textAnchor= "end"    width={120}
 sclaeToFit="true" verticalAnchor= "start"  interval={0}  dataKey="name" type="category" />
          <defs>
              <linearGradient id="colorTv" x1="0" y1="1" x2="1" y2="1">
                <stop offset="20%" stopColor="#4aff5f" stopOpacity={0.2} />
                <stop offset="80%" stopColor="#4aff5f" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          <Bar  dataKey="pv"    fill="url(#colorTv) " />
        </BarChart>


    </ResponsiveContainer>
    </Card>
  );
}
