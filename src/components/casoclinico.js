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
import Evol from "../components/evolution";

const RadioGroup = Radio.Group;
const { Step } = Steps;

const dica = () => {
  message.success("Reler material de apoio", 1);
};

function success() {
  Modal.success({
    title: "Parabéns! Resposta Correta!",
    onOk() {}
  });
}

function info() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica}>Dica</Button>,
    onOk() {}
  });
}

const steps = [
  {
    title: "Caso Clínico: ",
    content: (
      <div>
        <p>
          Identificação: R. A. S., 33 anos, solteiro, empresário <br />
          Cenário: consultório médico <br />
          Queixa: assintomático O paciente nega comorbidades, uso de
          medicamento, uso de drogas ilícitas, cirurgias, traumas ou
          hemotransfusão.
          <br /> Ao examiná-lo, você nota bom estado geral, eupneico, hidratado,
          corado, afebril. Exame neurológico, respiratório, cardiovascular e
          abdominal normais.
          <br /> O ECG trazido pelo paciente está exibido abaixo:
          <br />
          <img src="https://www.health-tutor.com/files/content/ECG/Sinus_bradycardia_ecg.jpg" />
        </p>
      </div>
    )
  },
  {
    title: "Pergunta 1:",
    content: (
      <div>
        Com base nas informações apresentadas, responda: Qual o ritmo
        apresentado no ECG acima?
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    A
                  </Button>
                  Sinusal
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    B
                  </Button>
                  Não sinusal
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Pergunta 2:",
    content: (
      <div>
        Onde está o eixo elétrico do ECG acima?
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    A
                  </Button>
                  Entre -45 e 0 graus
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    B
                  </Button>
                  Entre 0 e +90 graus
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    C
                  </Button>
                  Entre +90 e +180 graus
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Pergunta 3:",
    content: (
      <div>
        Qual a frequência cardíaca detectada no ECG acima?
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    A
                  </Button>
                  Aproximadamente 45 bpm
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    B
                  </Button>
                  Aproximadamente 60bpm
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    C
                  </Button>
                  Aproximadamente 75bpm
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    D
                  </Button>
                  Maior que 100bpm
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Pergunta 4:",
    content: (
      <div>
        Como você interpreta a frequência cardíaca encontrada?
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    A
                  </Button>
                  Normal
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    B
                  </Button>
                  Bradicardia
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    C
                  </Button>
                  Taquicardia
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Pergunta 5:",
    content: (
      <div>
        Pensando na principal suspeita clínica, que conduta você adotaria?
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    A
                  </Button>
                  Orientação para procurar um cardiologista devido à FC alterada
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    B
                  </Button>
                  Tranquilizaria o paciente, pois a FC está normal
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    C
                  </Button>
                  Tranquilizaria o paciente, pois apesar da FC estar alterada,
                  trata-se de fenômeno fisiológico decorrente da prática de
                  exercícios físicos
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  }
];

export default class CasoClinico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
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
              Próxima etapa
            </Button>
          )}
        </div>
      </div>
    );
  }
}
