import React from 'react';
import { Row, Col } from 'antd';


export default class Tabela extends React.Component {
    render() {
        return (
            <div>

                <Row>
                    <Col span={24} >
                        <embed
                            src="Eletrofisiologia do Coração (PRONTO).pdf "
                            width="100%" 
                            height="800"
                            type='application/pdf'>
                        </embed>
                    </Col>
                </Row>
            </div >
        )
    }
}  
