import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Layout } from 'antd';
import { Container } from 'react-bootstrap';


const data = [
  { name: 'Data 1', Evolution: 0, amt: 0 },
  { name: 'Data 2', Evolution: 50, amt: 50 },
  { name: 'Data 3', Evolution: 20, amt: 20 },
  { name: 'Data 4', Evolution: 30, amt: 30 },
  { name: 'Data 5', Evolution: 100, amt: 100 },
  { name: 'Data 6', Evolution: 75, amt: 75 },
  { name: 'Data 7', Evolution: 80, amt: 80 },
];

export default class grafico extends Component {
  render() {
    return (

      <Container>
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Line
            type='monotone'
            dataKey='Evolution'
            stroke='#0097A7'
            activeDot={{ r: 8 }}
          />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <YAxis />
          <XAxis dataKey='name' />
          <Legend />
        </LineChart>
      </Container>

    );
  }
}

