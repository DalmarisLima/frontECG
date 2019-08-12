import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar
} from 'recharts';
import { Card, Typography, Row, Col, Popover } from 'antd';
import cora from "./cora.svg";

const { Title } = Typography;


const content = (
  <div>
    <Title level={4}>
      <p>Aqui, posso sinalizar seus pontos fortes e fracos, fornecendo dicas</p>
      <p>para um melhor aproveitamento. No gráfico, podemos ver seu progresso e</p>
      <p>número de acertos a cada nível.</p>
      <p>Agora, vamos dar olhada nos conteúdos que você já viu. Vamos lá, clique em CONTEÚDOS.</p>

    </Title>

  </div>
);

const data = [
  { name: 'Início', Acertos: 0, amt: 0 },
  { name: 'Nível 1', Acertos: 0, amt: 0 },
  { name: 'Nível 2', Acertos: 3, amt: 3 },
  { name: 'Nível 3', Acertos: 0, amt: 0 },
  { name: 'Nível 4', Acertos: 0, amt: 0 },

];

export default class Graphic extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7j5bbbum/';

  render() {
    return (

      <Row>
        <Col span={12}>
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
                  <Area type="monotone" dataKey="Acertos" stroke='#6CB6C9' fill='#6CB6C9' />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Popover content={content} placement="leftBottom"
          trigger="hover">
          <img
            src={cora}
            className="Cora"
            alt="cora"
            style={{ marginLeft: "250px" }}
          />
        </Popover>
      </Row>
    );
  }
}

