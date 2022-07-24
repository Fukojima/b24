import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
const _ = require("lodash");

export default function VerticalBarChart({ data }) {
  let alocation = _.groupBy(data, "uf");
  let ufArray = Object.keys(alocation);
  let final = ufArray.map((uf) => ({ uf: uf, pv: alocation[uf].length }));
  return (
    <Box
      sx={{
        marginLeft: "-100px",
      }}
    >
      <ResponsiveContainer width="100%" height={242}>
        <BarChart layout="vertical" width={200} height={200} data={final}>
          <XAxis type="number" />
          <YAxis
            textAnchor="end"
            width={120}
            sclaeToFit="true"
            verticalAnchor="start"
            interval={0}
            dataKey="uf"
            type="category"
          />
          <defs>
            <linearGradient id="colorTv" x1="0" y1="1" x2="1" y2="1">
              <stop offset="20%" stopColor="#6462E8" stopOpacity={0.2} />
              <stop offset="80%" stopColor="#6462E8" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <Bar dataKey="pv" fill="url(#colorTv) " />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
