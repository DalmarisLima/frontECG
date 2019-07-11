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
https://www.health-tutor.com/sinus-bradycardia-ecg.html
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
    <Button type="default" size="small" onClick={() => notification.close(key1)}>
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
        (CESGRANRIO- 2008) São células de tecidos que demonstram propriedade de
        despolarização diastólica espontânea em corações normais, EXCETO:
      </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  A
                </Button>
                Feixe de His.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
                Fibras de Purkinje.
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                Nódulo Sinoatrial.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  D
                </Button>
                Células musculares miocárdicas.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
                Ramos direito e esquerdo.
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
