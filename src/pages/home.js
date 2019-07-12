import React from "react";
import { Card, Col, Row, Popover } from "antd";
import Feed from "../components/feed";
import Paragraph from "antd/lib/typography/Paragraph";
import cora from "./cora.svg";

const text = (
  <span>
    Olá! Eu sou a Cora e estou aqui para ajudar a navegar no ECG Tutor.
  </span>
);
const content = (
  <Paragraph strong={true}>
    <img
      src={cora}
      className="Cora"
      alt="cora"
      style={{ marginLeft: "250px" }}
    />

    <p>
      O ECG tutor é um sistema com inteligência artificial capaz de
      individualizar seu aprendizado, além de conter tecnologia
    </p>
    <p>
      de gamificação, para que você se sinta engajado e motivado com seus
      estudos.O curso é composto por etapas, sendo
    </p>
    <p>possível desbloquear a próxima etapa apenas após concluir a anterior.</p>
    <p>
      Inicialmente, seu Avatar ainda é um bebê, mas poderá evoluir após a
      conclusão da primeira fase.
    </p>
  </Paragraph>
);

const tablis = [
  {
    key: "tab2",
    tab: "Feed Notícias"
  }
];

const contentList = {
  tab2: (
    <div>
      <Feed />
    </div>
  )
};

export default class Home extends React.Component {
  state = {
    key: "tab2"
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: "100%", marginTop: "70px" }}
          title="Início"
          tabList={tablis}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, "key");
          }}
        >
        
            {contentList[this.state.key]}
         
        </Card>
      </div>
    );
  }
}
