import React from 'react';
import { Row, Col } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>

                <Row>
                    <Col span={12} offset={6}>
                        <iframe
                            width="500"
                            height="300"
                            src="https://www.youtube.com/embed/vLdPL3xvq3M">
                        </iframe>
                    </Col>
                </Row>
            </div >
        )
    }
}