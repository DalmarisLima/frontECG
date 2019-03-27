import React from 'react';
import { Radio, Alert, Row, Col, Button, notification, Card, Avatar,Typography  } from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Title } = Typography;

const close = () => {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };
  
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Próxima Pergunta
      </Button>
    );
    notification.open({
      message: 'Muito Bem!',
      description: <Alert message="Resposta Correta" type="success" />,
      btn,
      key,
      onClose: close,
      icon: <Avatar src="https://img.icons8.com/dusk/64/000000/ok.png"/>,
    });
    
};
const openNotificationError = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Dica
      </Button>
    );
    notification.open({
      message: 'Lamento!',
      description: <Alert message="Resposta Incorreta" type="error"/>,
      btn,
      key,
      onClose: close,
      icon: <Avatar src="https://img.icons8.com/dusk/64/000000/cancel.png"/>,
    });
};

export default class Pratice extends React.Component {
    state = {
        value: null,
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <Card
            type="inner"
            title= {<Title level={4}>1. Pergunta</Title>}
        >
            <Row>
                <Col span={24}> 
                    <RadioGroup onChange={this.onChange} value={this.state.value} buttonStyle="solid">
                        <Row>
                            <Col span={24} style={{marginTop:"15px"}}>
                                <RadioButton value="a">A</RadioButton>
                            </Col>

                            <Col span={24} style={{marginTop:"15px"}}>
                                <RadioButton value="b">B</RadioButton>
                            </Col>

                            <Col span={24} style={{marginTop:"15px"}}>
                                <RadioButton value="c">C</RadioButton>
                            </Col>

                            <Col span={24} style={{marginTop:"15px"}}>
                                <RadioButton value="d">D</RadioButton>
                            </Col>

                            <Col span={24} style={{marginTop:"15px"}}>
                                <RadioButton value="e">E </RadioButton>
                            </Col>

                            <Col span={24} style={{marginTop:"30px"}}> 
                                {this.state.value === "a" ? <Button type="primary" onClick={openNotification}>Confirmar Resposta</Button> :null}
                                {this.state.value === "b" ? <Button type="primary" onClick={openNotificationError}>Confirmar Resposta</Button>: null}
                                {this.state.value === "c" ? <Button type="primary" onClick={openNotificationError}>Confirmar Resposta</Button> : null}
                                {this.state.value === "d" ? <Button type="primary" onClick={openNotificationError}>Confirmar Resposta</Button> : null}
                                {this.state.value === "e" ? <Button type="primary" onClick={openNotificationError}>Confirmar Resposta</Button> : null}
                            </Col>
                        </Row>
                    </RadioGroup>
                </Col>
            </Row>
            </Card>
        );

    }
}
