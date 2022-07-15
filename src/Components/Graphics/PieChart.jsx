import React from "react";
import { Card, Typography,Grid } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import CircleIcon from '@mui/icons-material/Circle';
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
export default function PieGraph({ config, datas }) {
  return (
    <Card sx={{ width: 290, marginTop:"1rem", marginLeft:"1rem", padding:1, backgroundColor: "#F9F8F8" }}>
       <Typography
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Total pacientes
      </Typography>
      <Grid container><Grid item xs={4}>  <Typography
        sx={{ display: "flex", justifyContent: "left", alignItems: "left" ,fontSize:"10px", marginBottom:"1rem" ,float:"left"}}
      >
      <CircleIcon fontSize="small"  style={{ color: '#9AC0D8',marginRight:'0.2rem' }}/>  Positivas
      </Typography></Grid></Grid>

      <Typography
        sx={{ display: "flex", justifyContent: "left", alignItems: "left", fontSize:"10px", float:"left"}}
      >
            <CircleIcon fontSize="small" style={{ color: '#5f849b', marginRight:'0.2rem' }}/> Negativas
      </Typography>
     
     
      <ResponsiveContainer width="100%" height={150}>
     
        <PieChart
        style={{ marginTop:"-2rem" }}
          radius={PieChart.defaultProps.radius - shiftSize}
          segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
          animate={true}
          label={({ dataEntry }) => dataEntry.value}
          labelStyle={{
            ...defaultLabelStyle,
          }}
          data={[
            { title: "Negativa", value: 33, color: "#dc7de7" },
            { title: "Positiva", value: 63, color: "#9AC0D8" },
          ]}
        />
      </ResponsiveContainer>
    </Card>
  );
}
