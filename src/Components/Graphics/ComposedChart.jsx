import React, { PureComponent } from 'react';
import { Grid, Typography, Box, Card } from "@mui/material";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '1 - 2 meses',
    Qtd: 5,
    mês: 800,
    mIU: 300,
  },
  {
    name: '3 - 4 meses',
    Qtd: 16,
    mês: 967,
    mIU: 506,
  },
  {
    name: '5 - 6 meses',
    Qtd: 13,
    mês: 1098,
    mIU: 989,
  },
  {
    name: '7 - 8 meses',
    Qtd: 14,
    mês: 1200,
    mIU: 928,
  },
  {
    name: '9 meses',
    Qtd: 2,
    mês: 1108,
    mIU: 1100,
  },

];
export default function OneLineGraphic({ config, datas }) {
  return (
    <>
    <Card sx={{ padding:1,   width:'100%' , height:242, marginTop:"1rem", marginRight:'1rem',marginLeft:'1rem', backgroundColor: "#F9F8F8"}}>
    <Typography
        sx={{ display: "flex", justifyContent: "left", }}
      >
      Estimativa período gestacional:
      </Typography>
    <Typography
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
      Quantidade x mIU/ml.
      </Typography>
    <ResponsiveContainer width="100%" height={200}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis datakey="Qtd"/>
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="mIU" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="mês" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
      </Card>
      </>
  );
}


