import React, { useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import Card from "@mui/material/Card";

function AreaGraph({ datas, config,  value }) {


  const CustomTooltip = ({ active, payload, label }) => {


    if (active && payload && payload.length) {

      return (

      
                <Card    sx={{
                  padding:1
                }}>
                <p style={{fontSize:10}}>Data: {`${label}`}</p>
                <p style={{fontSize:10}}>Valor: {` ${payload[0].value}`}</p>
                <p style={{fontSize:10}}>Queda: {` ${payload[0].value}`}</p>
                </Card>
             
            );
    

      


    }
  
    return null;
  };
  


  const areas = config.map((value) => {
 
    return (
      <Area
        type="monotone"
        dataKey={value.key}
        stroke="url(#colorPv)"
        stackId="1"

        fill="url(#colorUv) "
      />
    );
  });

  return (

      <Card sx={{ minWidth: 345, width:860 , marginTop:"2rem"}}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={datas}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
            stroke="#233767"
            strokeDasharray="1"
            vertical={false}
          />
            <XAxis dataKey="name" />
            <YAxis dataKey="uv" />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3EFFE8" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#313131" stopOpacity={0.5} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3EFFE8" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#62FF00" stopOpacity={0.5} />
              </linearGradient>
            </defs>

            {areas}
          </AreaChart>
        </ResponsiveContainer>
      </Card>

  );
}

export default AreaGraph;
