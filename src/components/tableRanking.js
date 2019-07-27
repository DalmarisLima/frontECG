import React from 'react';
import { List, Card, Row, Col, Typography, Popover, Icon } from 'antd';
import cora from "./cora.svg";

const { Title } = Typography;
const content = (
    <div>
        <Title level={4}><p>Aqui você pode visualizar um resumo de todas as suas conquistas a cada nível concluído. </p>
            <p>Para conhecer quais são os níveis, clique em <Icon type="snippets" style={{ fontSize: "20px" }} /><span>Material de Estudos</span> – Nível 2.</p>
        </Title>

    </div>
);

const data = [
    {
        title: 'Nível 1',
    },
    {
        title: 'Nível 2',
    },
    {
        title: 'Nível 3',
    },
    {
        title: 'Nível 4',
    },

];


export default class Tabela extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <List
                            grid={{
                                gutter: 24, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1,
                            }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Card title={item.title} type="inner">
                                        <img src="https://img.icons8.com/dusk/64/000000/trophy.png" />
                                        <img src="https://img.icons8.com/dusk/64/000000/prize.png" />
                                        <img src="https://img.icons8.com/dusk/64/000000/medal2.png" />
                                    </Card>

                                </List.Item>

                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Popover content={content} placement="top"
                            trigger="hover">
                            <img
                                src={cora}
                                className="Cora"
                                alt="cora"
                                style={{ marginLeft: "250px" }}
                            />
                        </Popover>
                    </Col>
                </Row>
            </div>
        );
    }
}

