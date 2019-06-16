import React from "react";
import {
  Steps,
  Button,
  message,
  Radio,
  Alert,
  Row,
  Col,
  notification,
  Card,
  Modal,
  Typography
} from "antd";

const RadioGroup = Radio.Group;
const { Step } = Steps;
const close = () => {
  console.log(
    "Notification was closed. Either the close button was clicked or duration time elapsed."
  );
};

function info() {
  Modal.info({
    title: 'Lamento, resposta incoreta',
    content: (
      <div>
        <p>Aqui vai a dica </p>
      </div>
    ),
    onOk() { },
  });
}

function success() {
  Modal.success({
    title: 'Parabés! Resposta Correta!',
    onOk() { },
  });
}

function success2() {

  Modal.success({
    content: (
      <div>
        <strong>
          Parabéns!! Seu avatar evoluiu, você agora pode escolher entre o avatar
          de Doutor(a), basta que o clique
            </strong>
      </div>

    ),
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    },
    onOk() { },
  });
}

const steps = [
  {
    title: 'Pergunta 1',
    content: <div>
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
                  onClick={info}>
                  A
              </Button>
                Miocárdio.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  B
              </Button>
                Valva pulmonar.
            </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={success}>
                  C
              </Button>
                Nó sinoatrial.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  D
              </Button>
                Septo interatrial.
            </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  E
              </Button>
                Endocárdio.
            </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    </div>
  },
  {
    title: 'Pergunta 2',
    content: <div>
      <p>
        (CESGRANRIO- 2008) São células de tecidos que demonstram propriedade de
        despolarização diastólica espontânea em corações normais, EXCETO:
    </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  A
              </Button>
                Feixe de His.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  B
              </Button>
                Fibras de Purkinje.
            </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  C
              </Button>
                Nódulo Sinoatrial.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={success}>
                </Button>
                Células musculares miocárdicas.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  E
              </Button>
                Ramos direito e esquerdo.
            </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    </div>
  },
  {
    title: 'Pergunta 3',
    content: <div>
      <p>
        (MEDELETRO VOL 1) A sequência normal da ativação ao longo do tecido de
        condução cardíaco é melhor representada por:
    </p>
      <Row>
        <Col span={24}>
          <RadioGroup buttonStyle="solid">
            <Row>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  A
              </Button>
                Nodo atrioventricular – Nodo sinusal – Feixe de His – Fibras de
                Purkinje.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={success2}>
                  B
              </Button>
                Nodo sinusal – Feixes internodais – Nodo Atrioventricular –
                Feixe de His – Sistema de Purkinje.
            </Col>
              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  C
              </Button>
                Nodo sinoatrial – Nodo atrioventricular – Sistema de Purkinje –
                Feixe de His.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
                  D
              </Button>
                Feixe de His – Nodo atrioventricular – Nodo sinusal – Feixe de
                His – Sistema de Purkinje.
            </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Button type="default" onClick={info}>
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
  },
];

export default class Ques extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Próxima Pergunta
            </Button>
          )}
        </div>
      </div>
    );
  }
}