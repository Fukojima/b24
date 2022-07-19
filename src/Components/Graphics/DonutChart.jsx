import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer,Cell } from 'recharts';
 import {Card, Typography} from "@mui/material";

const data = [
  { name: 'DOT', value: 1},
  { name: 'SUSHI', value: 2 },
  { name: 'DODO', value: 1 },
  { name: 'LINK', value: 7 },
  { name: 'ATOM', value: 7 },
  { name: 'LUNA', value: 10 },
  { name: 'ANT', value: 5 },
  { name: 'SOL', value: 12 },
];
const COLORS = ['#8ebde6', '#6f8ee2', '#2d2c63', '#a579b9','#9e74a3', '#d69ed1', '#fdcbdb', '#74136b'];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius}
        outerRadius={outerRadius}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
     
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`( ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class DonuChart extends PureComponent {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
<Card sx={{ minWidth: 345,  marginTop: "2rem", padding:5 }}>
<Typography
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Carteira de Ativos
      </Typography>
      <ResponsiveContainer  height={375}>

        <PieChart width={200} height={200}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            label
            fill="#8884d8"
       
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          >        	{
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }</Pie>
        </PieChart>
     
      </ResponsiveContainer>
      </Card>
    );
  }
}