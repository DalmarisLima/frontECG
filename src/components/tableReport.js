import React from 'react';
import { Table, Card, Typography, Row, Col, Popover, Icon } from 'antd';
import cora from "./cora.svg";

const { Title } = Typography;


const content = (
    <div>
        <Title level={4}>
            <p>Aqui você tem acesso a um resumo sobre sua utilização do material de estudo.</p>
            <p>Nosso tour chegou ao fim! Obrigada por visitar o ECG Tutor! Agora você já pode avaliá-lo.</p>
            <p> É só clicar no ícone AVALIAR O ECG TUTOR e responder ao questionário.</p>
        </Title>
    </div>
);

const columns = [{
    title: 'Texto',
    dataIndex: 'texto',
}, {
    title: 'Vídeo',
    dataIndex: 'video',

}, {
    title: 'Praticar',
    dataIndex: 'praticar',
}, {
    title: 'Caso Clínico',
    dataIndex: 'caso',
}];

const data = [{
    key: '1',
    texto: 'Entendendo o traço eletrocardiografico Normal',
    video: '12 Lead ECG Explained, Animation',
    praticar: 'Praticar Nível 2',
    caso: 'Caso Clínico Nível 2',
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