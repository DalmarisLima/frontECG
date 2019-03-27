import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Row, Col, Divider, Typography, Card } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import Paragraph from 'antd/lib/typography/Paragraph';
import { AST_Label } from 'terser';

const styles = {
    root: {
        width: 500,
    },
};
const { Title } = Typography;

function PositionedTooltips(props) {
    const { classes } = props;
    return (

        <div>

<Card
       type="inner"
       title= {<Title level={4}>Não sei a Nomeclatura Aprpriada</Title>}
    >
            <Row>
                <Col span={24}>
                    <Divider orientation="left"> <Title level={3}>Nível 1: Eletrofisiologia cardíaca</Title></Divider>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex" justify="center">
                        <Col span={8}>
                        </Col>
                        <Col span={8}><Progress
                            type="circle"
                            percent={100} format={() => <img src="https://img.icons8.com/dusk/48/000000/heart-with-pulse.png" />}
                            width='100px'
                            strokeWidth='10' />
                            <Paragraph strong={true}>Potencial de ação</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex" justify="center">
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={20} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeColor='#6CB6C9'
                                strokeWidth='10' />
                            <Paragraph strong={true} >Geração /Formação e Condução / Propagação do estímulo</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}><Progress
                            type="circle"
                            percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                            width='100px'
                            strokeWidth='10' />
                            <Paragraph strong={true} >Células cardíacas: elétricas (rápidas e lentas) e miocárdicas</Paragraph>
                        </Col>
                    </Row>


                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Bases da eletrocardiografian(teoria do dipolo, vetores e ondas)</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>


                    <Divider orientation="left" style={{ marginTop: "40px" }}> <Title level={3}>Nível 2: Entendendo o traçado eletrocardiográfico normal</Title></Divider>


                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Derivações do ECG e Triângulo de Einthoven</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeColor='#6CB6C9'
                                strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Colocação dos eletrodos no paciente</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Papel do ECG - tempo e voltagem</Paragraph>
                        </Col>
                    </Row>

                    <Row style={{ marginLeft: "100px", marginTop: "80px" }} type="flex">
                        <Col span={6}></Col>
                        <Col span={6}><Progress
                            type="circle"
                            percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                            width='100px'
                            strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Segmentos, intervalos e ondas</Paragraph>
                        </Col>
                        <Col span={6}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Como determinar o ritmo, o eixo e a frequência</Paragraph>
                        </Col>
                        <Col span={6}></Col>
                    </Row>


                    <Divider orientation="left" style={{ marginTop: "80px" }}><Title level={3}>Nível 3: Interpretação dos traçados anormais</Title></Divider>


                    <Divider orientation="left" style={{ marginTop: "20px" }}> <Title level={4}>Módulo 1</Title></Divider>


                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} style={{ textAlign: "center" }}>Alterações do eixo</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>


                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeColor='#6CB6C9'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Sobrecargas atriais</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} >Sobrecargas ventriculares</Paragraph>
                        </Col>
                    </Row>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Bloqueios de ramo</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>

                    <Divider orientation="left" style={{ marginTop: "20px" }}> <Title level={4}>Módulo 2</Title></Divider>


                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Introdução às arritmias – mecanismos, causas e manifestações clínicas</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeColor='#6CB6C9'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Classificação das arritmias</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Bradiarritmias</Paragraph>
                        </Col>
                    </Row>


                    <Row style={{ marginLeft: "100px", marginTop: "80px" }} type="flex">
                        <Col span={6}></Col>
                        <Col span={6}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Extrassístoles supraventriculares e ventriculares</Paragraph>
                        </Col>
                        <Col span={6}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Taquiarritmias supraventriculares</Paragraph>
                        </Col>
                        <Col span={6}></Col>
                    </Row>


                    <Divider orientation="left" style={{ marginTop: "50px" }}> <Title level={3}>Nível 4: Isquemia miocárdica</Title></Divider>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>O infarto do miocárido e seus estágios</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>


                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeColor='#6CB6C9'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Manifestações eletrocardiográficas do infarto</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Anatomia coronariana e diagnóstico topográfico</Paragraph>
                        </Col>
                    </Row>

                    <Row style={{ marginLeft: "200px", marginTop: "80px" }} type="flex">
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Síndromes coronarianas agudas e angina de Prinzmetal </Paragraph>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </Col>
            </Row>
            </Card>
        </div>

    );
}

PositionedTooltips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedTooltips);