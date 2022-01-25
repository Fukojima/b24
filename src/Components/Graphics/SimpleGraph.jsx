import React, { PureComponent } from 'react';
import Card from '@mui/material/Card';
import { Area,AreaChart, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';







const data = [
  { name: '01/01', uv: 4000 },
  { name: '02/01', uv: 3000 },
  { name: '03/01', uv: 2000 },
  { name: '04/01', uv: 1890 },
  { name: '05/01', uv: 2390 },
  { name: '06/01', uv: 3490 },
  { name: '07/01', uv: 900 },
  { name: '08/01', uv: 5000 },
  { name: '09/01', uv: 3000 },
  { name: '10/01', uv: 2990 },
  { name: '11/01', uv: 3190 },
  { name: '12/01', uv: 3490 },
  { name: '13/01', uv: 3490 },
  { name: '14/01', uv: 3500 },
  { name: '15/01', uv: 5000 },
  { name: '16/01', uv: 4890 },
  

  
];

export default class SimpleGraph extends PureComponent {


  render() {
    return (
      <div style={{ width: '100%', marginTop:'2rem' }}>

<Card>
<ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </Card>
      </div>
    );
  }
}
