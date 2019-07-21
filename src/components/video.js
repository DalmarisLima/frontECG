import React from "react";
import { Steps, Button, Radio, Icon, Typography, Popover } from "antd";
import cora from "./cora.svg";

const { Title } = Typography;


const content = (
  <div>
    <Title level={4}>O link para os vídeos citados no material de texto sobre Eletrofisiologia Cardíaca estão disponíveis aqui. 
</Title>


    <Title level={4}>Quando você achar que está pronto, clica em PRATICAR para responder às 3 questões sobre o assunto!
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
        <p />
        <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            height="300"
            src="https://www.youtube.com/embed/kwLbSx9BNbU?controls=0&showinfo=0"
          />
        </a>
        <Popover content={content} placement="top"

          trigger="hover">
          <img
            src={cora}
            className="Cora"
            alt="cora"
            style={{ marginLeft: "250px" }}
          />
        </Popover>
      </div>
    )
  },
  {
    title: "Vídeo sobre triângulo de Einthoven:",
    content: (
      <div>
        <p />
        <a target="_blank" rel="noopener noreferrer">
          <iframe
            frameborder="0"
            height="300"
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
            height="300"
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
            height="300"
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
            height="300"
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
        </div>
      </div>
    );
  }
}
