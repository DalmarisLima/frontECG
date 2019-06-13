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
        (MUNDO EDUCAÇÃO – UOL) Para que o coração mantenha seu ritmo, existe um
        complexo sistema excitatório atuando nesse órgão. Uma dessas estruturas
        é conhecida como marcapasso natural, que atua mandando impulsos que
        garantem a contração do coração. Verifique as alternativas a seguir e
        marque aquela que indica corretamente o nome dessa região do coração.
      </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button
                  type="default"
                  onClick={
                    (notification.close(openNotificationError.key),
                    openNotificationError)
                  }
                >
                  A
                </Button>
                Miocárdio.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
                Valva pulmonar.
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  C
                </Button>
                Nó sinoatrial.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
                Septo interatrial.
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
                Endocárdio.
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
