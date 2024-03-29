import React, { useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Grid, Typography, Box, Card } from "@mui/material";
import { format, differenceInYears } from "date-fns/esm";

const _ = require('lodash');
function AreaGraph({ datas, config, value }) {
  
  let formatedDates = datas.map((item) => {
    //return differenceInYears(new Date(), new Date(item.birthDate))

    return { uv: differenceInYears(new Date(), new Date(item.birthDate)) };
  });
   let groupDates = _.groupBy(formatedDates)
  const areas = config?.map((value) => {
    return (
      <Area
        //type="monotone"
        dataKey={value.key}
        stroke="url(#colorPv)"
        stackId="1"
        fill="url(#colorUv) "
      />
    );
  });

  return (
    <Card sx={{ width: "50%", margin: "1rem", backgroundColor: "#F9F8F8" }}>
      <Typography
        sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
        Faixa etária:
      </Typography>
      <ResponsiveContainer height={200}>
        <AreaChart
          data={formatedDates}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            //stroke="#233767"
            strokeDasharray="0"
            vertical={false}
            //horizontal={false}
          />
          <XAxis dataKey="name" />
          <YAxis dataKey="uv" />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#4aff5f" stopOpacity={0.5} />
              <stop offset="70%" stopColor="#4aff5f" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3EFFE8" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#4aff5f" stopOpacity={0.5} />
            </linearGradient>
          </defs>

          {areas}
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default AreaGraph;
