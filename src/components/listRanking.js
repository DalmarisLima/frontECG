import React from 'react';
import {Statistic, Card, Row, Col, Icon, Avatar, Table } from 'antd';
import Tabela from './tableRanking';



export default class ListRanking extends React.Component{
    render(){
        return(
          <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row>
          <Col span={6}>
              <Card title= 'Rankink'>
                
              <Avatar src="https://img.icons8.com/color/96/000000/6-circle-c.png" />
                <Statistic
                  value={'Dr. Larissa'}
                  precision={2}
                  valueStyle={{ color: '#4682B4' }}
                  prefix={<Avatar src="https://img.icons8.com/office/40/000000/doctor-female.png" />}
                />
                <Avatar src="https://img.icons8.com/color/96/000000/medal2.png" />
                <Avatar src="https://img.icons8.com/color/48/000000/medal-second-place.png" />
                <Avatar src="https://img.icons8.com/color/96/000000/medal2-third-place.png" />
                <Avatar src="https://img.icons8.com/color/96/000000/stethoscope.png" />
              </Card>
            </Col>
            
            <Col span={18}>
              <Card>
              <div>
                 <Tabela/>
             </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Card>
              <Avatar src="https://img.icons8.com/color/96/000000/7-circle-c.png" />
                <Statistic
                 value={'Dr. Pedro'}
                 precision={2}
                 valueStyle={{ color: '#4682B4' }}
                 prefix={<Avatar src="https://img.icons8.com/office/40/000000/doctor-male.png" />}
                />
                <Avatar src="https://img.icons8.com/color/96/000000/medal2.png" />
                <Avatar src="https://img.icons8.com/color/48/000000/medal-second-place.png" />
              </Card>
            </Col>
            </Row>

            <Row>
            <Col span={6}> 
              <Card>
              <Avatar src="https://img.icons8.com/color/96/000000/8-circle-c.png" />
                <Statistic
                  value={'Dr. Carlos'}
                  precision={2}
                  valueStyle={{ color: '#4682B4' }}
                  prefix={<Avatar src="https://img.icons8.com/office/40/000000/doctor-male.png" />}
                />
                <Avatar src="https://img.icons8.com/color/96/000000/medal2.png" />
              </Card>
            </Col>
          </Row>
        </div>
        );
    }
}