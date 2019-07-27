import React from 'react';
import { Table, Card, Typography, Row, Col, Popover, Icon } from 'antd';
import cora from "./cora.svg";

const { Title } = Typography;


const content = (
    <div>
        <Title level={4}><p>Aqui você tem acesso a um resumo sobre sua utilização do material de estudo, acessos e pontuação.</p>
        <p>Nosso Tuor chegou ao fim. Espero que tenha gostado, agora clique em <Icon type="star" style={{ fontSize: "20px" }} />
              <span>Avaliar o TUTOR DE ECG e responda o questionario.</span></p>
              <p>Até Logo!</p> </Title>
    </div>
);

const columns = [{
    title: 'Assuntos',
    dataIndex: 'assuntos',
}, {
    title: 'Texto',
    dataIndex: 'texto',

}, {
    title: 'Vídeo',
    dataIndex: 'video',
}, {
    title: 'Praticar',
    dataIndex: 'praticar',
}];

const data = [{
    key: '1',
    assuntos: 'Assunto 1',
    texto: 'Texto 1',
    video: 'Vídeo 1',
    praticar: 'Pratica 1',
}, {
    key: '2',
    assuntos: 'Assunto 2',
    texto: 'Texto 2',
    video: 'Vídeo 2',
    praticar: 'Praticar 2',
}];
export default class Tabela extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card
                            type="inner"
                            title={<Title level={4}>Conteúdos</Title>}>
                            <Table columns={columns} dataSource={data} size="middle" pagination={false} />
                        </Card>
                    </Col>
                    <Popover content={content} placement="top"
              trigger="hover">
              <img
                src={cora}
                className="Cora"
                alt="cora"
                style={{ marginLeft: "250px" }}
              />
              
            </Popover>
                </Row>
            </div>
        );
    }
}