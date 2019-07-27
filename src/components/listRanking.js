import React from 'react';
import { List, Avatar, Card, Row, Col, Typography, Divider, Popover } from 'antd';
import cora from './cora.svg';

const { Title } = Typography;
const { Text } = Typography;
const content = (
  <div>

    <Title  level={4}><p>Seus acertos serão convertidos em pontos e acumulados progressivamente.</p>
    <p> Se for de sua vontade participar, você poderá visualizar sua posição no ranking em relação</p>
    <p> aos outros participantes do ECG tutor. Agora clique em Conquista.</p>
    </Title>
  </div>
);

export default class ListRanking extends React.Component {

  render() {
    return (
      <div>

        <Row>
          <Col span={12}>

            <Card
              type="inner"
              title={<Title level={4}>Ranking</Title>}>

              <Row>
                <Row>
                  <Col span={1}>
                    <Avatar size="large" src="https://img.icons8.com/dusk/64/000000/babys-room.png" />
                    <Title level={4}>Você</Title>
                  </Col>
                  <Col span={23}>
                    <Divider orientation="right"><Title level={5}>20000</Title></Divider>
                  </Col>
                </Row>


                <Row>
                  <Col span={1}>
                    <Avatar size="default" src="https://img.icons8.com/dusk/64/000000/medical-doctor.png" />
                    <Text strong={true}>Pedro</Text>
                  </Col>
                  <Col span={23}>
                    <Divider orientation="right"><Title level={4}>20000</Title></Divider>
                  </Col>
                </Row>
                <Row>
                  <Col span={1}>
                    <Avatar size="default" src="https://img.icons8.com/dusk/64/000000/doctor-female.png" />
                    <Text strong={true}>Maria</Text>
                  </Col>
                  <Col span={23}>
                    <Divider orientation="right"><Title level={4}>20000</Title></Divider>
                  </Col>
                </Row>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
          <Popover content={content} placement="top"
                            trigger="hover">
                            <img
                                src={cora}
                                className="Cora"
                                alt="cora"
                                style={{ marginLeft: "250px" }}
                            />
                        </Popover>
          </Col>
        </Row>
      </div>
    );
  }
}