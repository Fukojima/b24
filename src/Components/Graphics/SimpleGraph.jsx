import React, { PureComponent } from 'react';
import Card from '@mui/material/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  { name: '17/01', uv: 5390 },

  
];

export default class SimpleGraph extends PureComponent {


  render() {
    return (
      <div style={{ width: '100%', marginTop:'2rem' }}>

<Card>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="1" horizontalFill={['#555555', '#444444']} fillOpacity={0.2}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="linear" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        </Card>
      </div>
    );
  }
}
