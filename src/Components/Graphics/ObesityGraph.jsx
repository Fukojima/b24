import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
const COLORS = ["#9AC0D8", "#75a6c5", "#6e8898"];
const data01 = [
  { name: "Obesidade I", value: 14, color: "#9AC0D8" },
  { name: "Obesidade II", value: 21, color: "#5f849b" },
  { name: "Obesidade Mórbida", value: 6, color: "#4a70890" },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];
const renderCustomizedLabel = ({ x, y, value }) => {
  return (
    <text
      x={x}
      y={y}
      fill={"rgba(0, 0, 0, 0.6)"}
      textAnchor="end"
      dominantBaseline="central"
    >
      {value}
    </text>
  );
};

export default function ObesityGraph() {
  return (
    <Card
      sx={{
        width: 290,
        marginTop: "1rem",
        marginLeft: "1rem",
        padding: 1,
        backgroundColor: "#F9F8F8",
      }}
    >
      <Typography
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Classificação
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          {" "}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              fontSize: "10px",
              marginBottom: "1rem",
              float: "left",
            }}
          >
            <CircleIcon
              fontSize="small"
              style={{ color: "#9AC0D8", marginRight: "0.2rem" }}
            />{" "}
            Obesidade I
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {" "}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              fontSize: "10px",
              float: "left",
            }}
          >
            <CircleIcon
              fontSize="small"
              style={{ color: "#75a6c5", marginRight: "0.2rem" }}
            />{" "}
            Obesidade II
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {" "}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              fontSize: "10px",
              float: "left",
            }}
          >
            <CircleIcon
              fontSize="small"
              style={{ color: "#6e8898", marginRight: "0.2rem" }}
            />{" "}
            Obesidade Mórbida
          </Typography>
        </Grid>
      </Grid>

      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}

            cx="50%"
            cy="50%"
            outerRadius={50}
            label={renderCustomizedLabel}
          >
            {" "}

          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
