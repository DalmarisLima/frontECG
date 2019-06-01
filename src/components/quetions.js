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
  },
  {
    key: "p4",
    tab: "Pergunta 4"
  }
];

const contentListNoTitle = {
  p1: (
    <div>
      <p>
        (UFF – 2016) A tetrodotoxina é uma toxina produzida pelos
        tetraodontiformes, sendo seu representante mais conhecido o Baiacu. Tal
        toxina possui efeito de bloquear a ação dos canais de sódio voltagem
        dependentes. Considerando as bases iônicas dos potenciais de ação da
        fibra de resposta rápida e fibra de resposta lenta, faça o que se pede:
        Qual a ação dessa toxina na fibra de resposta rápida e na fibra de
        resposta lenta, respectivamente?
      </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  A
                </Button>
                Lentifica a resposta; acelera a resposta.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  B
                </Button>
                Lentifica a resposta; nenhuma ação.
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                Acelera a resposta; acelera a resposta.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
                Lentifica a resposta em ambas.
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
                <Button type="default" onClick={openNotificationError}>
                  A
                </Button>
                Miocárdio
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
                Valva Pulmonar
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  C
                </Button>
                Nó Sinoatrial
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
                Septo Interatrial
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
                Endocárdio
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
        (UCS- UNIV CAXIAS DO SUL) O automatismo cardíaco é gerado pela atividade
        do nodo sinusal. Essa função é fundamental para a manutenção da vida e
        para um fluxo sanguíneo adequado aos tecidos. As células auto excitáveis
        do nodo sinusal mantém essa característica devido:
      </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  A
                </Button>
                A uma corrente de sódio que é ativada sempre que a célula
                cardíaca é despolarizada (+10mV).
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
                A uma corrente de sódio que é ativada quando o potencial de
                membrana retorna ao valor de -65mV.
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                A uma corrente de cálcio lenta que mantém a tensão muscular
                desenvolvida.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
                A uma corrente de influxo de potássio que auxilia na
                despolarização ascendente.
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
                Nenhuma das anteriores.
              </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    </div>
  ),
  p4: (
    <div>
      <p>
        (UCS- UNIV CAXIAS DO SUL) Analise as sentenças abaixo e marque com V
        para aquelas julgadas com verdadeiras e F para aquelas julgadas como
        falsas:
        <br />
        1. ( ) Os potenciais de membrana dos cardiomiócitos são o resultado da
        permeabilidade relativa da membrana a vários íons e de suas diferenças
        de concentração através da membrana.
        <br />
        2. ( ) Os potenciais ação dos cardiomiócitos possuem platôs prolongados
        que geram períodos refratários longos e impedem contrações somadas.
        <br />
        3. ( ) Os impulsos elétricos são gerados espontaneamente pelas células
        marca-passo do nodo sinusal e conduzidos de célula a célula através de
        vias intermodais e de junções comunicantes intercelulares.
        <br />
        4. ( ) A frequência de despolarização espontânea das células do nodo
        sinusal é modulada pelo sistema nervoso visceral eferente.
      </p>

      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  A
                </Button>
                V V V F
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
                V F V F
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                V F F F
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  D
                </Button>
                V V V V
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
                F F V F
              </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    </div>
  ),
  p5: (
    <div>
      <p />
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  A
                </Button>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                <p>adadad</p>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
              </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    </div>
  ),
  p6: (
    <div>
      <p />
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotification}>
                  A
                </Button>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  B
                </Button>
              </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  C
                </Button>
                <p>adadad</p>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  D
                </Button>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={openNotificationError}>
                  E
                </Button>
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
