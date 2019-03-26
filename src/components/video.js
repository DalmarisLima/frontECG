import React from 'react';
import { Row, Col } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>

                <Row>
                    <Col span={24}>
                        <iframe
                            width="100%"
                            height="600"
                            src="https://www.youtube.com/embed/vLdPL3xvq3M">
                        </iframe>
                    </Col>
                </Row>
            </div >
        )
    }
}