import React from 'react';
import { Row, Col } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>

                <Row>
                    <Col span={12} offset={4}>
                        <embed
                            src="Eletrofisiologia do Coração (PRONTO).pdf "
                            width="760" height="500"
                            type='application/pdf'>
                        </embed>
                    </Col>
                </Row>
            </div >
        )
    }
}  
