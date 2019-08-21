import React from 'react';
import { Table, Card, Typography, Row, Col, Popover, Progress } from 'antd';
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
    texto: <div>Entendendo o traço eletrocardiografico Normal  <Progress type="circle" percent={100} width={30} size={"small"} /> </div>,
    video: <div>12 Lead ECG Explained, Animation <Progress type="circle" percent={50} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={70} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={50} width={30} size={"small"} /></div>,
},
{
    key: '2',
    texto: <div>Colaboração dos eltrodos no paciente<Progress type="circle" percent={0} width={30} size={"small"} /> </div>,
    video: <div>Colaboração dos eltrodos no paciente<Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
},
{
    key: '3',
    texto: <div>Papel de ECG, tempo e voltagem <Progress type="circle" percent={0} width={30} size={"small"} /> </div>,
    video: <div>Papel de ECG, tempo e voltagem <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
},
{
    key: '4',
    texto: <div>Traçado eletrocardiográfico <Progress type="circle" percent={0} width={30} size={"small"} /> </div>,
    video: <div>Traçado eletrocardiográfico <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
},{
    key: '5',
    texto: <div>Eixo Eletrico <Progress type="circle" percent={0} width={30} size={"small"} /> </div>,
    video: <div>Eixo Eletrico <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
},{
    key: '6',
    texto: <div>Ritmo <Progress type="circle" percent={0} width={30} size={"small"} /> </div>,
    video: <div>Ritmo<Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
},{
    key: '7',
    texto: <div>Frequência Cardiaca<Progress type="circle" percent={0} width={30} size={"small"} /> </div>,
    video: <div>Frequência Cardiaca<Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    praticar: <div>Praticar Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
    caso: <div>Caso Clínico Nível 2 <Progress type="circle" percent={0} width={30} size={"small"} /></div>,
},
];
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