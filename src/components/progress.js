import React from 'react';
import { Row, Col, Progress } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>

                <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6 }} >Logo</Col>
                    <Col xs={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 6 }}  ></Col>
                    <Col xs={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 2 }}>
                        <Progress
                            status="active"
                            strokeColor='#6CB6C9'
                            strokeWidth="25px"
                            showInfo={false}
                            percent={50} />
                    </Col>
                </Row>

            </div >
        )
    }
}  