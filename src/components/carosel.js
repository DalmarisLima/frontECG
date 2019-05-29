import React from 'react';
import { Card, Col, Row } from 'antd';
import { Carousel } from 'antd';
import cora from './cora.svg';


export default class Carosel extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <div style={{ padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                        <Col span={16}>
                            <Card title="Passo 1" bordered={false}>
                                Olá! Eu sou a Cora e estou aqui para ajudar a navegar no ECG Tutor.
                                  </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Card title="Passo 2" bordered={false}>
                                O ECG tutor é um sistema com inteligência artificial capaz de individualizar seu aprendizado, além de conter tecnologia de gamificação, para que você se sinta engajado e motivado com seus estudos.
                                  </Card>
                        </Col>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                        <Col span={16}>
                            <Card title="Passo 3" bordered={false}>
                                O curso é composto por etapas, sendo possível desbloquear a próxima etapa apenas após concluir a anterior. Antes de iniciar a primeira fase, você deve escolher um Avatar. Vamos lá? É só clicar na área de perfil do usuário no canto superior direito da tela.
                                  </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Card title="Passo 4" bordered={false}>
                                Inicialmente, seu Avatar ainda é um bebê, mas poderá evoluir após a conclusão da primeira fase.
                                  </Card>
                        </Col>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                        <Col span={16}>
                            <Card title="Passo 5" bordered={false}>
                                Se já escolheu seu Avatar, seria interessante acessar o Ranking.
                                  </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Card title="Passo 6" bordered={false}>
                                Seus acertos serão convertidos em pontos e acumulados progressivamente. Se for de sua vontade participar, você poderá visualizar sua posição no ranking com todos os alunos participantes do ECG tutor.
                                  </Card>
                        </Col>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                    </Row>
                </div>
                <div>
                <Row gutter={16}>
                        <Col span={8}>
                            <img src={cora} className="Cora" alt="cora" />
                        </Col>
                        <Col span={16}>
                            <Card title="Passo 7" bordered={false}>
                            Vamos acessar o material de estudos agora?
                                  </Card>
                        </Col>
                    </Row>
                </div>

            </Carousel>

        );
    }
}