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
    month: "Jan",

    value: 6,
  },
  {
    month: "Fev",

    value: 8,
  },
  {
    month: "Mar",

    value: 10,
  },
  {
    month: "Abr",

    value: 7,
  },
  {
    month: "Mai",

    value: 8,
  },
  {
    month: "Jun",

    value: 8,
  },
  {
    month: "Jul",

    value: 8,
  },
  {
    month: "Ago",

    value: 10,
  },
  {
    month: "Set",

    value: 12,
  },
  {
    month: "Out",

    value: 15,
  },
  {
    month: "Nov",

    value: 9,
  },
  {
    month: "Dez",

    value: 17,
  },
];
export default function InfoBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Card sx={{ marginTop: "2rem" }}>
        <BarChart
          layout="horizontal"
          width={750}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" type="category" />
          <YAxis />

          <Bar dataKey="value" fill="#9AC0D8" />
        </BarChart>
      </Card>
    </ResponsiveContainer>
  );
}
