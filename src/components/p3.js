import React from "react";
import {
  Radio,
  Alert,
  Row,
  Col,
  Button,
  notification,
  Card,
  Avatar,
  Typography
} from "antd";
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Title } = Typography;
const key1 = "p2";

const close = () => {
  console.log(
    "Notification was closed. Either the close button was clicked or duration time elapsed."
  );
};
const openNotification3 = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <div>
      <p>
        <strong>
          Parabéns!! Seu avatar evoluiu, você agora pode escolher entre o avatar
          de Doutor(a), basta que o clique
        </strong>
      </p>
    </div>
  );
  notification.open({
    message: "Muito Bem!",
    description: <Alert message="Resposta Correta" type="success" />,
    btn,
    key,
    onClose: close,
    icon: <Avatar src="https://img.icons8.com/dusk/64/000000/ok.png" />
  });
};

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="default" size="small" onClick={() => notification.close(key)}>
      Próxima Pergunta
    </Button>
  );
  notification.open({
    message: "Muito Bem!",
    description: <Alert message="Resposta Correta" type="success" />,
    btn,
    key,
    onClose: close,
    icon: <Avatar src="https://img.icons8.com/dusk/64/000000/ok.png" />
  });
};
const openNotificationError = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="default" size="small" onClick={() => notification.close(key)}>
      Dica
    </Button>
  );
  notification.open({
    message: "Lamento!",
    description: <Alert message="Resposta Incorreta" type="error" />,
    btn,
    key,
    onClose: close,
    icon: <Avatar src="https://img.icons8.com/dusk/64/000000/cancel.png" />
  });
};


export default class Pratice extends React.Component {
  state = {
    value: null,
    noTitleKey: "p1"
  };
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: "100%" }}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
         <div>
      <p>
        (MEDELETRO VOL 1) A sequência normal da ativação ao longo do tecido de
        condução cardíaco é melhor representada por:
      </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  A
                </Button>
                Nodo atrioventricular – Nodo sinusal – Feixe de His – Fibras de
                Purkinje.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification3}>
                  B
                </Button>
                Nodo sinusal – Feixes internodais – Nodo Atrioventricular –
                Feixe de His – Sistema de Purkinje.
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                Nodo sinoatrial – Nodo atrioventricular – Sistema de Purkinje –
                Feixe de His.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
                Feixe de His – Nodo atrioventricular – Nodo sinusal – Feixe de
                His – Sistema de Purkinje.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
                Nodo atrioventricular – Feixes interatriais – Nodo sinusal –
                Feixe de His – Sistema de Purkinje.
              </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    </div>
        </Card>
      </div>
    );
  }
}
