import React from "react";
import Card from "@mui/material/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
export default function VerticalBarChart() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Card
          sx={{
            padding: 1,
          }}
        >
          <p style={{ fontSize: 10 }}>Data: {`${label}`}</p>
          <p style={{ fontSize: 10 }}>Valor: {` ${payload[0].value}`}</p>
          <p style={{ fontSize: 10 }}>Queda: {` ${payload[0].value}`}</p>
        </Card>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <Card sx={{ marginTop: "2rem" }}>

        <BarChart
          layout="vertical"
          width={400}
          height={185}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />

          <Bar dataKey="pv" fill="#9AC0D8" />
        </BarChart>

    </Card>
    </ResponsiveContainer>
  );
}
