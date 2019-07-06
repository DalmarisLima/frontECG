import React from 'react';
import { Card, Col, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import cora from './Cora.png';



export default class Carosel extends React.Component {
    render() {
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={16}>
                        <img src={cora} className="Cora" alt="cora" />
                    </Col>
                    <Col span={16}>
                        <Card title="Passo 1" bordered={false}>
                            <Paragraph strong={true}> <p>Olá! Eu sou a Cora e estou aqui para ajudar a navegar no ECG Tutor.</p>
                                <p> O ECG tutor é um sistema com inteligência artificial capaz de individualizar seu aprendizado,
                             além de conter tecnologia de gamificação, para que você se sinta engajado e motivado com seus estudos.</p>

                                <p>O curso é composto por etapas, sendo possível desbloquear a próxima etapa apenas após concluir a anterior.
                                Antes de iniciar a primeira fase, você deve escolher um Avatar. Vamos lá? É só clicar na área de perfil do usuário no canto superior direito da tela.
                             Inicialmente, seu Avatar ainda é um bebê, mas poderá evoluir após a conclusão da primeira fase.</p>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
}