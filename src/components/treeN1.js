import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Row, Col, Divider, Typography } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import Paragraph from 'antd/lib/typography/Paragraph';

const styles = {
    root: {
        width: 500,
    },
};

function PositionedTooltips(props) {
    const { classes } = props;
    return (
        <div>
            <Divider orientation="left">Nível 1: Eletrofisiologia cardíaca</Divider>
            <Row style={{marginTop:"80px"}}>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={100} format={() => <img src="https://img.icons8.com/dusk/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Potencial de ação</Paragraph>
                </Col>

                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={20} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeColor='#6CB6C9'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Geração /</Paragraph>
                    <Paragraph strong={true}>Formação e Condução /</Paragraph>
                    <Paragraph strong={true}>Propagação do estímulo</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                   <Paragraph strong = {true}>Células cardíacas:</Paragraph>
                   <Paragraph strong = {true}> elétricas (rápidas e lentas) e miocárdicas</Paragraph>
                </Col>
            </Row>

            <Row type="flex" justify="space-around">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row type="flex" justify="space-around">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 13, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Bases da eletrocardiografia</Paragraph>
                   <Paragraph strong = {true}> (teoria do dipolo, vetores e ondas)</Paragraph>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>

            <Divider orientation="left" style={{marginTop: "40px"}}>Nível 2: Entendendo o traçado eletrocardiográfico normal</Divider>

            <Row style={{marginTop:"30px"}}>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png"/>}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Derivações do ECG e Triângulo de Einthoven</Paragraph>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeColor='#6CB6C9'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Colocação dos eletrodos no paciente</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Papel do ECG - tempo e voltagem</Paragraph>
                </Col>
            </Row>

            <Row type="flex" justify="space-around">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row type="flex" justify="space-around" style={{marginTop:"100px"}}>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Segmentos, intervalos e ondas</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Como determinar o ritmo, o eixo e a frequência</Paragraph>
                </Col>
            </Row>

            <Divider orientation="left" style={{marginTop: "80px"}}>Nível 3: Interpretação dos traçados anormais</Divider>
            <Divider style={{marginTop: "20px"}}>Módulo 1</Divider>
            <Row style={{marginTop: "30px"}}>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Alterações do eixo</Paragraph>
                </Col>

                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeColor='#6CB6C9'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Sobrecargas atriais</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Sobrecargas ventriculares</Paragraph>
                </Col>
            </Row>



            <Row type="flex" justify="space-around">
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 13, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Bloqueios de ramo</Paragraph>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>
            <Divider style={{marginTop: "40px"}}>Módulo 2</Divider>
            <Row style={{marginTop:"30px"}}>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png"/>}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Introdução às arritmias – mecanismos, causas e manifestações clínicas</Paragraph>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>
            <Row style={{marginTop:"80px"}}>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeColor='#6CB6C9'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Classificação das arritmias</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Bradiarritmias</Paragraph>
                </Col>
            </Row>

            <Row type="flex" justify="space-around">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row type="flex" justify="space-around" style={{marginTop:"100px"}}>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Extrassístoles supraventriculares e ventriculares</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Taquiarritmias supraventriculares</Paragraph>
                </Col>
            </Row>
            <Divider orientation="left" style={{marginTop: "50px"}}>Nível 4: Isquemia miocárdica</Divider>

            <Row > 
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png"/>}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>O infarto do miocárido e seus estágios</Paragraph>
                </Col>

                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeColor='#6CB6C9'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Manifestações eletrocardiográficas do infarto</Paragraph>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Anatomia coronariana e diagnóstico topográfico</Paragraph>
                </Col>
            </Row>

            <Row type="flex" justify="space-around">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>


            <Row type="flex" justify="space-around">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 13, offset: 3 }}>
                    <Progress
                        type="circle"
                        percent={0} format={() => <img src="https://img.icons8.com/wired/48/000000/heart-with-pulse.png" />}
                        width='100px'
                        strokeWidth='10' />
                    <Paragraph strong = {true}>Síndromes coronarianas agudas e angina de Prinzmetal </Paragraph>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>

        </div>

    );
}

PositionedTooltips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedTooltips);