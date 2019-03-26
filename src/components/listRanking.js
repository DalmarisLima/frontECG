import React from 'react';
import { List, Avatar, Card, Row, Col } from 'antd';

export default class ListRanking extends React.Component {

  render() {
    return (
      <div>


        <Row gutter={16}>
          <Col span={12}>
            <Card>
              Inner Card content
          </Card>
          </Col>
          <Col span={12}>
            <Card>
              Inner Card content
          </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Card>
              Inner Card content
          </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Card>
              Inner Card content
          </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Card>
              Inner Card content
          </Card>
          </Col>
        </Row>



      </div>
    );
  }
}