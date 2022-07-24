import React from "react";
import { Card, Typography, Grid, Box } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import CircleIcon from "@mui/icons-material/Circle";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const defaultLabelStyle = {
  fontSize: "8px",
};
const shiftSize = 7;
export default function PieGraph({ config, datas, qt }) {
  const daa = [
    { title: "Negativa", value: 33, color: "#dc7de7" },
    { title: "Positiva", value: 63, color: "#9AC0D8" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#6462E8",
          fontFamily: "Rubik",
          fontWeight: "bold",
        }}
      >
        Total de pacientes:{" "}
        <Typography
          variant="inherit"
          fontWeight="bold"
          sx={{
            color: "#6462E8",
          }}
          component="span"
        >
          {qt}
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <CircleIcon fontSize="small" style={{ color: "#9AC0D8" }} />
          <Typography>Masc</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <CircleIcon fontSize="small" style={{ color: "#dc7de7" }} />
          <Typography>Fem</Typography>
        </Box>
      </Box>

      <ResponsiveContainer width="100%" height={150}>
        <PieChart
          radius={PieChart.defaultProps.radius - shiftSize}
          segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
          animate={true}
          outerRadius={50}
          label={({ dataEntry }) => `${dataEntry.value}%`}
          labelStyle={{
            ...defaultLabelStyle,
          }}
          data={datas}
        />
      </ResponsiveContainer>
    </Box>
  );
}
