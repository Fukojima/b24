import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const _ = require('lodash');


export default function VerticalBarChart({data}) {


  let alocation = _.groupBy(data, "uf");
  let ufArray = Object.keys(alocation)
  let final = ufArray.map((uf) =>({ uf:uf, pv:alocation[uf].length}))
 
  console.log("final", final)

  return (
    <Card sx={{   width:'50%' , height:242, marginTop:"1rem", marginRight:'1rem', backgroundColor: "#F9F8F8"}}>
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
          data={final}
        >
          <XAxis  type="number" />
          <YAxis textAnchor= "end"    width={120}
 sclaeToFit="true" verticalAnchor= "start"  interval={0}  dataKey="uf" type="category" />
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
