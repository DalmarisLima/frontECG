import React from 'react';
import { List, message, Avatar, Spin, Divider, Row, Col } from 'antd';






export default class ListRanking extends React.Component {

  render() {
    return (
      <div className="demo-infinite-container">
        <List>

          <Divider orientation="left">
            <img src="https://img.icons8.com/dusk/64/000000/2-circle.png" />
            <Avatar src="https://img.icons8.com/dusk/64/000000/chevron-down.png" />
            Dr ª. Larissa
            </Divider>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Quadro:</Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <img src="https://img.icons8.com/dusk/64/000000/trophy.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/medal2.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/prize.png"></img>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
          </Row>


          <Divider orientation="left">
            <img src="https://img.icons8.com/dusk/64/000000/4-circle.png" />
            <Avatar src="https://img.icons8.com/dusk/64/000000/chevron-up.png" />
            Dr. Eu
            </Divider>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Quadro:</Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <img src="https://img.icons8.com/dusk/64/000000/trophy.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/medal2.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/prize.png"></img>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
          </Row>


          <Divider orientation="left">
            <img src="https://img.icons8.com/dusk/64/000000/5-circle.png" />
            <Avatar src="https://img.icons8.com/dusk/64/000000/chevron-up.png" />
            Dr. Pedro
            </Divider>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Quadro:</Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <img src="https://img.icons8.com/dusk/64/000000/trophy.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/medal2.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/prize.png"></img>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
          </Row>


        </List>
      </div>
    );
  }
}