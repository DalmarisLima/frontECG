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
import cora from "./cora.svg";
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Title } = Typography;
const key1 = "p2";

const { Title } = Typography;


const content = (
  <div>
    <Title level={4}>O link para os vídeos citados no material de texto sobre Eletrofisiologia Cardíaca estão disponíveis aqui. 
</Title>


    <Title level={4}>Quando você achar que está pronto, clica em PRATICAR para responder às 3 questões sobre o assunto!
</Title>
  </div>
);



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

const tabListNoTitle = [
  {
    key: "p1",
    tab: "Pergunta 1"
  },
  {
    key: "p2",
    tab: "Pergunta 2"
  },
  {
    key: "p3",
    tab: "Pergunta 3"
  }
];

const contentListNoTitle = {
  p1: (
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
  ),
  p2: (
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
  ),
  p3: (
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
  )
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
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}
