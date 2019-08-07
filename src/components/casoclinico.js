import React from "react";
import {
  Steps,
  Button,
  message,
  Radio,
  Row,
  Col,
  Modal,
  Popover,
  Typography
} from "antd";
import cora from "./cora.svg";

const { Title } = Typography;


const content = (
  <div>
    <Title level={4}>Aqui, temos uma simulação de um caso clínico real e relato do paciente.  Você pode tentar ajudá-lo?</Title>
  </div>
);


const RadioGroup = Radio.Group;
const { Step } = Steps;

const dica1 = () => {
  message.success("Para reconhecer se o ritmo é sinusal ou não, lembre- se de olhar a onda nas derivações da parede inferior (DII, DIII e aVF)", 5);
};
const dica2 = () => {
  message.success("Que tal olhar novamente o QRS nas derivações DI e aVF?", 5);
};
const dica3 = () => {
  message.success(" Existem maneiras práticas para calcular a FC pelo ECG. Seria legal dar uma olhada no texto novamente. É bem rapidinho.", 5);
};
const dica4 = () => {
  message.success(" A diretriz brasileira sobre interpretação de ECG define de forma objetiva a faixa de FC normal. É interessante que você  não confunda com definições mais antigas. Dá uma conferida lá no texto de novo.", 5);
};
const dica5 = () => {
  message.success("A FC no atleta sofre interferência direita da modulação adrenégica, havendo predomínio da ação da acetilcolina.", 5);
};


function success() {
  Modal.success({
    title: "Parabéns! Resposta Correta!",
    onOk() { }
  });
}

function info1() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica1}>Dica</Button>,
    onOk() { }
  });
}
function info2() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica2}>Dica</Button>,
    onOk() { }
  });
}
function info3() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica3}>Dica</Button>,
    onOk() { }
  });
}
function info4() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica4}>Dica</Button>,
    onOk() { }
  });
}
function info5() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica5}>Dica</Button>,
    onOk() { }
  });
}

const steps = [
  {
    title: "Caso Clínico: ",
    content: (
      <div>
        <br />
        <Row>
          <Col span={12}>
          <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            width="100%"
            height="500"
            src="https://firebasestorage.googleapis.com/v0/b/ecgfront-b11dd.appspot.com/o/WhatsApp%20Video%202019-08-07%20at%2010.29.21.mp4?alt=media&token=effb355b-9699-4621-8b0c-31316969ec38"
          />
        </a>
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
          </Col>
          <Col>
            <Popover content={content} placement="top"
              trigger="hover">
              <img
                src={cora}
                className="Cora"
                alt="cora"
                style={{ marginLeft: "250px" }}
              />
            </Popover>
          </Col>
        </Row>
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
                  <Button type="default" onClick={info1}>
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
                  <Button type="default" onClick={info2}>
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
                  <Button type="default" onClick={info2}>
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
                  <Button type="default" onClick={info3}>
                    B
                  </Button>
                  Aproximadamente 60bpm
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info3}>
                    C
                  </Button>
                  Aproximadamente 75bpm
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info3}>
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
                  <Button type="default" onClick={info4}>
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
                  <Button type="default" onClick={info4}>
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
                  <Button type="default" onClick={info5}>
                    A
                  </Button>
                  Orientação para procurar um cardiologista devido à FC alterada
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info5}>
                    B
                  </Button>
                  Tranquilizaria o paciente, pois a FC está normal
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
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
  previous(){
    const current = this.state.current - 1;
    this.setState({ current });
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
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.previous()}>
              Etapa Anterior
            </Button>
          )}
        </div>
      </div>
    );
  }
}
