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
       title= {<Title level={4}>Árvore do Conhecimento</Title>}
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
                            <Paragraph strong={true}>Geração/ <br/>
                            Formação e Condução/<br/>
                            Propagação do estímulo</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}><Progress
                            type="circle"
                            percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                            width='100px'
                            strokeWidth='10' />
                            <Paragraph strong={true} >Células cardíacas: <br/>
                            elétricas <br/>
                            (rápidas e lentas)<br/>
                             e miocárdicas</Paragraph>
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
                            <Paragraph strong={true}>Bases da <br/>
                            eletrocardiografian<br/>
                            (teoria do dipolo, vetores e ondas)</Paragraph>
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
                            <Paragraph strong={true}>Derivações do ECG e <br/>
                             Triângulo de Einthoven</Paragraph>
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
                            <Paragraph strong={true} >Colocação dos eletrodos<br/>
                             no paciente</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} >Papel do ECG - <br/>
                            tempo e voltagem</Paragraph>
                        </Col>
                    </Row>

                    <Row style={{ marginLeft: "100px", marginTop: "80px" }} type="flex">
                        <Col span={6}></Col>
                        <Col span={6}><Progress
                            type="circle"
                            percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                            width='100px'
                            strokeWidth='10' />
                            <Paragraph strong={true} >Segmentos, <br/>
                            intervalos e ondas</Paragraph>
                        </Col>
                        <Col span={6}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true} >Como determinar o ritmo,<br/>
                             o eixo e a frequência</Paragraph>
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
                            <Paragraph strong={true}>Alterações do eixo</Paragraph>
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
                            <Paragraph strong={true}>Introdução às arritmias –<br/>
                             mecanismos, causas e<br/>
                              manifestações clínicas</Paragraph>
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
                            <Paragraph strong={true}>Extrassístoles <br/>
                            supraventriculares e <br/>
                            ventriculares</Paragraph>
                        </Col>
                        <Col span={6}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Taquiarritmias<br/>
                             supraventriculares</Paragraph>
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
                            <Paragraph strong={true}>O infarto do miocárido<br/>
                             e seus estágios</Paragraph>
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
                            <Paragraph strong={true}>Manifestações <br/>
                            eletrocardiográficas<br/>
                             do infarto</Paragraph>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Progress
                                type="circle"
                                percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                                width='100px'
                                strokeWidth='10' />
                            <Paragraph strong={true}>Anatomia coronariana<br/>
                             e diagnóstico topográfico</Paragraph>
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
                            <Paragraph strong={true}>Síndromes<br/>
                             coronarianas agudas e<br/>
                              angina de Prinzmetal </Paragraph>
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