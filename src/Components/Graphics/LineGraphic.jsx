import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import montserrat from 'typeface-montserrat';

function LineGraphic({ datas}) {

  const config = [{ key:"alta", color:"#47B900", title:<span style={{display: "inline-flex"}}> Altas próximos <br/> 3 dias </span>},{ key:"entrada", color:"#F32A28",title:<span style={{display: "inline-flex"}}> Entradas<br/> próximos  3 dias </span> },{ key:"internacao", color:"#11528B",title:<span style={{display: "inline-flex"}}> Internações <br/>próximos  3 dias </span> } ]


  const lines = config.map((val) => {
    return (
      <Line
        dataKey={val.key}
        strokeWidth={3}
        type="monotone"
        stroke={val.color}
        dot={false}
      />
    );
  });

  return (
 
 
      <ResponsiveContainer width="100%" height="100%">
  
        <LineChart
          width={500}
          height={200}
         
          data={datas}
          margin={{
            top: 30,
            right: 5,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#233767" strokeDasharray="1" vertical={false} />
          <XAxis dataKey="data" tick={{fontSize: 10,fill: 'white'}}/>
          <YAxis domain={[0, 100]} interval={0} tickCount={5}   tick={{fontSize: 10,fill: 'white'}}/>
          {lines}
          <Tooltip />

          <Legend
            layout="vertical"
            iconType="square"

            payload={config.map((v) => ({
              type:"square",
              value: <span style={{color:'white', fontSize:8, fontFamily:{montserrat}}}>{v.title}</span>,
              color: `${v.color}`
            }))}
            verticalAlign="middle"
            iconSize={8}
            align="right"
            wrapperStyle={{
              position: 'absolute',
              marginRight: -15
          }}
          />
        </LineChart>
      </ResponsiveContainer>

  );
}

export default LineGraphic;
