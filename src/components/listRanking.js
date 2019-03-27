import React from 'react';
import { List, Avatar, Card, Row, Col, Typography, Divider } from 'antd';

const { Title } = Typography;
const { Text } = Typography;

export default class ListRanking extends React.Component {

  render() {
    return (
      <div>

        <Row>
          <Col span={24}>

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
        </Row>
      </div>
    );
  }
}