import React from "react";
import { Steps, Button, Radio, Icon, Typography, Popover, Row, Col } from "antd";
import cora from "./cora.svg";

const { Title } = Typography;


const content = (
  <div>
    <Title level={4}>
      <p>O link para os vídeos citados no material de texto sobre</p>
      <p>Traçado Eletrocardiográfico Normal estão disponíveis aqui.</p>
      <p>Quando você achar que está pronto, clica em PRATICAR para</p>
      <p>responder às 3 questões sobre o assunto!</p>

    </Title>
  </div>
);

const RadioGroup = Radio.Group;
const { Step } = Steps;

const steps = [
  {
    title: "Vídeo sobre derivações: ",
    content: (
      <div>
        <br/> 
        <Row>
          <Col span={12}>
            <a target="_blank" rel="noopener noreferrer">
              <iframe
                frameborder="0"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/kwLbSx9BNbU?controls=0&showinfo=0"
              />
            </a>
          </Col>
          <Col span={12}>
            <Popover content={content} placement="left"

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
    title: "Vídeo sobre triângulo de Einthoven:",
    content: (
      <div>
        <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/toco_cGs11M?controls=0&showinfo=0"
          />
        </a>
      </div>
    )
  },
  {
    title: "Preparo e colocação dos eletrodos:",
    content: (
      <div>
        <p />
        <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/TFVY7Nnqy28?controls=0&showinfo=0"
          />
        </a>
      </div>
    )
  },
  {
    title: "Eixo cardíaco:",
    content: (
      <div>
        <p />
        <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/_CCUWdAaQoA?controls=0&showinfo=0"
          />
        </a>
      </div>
    )
  },
  {
    title: "Frequência cardíaca no ECG:",
    content: (
      <div>
        <p />
        <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/mzz5I-K7Z0s?controls=0&showinfo=0"
          />
        </a>
      </div>
    )
  }
];
export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  previous() {
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
              Próximo vídeo
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.previous()}>
              Vídeo Anterior
            </Button>
          )}
        </div>
      </div>
    );
  }
}
