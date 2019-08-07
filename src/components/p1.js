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
  Popover,
  Typography
} from "antd";
import Evol from "../components/evolution";
import cora from "./cora.svg";


const { Title } = Typography;


const content = (
  <div>
    <Title level={4}>Se você acertar as 3 questões sobre Eletrofisiologia Cardíaca, seu Avatar poderá evoluir.
Vamos tentar?

</Title>

  </div>
);


const RadioGroup = Radio.Group;
const { Step } = Steps;
const close = () => {
  console.log(
    "Notification was closed. Either the close button was clicked or duration time elapsed."
  );
};

const dica = () => {
  message.success("Para reconhecer se o ritmo é sinusal ou não, lembre- se de olhar a onda nas derivações da parede inferior (DII, DIII e aVF)", 5);
};
const dica2 = () => {
  message.success(" Com essas derivações é possível determinar em qual quadrante está o eixo elétrico do coração. Esse deve ser sempre o primeiro passo para localizá-lo. Procure no texto a parte sobre EIXO. Você vai entender tudo rapidinho!", 5);
};
const dica3 = () => {
  message.success("Podemos encontrar a onda T, uma deflexão negativa, ao final do traçado eletrocardiográfico. Tente lembrar do percurso do estímulo elétrico pelo coração – isso pode te ajudar! Em todo caso, na parte do texto sobre TRAÇADO NO ECG você encontrará a resposta.", 5);
};

function info() {
  Modal.info({
    title: "Lamento, resposta incorreta",
    content: <Button onClick={dica}>Dica</Button>,
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

function success() {
  Modal.success({
    title: "Parabéns! Resposta Correta!",
    onOk() { }
  });
}

function success2() {
  Modal.success({
    content: (
      <div>
        <Evol />
        <Title level={4}>
          Parabéns!!!
   Você não é mais um bebê!
Seu avatar evoluiu! </Title>
      </div>
    ),
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    },
    onOk() { }
  });
}

const steps = [
  {
    title: "Pergunta 1",
    content: (
      <div>
        
        <p><b>
          (MEDELETRO VOL 1) Que derivação avalia a corrente elétrica na direção
          do braço direito para o braço esquerdo?
          </b>
        </p>
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    A
                  </Button>
                  V1
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    B
                  </Button>
                  DII
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    C
                  </Button>
                  V2
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info}>
                    D
                  </Button>
                  aVF
                </Col>
                <Col span={12} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    E
                  </Button>
                  DI
                </Col>
              </Row>
            </RadioGroup>
            
          </Col> 
          
        </Row>
        <Col>
          <Popover content={content} placement="topRight"
              trigger="hover">
              <img
                src={cora}
                className="Cora"
                alt="cora"
                style={{ marginLeft: "800px" }}
              />
            </Popover>
            </Col>
      </div>
    )
  },
  {
    title: "Pergunta 2",
    content: (
      <div>
        <p>
          (MEDELETRO VOL 1) Para a adequada definição do eixo elétrico da
          despolarização ventricular (QRS) no plano frontal, quais são as 2
          primeiras derivações que devem ser analisadas?
        </p>
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info2}>
                    A
                  </Button>
                  DI e DII
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info2}>
                    B
                  </Button>
                  V1 e V2
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info2}>
                    C
                  </Button>
                  DII e DIII
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success}>
                    D
                  </Button>
                  DI e aVF
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info2}>
                    E
                  </Button>
                  DIII e aVL
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Pergunta 3",
    content: (
      <div>
        <p>
          (MEDELETRO VOL 1) No eletrocardiograma, a onda T representa que fase
          da atividade elétrica do coração?
        </p>
        <Row>
          <Col span={24}>
            <RadioGroup buttonStyle="solid">
              <Row>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info3}>
                    A
                  </Button>
                  Despolarização atrial.
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info3}>
                    B
                  </Button>
                  Repolarização atrial.
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info3}>
                    C
                  </Button>
                  Condução do estímulo através do nodo atrioventricular.
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={info3}>
                    D
                  </Button>
                  Despolarização ventricular.
                </Col>

                <Col span={24} style={{ marginTop: "15px" }}>
                  <Button type="default" onClick={success2}>
                    E
                  </Button>
                  Repolarização ventricular.
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  }
];

export default class Ques extends React.Component {
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

        {current > 0 && (
            <Button onClick={() => this.previous()}>
              Pergunta Anterior
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.next()}>
              Próxima Pergunta
            </Button>                
            
          )}
        </div>
      </div>
    );
  }
}
