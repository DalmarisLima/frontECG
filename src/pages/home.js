import React from "react";
import { Card, Col, Row, Popover, Typography } from "antd";
import Feed from "../components/feed";
import Paragraph from "antd/lib/typography/Paragraph";
import cora from "./cora.svg";

const { Title } = Typography;

const content = (

  <div>
    <Title level={4}> <p>O ECG tutor é um sistema com inteligência artificial capaz de</p>
      <p>individualizar seu aprendizado, além de conter tecnologia</p>
      <p>de gamificação, para que você se sinta engajado e motivado com seus</p>
      <p>estudos. O curso é composto por etapas, sendo </p>
      <p>possível desbloquear a próxima etapa apenas após concluir a anterior.</p>
      <p>Inicialmente, seu Avatar ainda é um bebê, mas poderá evoluir após a</p>
      <p> conclusão da primeira fase.</p></Title>
  </div>
);

const tablis = [
  {
    key: "tab1",
    tab: "Início"
  },
  {
    key: "tab2",
    tab: "Feed Notícias"
  }
];

const contentList = {
  tab1: (
    <div>
      <Popover content={content} placement="right"

        trigger="hover">
        <img
          src={cora}
          className="Cora"
          alt="cora"
          style={{ marginLeft: "250px" }}
        />
      </Popover>
    </div>
  ),
  tab2: (
    <div>
      <Feed />
    </div>
  )
};

export default class Home extends React.Component {
  state = {
    key: "tab1"
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
