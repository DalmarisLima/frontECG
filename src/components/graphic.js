import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar} from 'recharts';
  import {Card, Typography} from 'antd';
  const { Title } = Typography;


const data = [
  { name: 'Início', Desempenho: 0, amt: 0 },
  { name: 'Nível 1', Desempenho: 30 , amt: 30 },
  { name: 'Nível 2', Desempenho: 50, amt: 50 },
  { name: 'Nível 3', Desempenho: 20, amt: 20 },
  { name: 'Nível 4', Desempenho: 30, amt: 30 },

];

export default class Graphic extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7j5bbbum/';

  render() {
    return (

      <Card
              type="inner"
              title={<Title level={4}>Evolução</Title>}>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Desempenho" stroke='#6CB6C9' fill='#6CB6C9' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </Card>
    );
  }
}

