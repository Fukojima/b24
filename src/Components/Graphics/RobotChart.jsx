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

function RobotChart({ datas, config,  value }) {


  const CustomTooltip = ({ active, payload, label }) => {


    if (active && payload && payload.length) {

      return (

      
                <Card    sx={{
                  padding:1
                }}>
                <p style={{fontSize:10}}>Data: {`${label}`}</p>
                <p style={{fontSize:10}}>Valor: {` ${payload[0].value}`}</p>
            
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


        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={datas}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
  
            <XAxis interval={1} dataKey="name" />
            <YAxis dataKey="uv" />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#af7ec5" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#71c4bd" stopOpacity={0.5} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3EFFE8" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#9571aa" stopOpacity={0.5} />
              </linearGradient>
            </defs>

            {areas}
          </AreaChart>
        </ResponsiveContainer>


  );
}

export default RobotChart;
