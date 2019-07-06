import React from 'react';
import { Col, Row, Progress, Avatar } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <img src="https://img.icons8.com/dusk/100/000000/babys-room.png"/>
                    </Col>
                    <Col span={12}>
                    
                    <img src="https://img.icons8.com/dusk/64/000000/medical-doctor.png"/>
                    </Col>
                    <Col span={12}>
                    <img src="https://img.icons8.com/dusk/64/000000/doctor-female.png"/>
                    </Col>
                </Row>
            </div >
        )
    }
} 