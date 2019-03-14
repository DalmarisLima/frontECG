import React from 'react';
import { Col, Row, Progress, Avatar } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={6}>
                    <Avatar src="https://img.icons8.com/dusk/100/000000/babys-room.png"/>
                    
                        <Progress
                            status="active"
                            strokeColor='#6CB6C9'
                            strokeWidth="25px"
                            percent={50} format={() =>  <Avatar src="https://img.icons8.com/dusk/64/000000/doctor-female.png"/>}/>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div >
        )
    }
} 